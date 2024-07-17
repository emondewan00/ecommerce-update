"use client";
import removeToWishList from "@/actions/removeToWishList";
import { FaTrash } from "react-icons/fa";

const DeleteWishList = ({ user_id, product_id }) => {
  return (
    <div
      onClick={() => removeToWishList({ user_id, product_id })}
      className="text-white cursor-pointer bg-rose-400 rounded p-2 hover:scale-110 transition-all duration-200"
    >
      <FaTrash />
    </div>
  );
};

export default DeleteWishList;
