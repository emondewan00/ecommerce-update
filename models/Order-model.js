import mongoose, { Schema, model, models } from "mongoose";
import UserModel from "./UserModel";
import ProductModel from "./ProductModel";

const shippingAddress = {
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
    default: "Bangladesh",
  },
  postcode: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
};

const product = {
  productId: {
    type: Schema.ObjectId,
    ref: ProductModel,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  discount_price: {
    type: Number,
  },
  price: {
    type: Number,
    required: true,
  },
};

const orderSchema = new Schema({
  userId: {
    type: Schema.ObjectId,
    ref: UserModel,
    required: true,
  },
  products: {
    type: [product],
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "processing", "shipped", "delivered", "canceled"],
    default: "pending",
  },
  shippingAddress: {
    type: shippingAddress,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ["credit_card", "debit_card", "cash_on_delivery", "paypal"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = models.Order || model("Order", orderSchema);

export default Order;
