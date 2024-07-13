"use server";

import { Types } from "mongoose";
import { revalidateTag } from "next/cache";
import updateProductInventory from "@/lib/updateProductInventory";
import { Cart } from "@/models/cart-model";
import connectMongo from "@/utils/connectDb";
const cartAction = async ({ user, product_id, incOrDecNum, type }) => {
  const { email, id: user_id } = user;

  await connectMongo();
  const updateProductQuantity = await updateProductInventory(
    product_id,
    type,
    incOrDecNum
  );
  // if updateProductQuantity is not available or not updated
  if (updateProductQuantity.status === "error") return null;

  if (incOrDecNum <= 0 && type === "dec") {
    const cart = await Cart.updateOne(
      {
        user_id: new Types.ObjectId(user_id),
        "items.product_id": new Types.ObjectId(product_id),
      },
      { $pull: { items: { product_id: new Types.ObjectId(product_id) } } }
    );
    revalidateTag("cartItems");
    revalidateTag("cartLength");
    return null;
  }

  const cart = await Cart.findOne({
    user_id: new Types.ObjectId(user_id),
  });

  //   if cart is not available
  if (!cart) {
    const newCart = await Cart.create({
      user_id,
      email,
      items: [{ quantity: incOrDecNum, product_id }],
    });
    revalidateTag("cartLength");
    return {
      message: "Success! Your item has been added to the cart",
      status: "success",
    };
  }

  //  if cart is available
  // Check if the product already exists in the cart
  const existingItem = cart.items.find((item) =>
    item.product_id.equals(product_id)
  );
  if (existingItem) {
    if (type === "dec") {
      existingItem.quantity -= incOrDecNum;
    } else {
      // If the product already exists, update its quantity
      existingItem.quantity += incOrDecNum;
    }
  } else {
    // If the product doesn't exist, add it to the cart
    cart.items.push({ product_id, quantity: incOrDecNum });
  }
  revalidateTag("cartLength");
  // Save the cart
  await cart.save();
  return {
    message: "Success! Your item has been added to the cart",
    status: "success",
  };
};
export default cartAction;
