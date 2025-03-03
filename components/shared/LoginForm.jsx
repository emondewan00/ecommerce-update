"use client";
import { useForm } from "react-hook-form";
import loginAction from "@/actions/login";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    const result = await loginAction(data);
    if (result.success) {
      toast.success(result.message);
      window.location.reload();
      router.push("/");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="self-center p-4 text-slate-700">
      <h1 className="text-4xl font-bold text-center">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="email" className="text-xl">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-3 outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
            placeholder="example@gmail.com"
          />
          {errors.email && (
            <p className="text-red-600 mt-2">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="text-xl">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            className="w-full p-3 outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
            placeholder="xxxxxxxx"
          />
          {errors.password && (
            <p className="text-red-600 mt-2">{errors.password.message}</p>
          )}
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded text-xl"
          >
            Login
          </button>
          <p className="text-blue-600 underline cursor-pointer">
            Forgot Password?
          </p>
        </div>
        <p className="">
          Not a member?{" "}
          <Link href={"/register"} className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
