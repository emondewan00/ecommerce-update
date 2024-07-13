"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaRegHeart, FaRegUser, FaShoppingCart } from "react-icons/fa";

const MidNavIcons = () => {
  const { data } = useSession();
  return (
    <div className="flex gap-x-4 items-center">
      <Link href={"/wishlist"}>
        <FaRegHeart className="text-2xl text-white" />
      </Link>
      <Link href={"/cart"}>
        <FaShoppingCart className="text-2xl text-white" />
      </Link>
      {data ? (
        <Link href={"/dashboard/user"}>
          <FaRegUser className="text-2xl text-white" />
        </Link>
      ) : (
        <Link
          href={"/login"}
          className="bg-white text-blue-600 px-2 py-1 rounded shadow"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default MidNavIcons;
