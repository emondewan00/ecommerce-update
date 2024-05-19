"use server";
import connectBD from "@/lib/connectDB";
import UserModel from "@/models/UserModel";
import bcrypt from "bcrypt";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";

const registerAction = async (formData) => {
  const saltRound = 10;
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  if (!email || !password) {
    return {
      success: false,
      message: "Please provide email and password",
    };
  }
  const hashedPassword = await bcrypt.hash(password, saltRound);
  try {
    await connectBD();
    const user = await UserModel.create({ email, password: hashedPassword , name});
    if (!user) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }
    redirect("/login");
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return {
      success: false,
      message: error.message,
    };
  }
};

export default registerAction;
