import { auth } from "@/auth";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { redirect } from "next/navigation";

const CheckoutPage = async () => {
  const session = await auth();
  if (!session) redirect("/");
  const cartList = await fetch(
    `https://porto-ecommerce-three.vercel.app/api/cart/${session?.user?.id}`,
    {
      next: {
        tags: ["cartItems"],
      },
    }
  );
  const data = await cartList.json();

  return (
    <div className="my-8 max-w-5xl mx-auto grid grid-cols-6 gap-x-4">
      <div className="col-span-4">
        <h1 className="text-2xl">Checkout Page</h1>
        <div className="bg-white p-4 shadow mt-2">
          <CheckoutForm />
        </div>
      </div>
      <div className="col-span-2">
        <OrderSummary data={data} />
      </div>
    </div>
  );
};

export default CheckoutPage;
