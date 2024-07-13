import { auth } from "@/auth";
import Link from "next/link";
import { FaRegHeart, FaRegUser, FaShoppingCart } from "react-icons/fa";
import LogOutBTN from "./LogOutBTN";
const NavIcons = async () => {
  const session = await auth();

  const cartItemsRes = await fetch(
    `https://porto-ecommerce-three.vercel.app/api/cart/${session?.user?.id}?=true`
  );

  const cartItems = await cartItemsRes.json();
  console.log(cartItems,"cartItems");
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
