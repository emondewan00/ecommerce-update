"use client";
import cartAction from "@/actions/cartAction";
import { useSession } from "next-auth/react";
import { FaRegHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
const ProductHover = ({ product_id, name }) => {
  const { data, status } = useSession();

  const cartSubmit = async (e) => {
    e.preventDefault();
    if (!data?.user) return toast.info("Please login first");
    const result = await cartAction({
      user: data?.user,
      product_id: product_id,
      incOrDecNum: 1,
      type: "inc",
    });
    if (result.status === "success") {
      return toast.success(`Great choice! ${name} is now in your cart.`);
    }
    toast.error("Failed to add product to cart.");
  };
  return (
    <div className="absolute top-4 right-4 space-y-2 opacity-0 transition-opacity delay-100 duration-300 ease-linear group-hover:opacity-100">
      <form onSubmit={cartSubmit} className="cursor-pointer">
        <button
          type="submit"
          className="bg-white text-gray-400 hover:bg-blue-400 p-2 rounded-full hover:text-white transition-all duration-300 delay-150"
        >
          <FaShoppingCart className="" />
        </button>
      </form>
      <form>
        <div className="bg-white text-gray-400 hover:bg-blue-400 p-2 rounded-full hover:text-white transition-all duration-300 delay-150">
          <FaRegHeart className="" />
        </div>
      </form>
      <div className="bg-white text-gray-400 hover:bg-blue-400 p-2 rounded-full hover:text-white transition-all duration-300 delay-150">
        <FaSearch className="" />
      </div>
    </div>
  );
};

export default ProductHover;
