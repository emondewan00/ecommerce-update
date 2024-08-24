"use server";

import Order from "@/models/Order-model";

export const createOrder = async (data) => {
  try {
    const newOrder = new Order(data);
    await newOrder.save();
    return {
      success: true,
      message: "Order created successfully!",
      status: "success",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to create order. Please try again.",
      status: "error",
    };
  }
};
