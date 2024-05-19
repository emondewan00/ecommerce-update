// "use client";
import registerAction from "@/actions/register";
import Link from "next/link";
// import { useFormState } from "react";

const RegisterForm = () => {
  //   const [state, formAction] = useFormState(registerAction, null);

  return (
    <div className="self-center p-4 text-slate-700">
      <h1 className="text-4xl font-bold text-center">Sign Up</h1>
      {/* {!state.success && (
        <h3 className=" my-4 p-2 rounded bg-rose-600">{state.message} </h3>
      )}
      {state.success && (
        <h3 className=" my-4 p-2 rounded bg-green-600">{state.message} </h3>
      )} */}
      <form action={registerAction} className="space-y-4">
        <div>
          <label htmlFor="name" className="text-xl">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3  outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xl">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3  outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
            placeholder="example@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-xl">
            Password <span className="text-red-600">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            minLength={6}
            className="w-full p-3  outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
            placeholder="xxxxxxxx"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded text-xl"
          >
            Register
          </button>

          <p className="">
            Already have an account ?{" "}
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
