"use server";
import connectMongo from "@/utils/connectDb";
import UserModel from "@/models/UserModel";
import { revalidatePath } from "next/cache";

export async function getDefaultAddress(userId) {
  try {
    await connectMongo();
    const user = await UserModel.findById(userId).lean();
    if (!user) {
      return null;
    }
    const defaultAddress = user.addresses.find(
      (address) => address.isShippingDefault
    );

    const _id = defaultAddress._id.toString();

    return { ...defaultAddress, _id, userId };
  } catch (err) {
    console.error("Error finding default address:", err);
    return null;
  }
}

export async function findAddressById(userId, addressId) {
  try {
    await connectMongo();
    const user = await UserModel.findById(userId).lean();
    if (!user) {
      return [];
    }
    const address = user.addresses.find(
      (address) => address._id.toString() === addressId
    );

    const _id = address._id.toString();
    const { updatedAt, createdAt, ...rest } = address;
    return { ...rest, _id, userId };
  } catch (err) {
    console.error("Error finding address:", err);
    return [];
  }
}

// Function to update an address within a user's addresses array

export async function updateAddress(address) {
  try {
    await connectMongo();
    const updateResult = await UserModel.updateOne(
      {
        _id: address.userId,
        "addresses._id": address._id,
      },
      {
        $set: {
          "addresses.$": address,
        },
      }
    );

    if (updateResult.modifiedCount === 0) {
      return {
        message: "Couldn't find user or address",
        status: "error",
        success: false,
      };
    }

    return {
      message: "Address updated successfully",
      status: "success",
      success: true,
    };
  } catch (err) {
    console.error("Error updating address:", err);
    return {
      message: err.message || "An error occurred while updating the address",
      status: "error",
      success: false,
    };
  }
}

export async function deleteAddress(userId, addressId) {
  try {
    await connectMongo();

    const updateResult = await UserModel.updateOne(
      { _id: userId },
      {
        $pull: {
          addresses: { _id: addressId },
        },
      }
    );
    if (updateResult.modifiedCount === 0) {
      return {
        message: "Couldn't find user or address",
        status: "error",
        success: false,
      };
    }
    revalidatePath("/dashboard/user/addresses");

    return {
      message: "Address deleted successfully",
      status: "success",
      success: true,
    };
  } catch (err) {
    console.error("Error deleting address:", err);
    return {
      message: err.message || "An error occurred while deleting the address",
      status: "error",
      success: false,
    };
  }
}
