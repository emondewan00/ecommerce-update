import loginAction from "@/actions/login";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="self-center p-4 text-slate-700">
      <h1 className="text-4xl font-bold text-center">Login</h1>
      {/* {err && <h3 className=" my-4 p-2 rounded bg-rose-600">{err} </h3>} */}
      <form action={loginAction} className="space-y-4">
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
            className="w-full p-3  outline-blue-900 focus:outline duration-150 delay-100 ease-linear rounded mt-2"
            placeholder="xxxxxxxx"
          />
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
          Not a member ?{" "}
          <Link href={"/register"} className="text-blue-600 underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
