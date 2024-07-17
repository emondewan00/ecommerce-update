"use server";
import connectMongo from "@/utils/connectDb";
import Wishlist from "@/models/wishlistModel";
import { Types } from "mongoose";
import { revalidateTag } from "next/cache";

const addToWishList = async (data) => {
  const { user_id, product_id } = data;
  await connectMongo();
  const find = await Wishlist.findOne({
    user_id: new Types.ObjectId(user_id),
    product_id: new Types.ObjectId(product_id),
  });
  revalidateTag("wishlistLength");
  if (find) {
    return { message: "Product already added to wishlist", status: "success" };
  }
  const newWishList = await Wishlist.create(data);
  return { message: "Wishlist added successfully", status: "success" };
};

export default addToWishList;
