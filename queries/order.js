"use server";

import { Cart } from "@/models/cart-model";
import Order from "@/models/Order-model";
import connectMongo from "@/utils/connectDb";
import { revalidateTag } from "next/cache";

export const createOrder = async (data) => {
  try {
    await connectMongo();
    const newOrder = new Order(data);

    // Attempt to delete the user's cart
    const removeToCart = await Cart.deleteOne({
      user_id: data.userId,
    });
    // Check if the cart deletion was acknowledged by MongoDB
    if (removeToCart.deletedCount === 0) {
      console.log(removeToCart, data,"hello ");
      throw new Error("Please try again.");
    }

    // Save the new order to the database
    await newOrder.save();
    revalidateTag("cartLength");
    // Return a success response
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

export const findOrderById = async (orderId) => {
  try {
    await connectMongo();
    const order = await Order.findById(orderId)
      .populate({
        path: "products.productId",
        select: "name",
      })
      .select({
        _id: 1,
        createdAt: 1,
        totalPrice: 1,
        products: 1,
        shippingAddress: 1,
      })
      .lean();
    if (!order) {
      return {
        success: false,
        message: "Order not found",
        status: "error",
      };
    }
    return {
      status: "success",
      message: "Order data was successfully retrieved",
      success: true,
      data: order,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Failed to get order. Please try again.",
      status: "error",
    };
  }
};
