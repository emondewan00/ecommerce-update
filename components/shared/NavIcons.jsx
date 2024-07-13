import { auth, signOut } from "@/auth";
import Link from "next/link";
import { FaRegHeart, FaRegUser, FaShoppingCart } from "react-icons/fa";
import {
  FaArrowRightFromBracket,
  FaArrowRightToBracket,
} from "react-icons/fa6";
import LogOutBTN from "./LogOutBTN";
const NavIcons = async () => {
  const session = await auth();

  return (
    <>
      {session?.user ? (
        <div className="flex gap-x-4 items-center">
          <Link href={"/wishlist"}>
            <FaRegHeart className="text-2xl text-white" />
          </Link>
          <Link href={"/cart"}>
            <FaShoppingCart className="text-2xl text-white" />
          </Link>

          <Link href={"/dashboard/user"}>
            <FaRegUser className="text-2xl text-white" />
          </Link>
          <LogOutBTN />
        </div>
      ) : (
        <div className=" text-white flex items-center gap-1">
          <Link href={"/login"}>Login</Link> /
          <Link href={"/register"}>Register</Link>
        </div>
      )}
    </>
  );
};

export default NavIcons;
