"use server";

import { connectMongo } from "@/lib/connectDb";
import UserModel from "@/models/UserModel";
const addAddress = async (data) => {
  try {
    await connectMongo();
    const user = await UserModel.findById(data?.userId);
    if (!user) {
      return {
        message: "Couldn't find user",
        status: "error",
        success: false,
      };
    }
    user.addresses.push(data);
    await user.save();
    return {
      message: "Address added successfully",
      status: "success",
      success: true,
    };
  } catch (error) {
    return {
      message: error.message || "An error occurred",
      status: "error",
      success: false,
    };
  }
};

export default addAddress;
