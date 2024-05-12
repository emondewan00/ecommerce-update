import Link from "next/link";
import { FaRegHeart, FaRegUser, FaShoppingCart } from "react-icons/fa";

const MidNavIcons = () => {
  return (
    <div className="flex gap-x-4">
      <Link href={"/dashboard/user"}>
        <FaRegUser className="text-2xl text-white" />
      </Link>
      <Link href={"/wishlist"}>
        <FaRegHeart className="text-2xl text-white" />
      </Link>
      <Link href={"/cart"}>
        <FaShoppingCart className="text-2xl text-white" />
      </Link>
    </div>
  );
};

export default MidNavIcons;
