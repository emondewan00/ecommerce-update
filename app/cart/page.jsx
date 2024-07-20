import { auth } from "@/auth";
import CartPage from "@/components/cart/CartPage";
import { redirect } from "next/navigation";

const Cart = async () => {
  const session = await auth();
  if (!session) return redirect("/");
  return <CartPage />;
};

export default Cart;
