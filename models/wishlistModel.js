import { Schema, model, models } from "mongoose";

const wishlistSchema = new Schema(
  {
    product_id: {
      type: Schema.ObjectId,
      ref: "User",
      required: true,
    },
    user_id: {
      type: Schema.ObjectId,
      ref: "User",
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
