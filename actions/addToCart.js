"use server";
import connectMongo from "@/lib/connectDb";
import cartModel from "@/schema/cartModel";
const addToCart = async (data, formData) => {
  const {
    email,
    item: { product, quantity },
  } = data;
  await connectMongo();
  // Find the user's cart or create one if it doesn't exist
  let cart = await cartModel.findOne({ email: email });
  if (!cart) {
    cart = new cartModel({ email: email });
  }
  // Check if the product already exists in the cart
  const existingItem = cart.items.find(
    (item) => item.product.toString() === product
  );
  if (existingItem) {
    // If the product already exists, update its quantity
    existingItem.quantity += quantity;
  } else {
    // If the product doesn't exist, add it to the cart
    cart.items.push({ product: product, quantity });
  }
  // Save the cart
  await cart.save();
  return cart;
};

export default addToCart;
