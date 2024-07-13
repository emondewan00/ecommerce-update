"use client";
import cartAction from "@/actions/cartAction";
import { useSession } from "next-auth/react";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

const AddToCart = ({ product_id, name }) => {
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
    <form onSubmit={cartSubmit}>
      <button className="uppercase w-fit text-sm text-white bg-yellow-400 py-3 my-2 px-6 rounded flex gap-2 items-center  justify-center">
        <FaShoppingCart />
        add to cart
      </button>
    </form>
  );
};

export default AddToCart;
