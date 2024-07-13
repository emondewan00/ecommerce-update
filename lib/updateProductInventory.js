"use server";

import { Types } from "mongoose";
import connectMongo from "@/utils/connectDb";
import ProductModel from "@/models/ProductModel";
import checkQuantity from "./checkQuantity";

const updateProductInventory = async (product, type, incOrDecNum = 1) => {
  await connectMongo();
  if (type === "dec") {
    const update = await ProductModel.updateOne(
      { _id: new Types.ObjectId(product) },
      { $inc: { quantities: incOrDecNum, soldCount: -incOrDecNum } }
    );
    return { message: "Product updated", status: "success" };
  }

  const availability = await checkQuantity(product, incOrDecNum);
  if (!availability) {
    return { message: "Product not available", status: "error" };
  }
  if (availability) {
    const update = await ProductModel.updateOne(
      { _id: new Types.ObjectId(product) },
      { $inc: { quantities: -incOrDecNum, soldCount: incOrDecNum } }
    );
    return { message: "Product updated", status: "success" };
  }
};

export default updateProductInventory;
