"use client";
import { useForm } from "react-hook-form";
import registerAction from "@/actions/register";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    const result = await registerAction(data);
    if (result.success) {
      toast.success(result.message);
      router.push("/login");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="self-center p-4 text-slate-700">
      <h1 className="text-4xl font-bold text-center">Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-xl">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-red-600 mt-2">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-xl">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: "Please enter a valid email address",
              },
            })}
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
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
            className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded text-xl"
          >
            Register
          </button>

          <p className="">
            Already have an account?{" "}
            <Link href={"/login"} className="text-blue-600 underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
