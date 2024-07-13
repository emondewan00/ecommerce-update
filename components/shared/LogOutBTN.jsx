"use client";

import { FaArrowRightFromBracket } from "react-icons/fa6";
import { signOut } from "next-auth/react";
const LogOutBTN = () => {
  return (
    <button onClick={signOut}>
      <FaArrowRightFromBracket className="text-2xl text-white" />
    </button>
  );
};

export default LogOutBTN;
