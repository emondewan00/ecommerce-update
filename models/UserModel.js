import mongoose, { Schema, model } from "mongoose";

const addressSchema = new Schema(
  {
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
    isBillingDefault: {
      type: Boolean,
      required: true,
      default: false,
    },
    isShippingDefault: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    addresses: [addressSchema],
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || model("User", userSchema);
