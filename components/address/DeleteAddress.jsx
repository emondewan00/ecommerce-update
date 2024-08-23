"use client";

import { deleteAddress } from "@/queries/address";
import { toast } from "react-toastify";

const DeleteAddress = ({ userId, addressId }) => {
  const clickDeleteAddress = async () => {
    const result = await deleteAddress(userId, addressId);
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <button
      onClick={clickDeleteAddress}
      className="bg-red-400 px-3 py-1 rounded text-white"
    >
      Delete
    </button>
  );
};

export default DeleteAddress;
