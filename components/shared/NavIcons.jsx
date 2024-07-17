import { auth } from "@/auth";
import Link from "next/link";
import { FaRegHeart, FaRegUser, FaShoppingCart } from "react-icons/fa";
import LogOutBTN from "./LogOutBTN";
const NavIcons = async () => {
  const session = await auth();

  const cartItemsRes = await fetch(
    `https://porto-ecommerce-three.vercel.app/api/cart/${session?.user?.id}?length=true`,
    {
      next: {
        tags: ["cartLength"],
      },
    }
  );
  const wishlistItemsRes = await fetch(
    `http://localhost:3000/api/wishlist/${session?.user?.id}`
  );

  const cartItems = await cartItemsRes.json();
  const wishlistItems = await wishlistItemsRes.json();
  return (
    <>
      {session?.user ? (
        <div className="flex gap-x-4 items-center">
          <Link href={"/wishlist"} className="relative">
            <FaRegHeart className="text-2xl text-white" />
            <span className="absolute flex items-center justify-center size-4 rounded-full -top-1 -right-2 bg-rose-500 text-sm text-white">
              {wishlistItems?.length || 0}
            </span>
          </Link>
          <Link href={"/cart"} className="relative">
            <FaShoppingCart className="text-2xl text-white" />
            <span className="absolute flex items-center justify-center size-4 rounded-full -top-1 -right-2 bg-rose-500 text-sm text-white">
              {cartItems?.items?.length || 0}
            </span>
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
