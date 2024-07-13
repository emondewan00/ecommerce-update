"use server";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { revalidatePath } from "next/cache";
const loginAction = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  if (!email || !password) {
    return {
      success: false,
      message: "Please provide email and password",
    };
  }

  try {
    const user = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/",
    });
    revalidatePath("/");
    redirect("/");
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

export default loginAction;
