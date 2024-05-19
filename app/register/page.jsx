import registerAction from "@/actions/register";
import RegisterForm from "@/components/register/RegisterForm";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";
const Register = () => {

  return (
    <div className="mt-14 mb-20 bg-gray-100  mx-auto max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0">
        <Image
          width={500}
          height={500}
          src="/images/delivery.jpg"
          className="h-3/4 w-full object-cover md:h-full block "
          alt=""
        />
       <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
