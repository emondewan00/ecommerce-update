"use server";

import Order from "@/models/Order-model";
import connectMongo from "@/utils/connectDb";

export const createOrder = async (data) => {
  try {
    await connectMongo();
    const newOrder = new Order(data);
    await newOrder.save();
    return {
      success: true,
      message: "Order created successfully!",
      status: "success",
      _id: newOrder._id.toString(),
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to create order. Please try again.",
      status: "error",
    };
  }
};

export const getOrdersByUserId = async (userId) => {
  try {
    await connectMongo();
    const orders = await Order.find({ userId })
      .select({
        _id: 1,
        createdAt: 1,
        totalPrice: 1,
        status: 1,
      })
      .sort({ createdAt: -1 });
    return {
      status: "success",
      message: "Orders data was successfully retrieved",
      success: true,
      orders,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to get orders. Please try again.",
      status: "error",
    };
  }
};
