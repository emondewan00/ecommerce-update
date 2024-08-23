import connectMongo from "@/utils/connectDb";
import UserModel from "@/models/UserModel";

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

    return { ...address, _id, userId };
  } catch (err) {
    console.error("Error finding address:", err);
    return [];
  }
}
