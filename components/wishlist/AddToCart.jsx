"use client";
import cartAction from "@/actions/cartAction";
import removeToWishList from "@/actions/removeToWishList";
import { useSession } from "next-auth/react";
import { FaShoppingBag } from "react-icons/fa";
import { toast } from "react-toastify";

const AddToCart = ({ name, product_id }) => {
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

    await removeToWishList({
      user_id: data?.user?.id,
      product_id,
    });

    if (result.status === "success") {
      return toast.success(`Great choice! ${name} is now in your cart.`);
    }
    toast.error("Failed to add product to cart.");
  };

  return (
    <form onSubmit={cartSubmit}>
      <button
        type="submit"
        className="text-white cursor-pointer bg-green-400 rounded p-2 hover:scale-110 transition-all duration-200"
      >
        <FaShoppingBag />
      </button>
    </form>
  );
};

export default AddToCart;
