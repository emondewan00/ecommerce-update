"use server";
import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect";

const loginAction = async (data) => {
  const { email, password } = data;

  if (!email || !password) {
    return {
      success: false,
      message: "Please provide email and password",
    };
  }

  try {
    // TODO:get user from server and check password and call signIn method

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return {
      success: true,
      message: "Logged in successfully",
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return {
      success: false,
      message: "Email or password maybe incorrect! Please try again",
    };
  }
};

export default loginAction;
