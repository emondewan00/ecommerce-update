import { Schema, model, models } from "mongoose";
import UserModel from "./UserModel";
import ProductModel from "./ProductModel";

const wishlistSchema = new Schema(
  {
    product_id: {
      type: Schema.ObjectId,
      ref: ProductModel,
      required: true,
    },
    user_id: {
      type: Schema.ObjectId,
      ref: UserModel,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);
const Wishlist = models.Wishlist || model("Wishlist", wishlistSchema);
export default Wishlist;
