"use server";
import connectMongo from "@/utils/connectDb";
import UserModel from "@/models/UserModel";

export const getUser = async (userId) => {
  await connectMongo();
  const user = await UserModel.findById(userId);
  return user;
};
