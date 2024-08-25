"use server";
import connectMongo from "@/utils/connectDb";
import UserModel from "@/models/UserModel";
import bcrypt from "bcrypt";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

const registerAction = async (data) => {
  const saltRound = 10;

  const { name, email, password } = data;
  if (!email || !password) {
    return {
      success: false,
      message: "Please provide email and password",
    };
  }
  const hashedPassword = await bcrypt.hash(password, saltRound);
  try {
    await connectMongo();
    const user = await UserModel.create({
      email,
      password: hashedPassword,
      name,
    });
    if (!user) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }
    return {
      success: true,
      message: "User registered successfully",
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return {
      success: false,
      message: error.message || "Please try again !",
    };
  }
};

export default registerAction;
