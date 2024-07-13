"use server";

import ProductModel from "@/models/ProductModel";
import connectMongo from "@/utils/connectDb";

const checkQuantity = async (product_id, quantity) => {
  await connectMongo();
  const product = await ProductModel.findById(product_id);
  if (product?.quantities < quantity) {
    return false;
  }
  return true;
};

export default checkQuantity;
