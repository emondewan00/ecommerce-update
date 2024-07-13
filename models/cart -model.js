import mongoose, { Schema } from "mongoose";

// Schema for an item in the shopping cart
const CartItemSchema = new Schema({
  product_id: {
    type: Schema.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

// Schema for the shopping cart
const CartSchema = new Schema(
  {
    user_id: {
      type: Schema.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    email: {
      type: String,
    },
    items: {
      type: [CartItemSchema],
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models?.Cart || mongoose.model("Cart", CartSchema);
