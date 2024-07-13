import { Schema, model, models } from "mongoose";
import ProductModel from "./ProductModel";
import UserModel from "./UserModel";

// Schema for an item in the shopping cart
const cartItemSchema = new Schema(
  {
    product_id: {
      type: Schema.ObjectId,
      ref: ProductModel,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  {
    _id: false,
  }
);

// Schema for the shopping cart
const cartSchema = new Schema(
  {
    user_id: {
      type: Schema.ObjectId,
      ref: UserModel,
      required: true,
      index: true,
    },
    email: {
      type: String,
    },
    items: {
      type: [cartItemSchema],
      require: true,
    },
  },
  { timestamps: true }
);

export const Cart = models.Cart ?? model("Cart", cartSchema);
