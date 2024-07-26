import Card from "@/components/cart/Card";
import CartSummary from "@/components/cart/CartSummary";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const CartPage = async () => {
  const session = await auth();
  if (!session) redirect("/");
  const cartList = await fetch(
    `http://localhost:3000/api/cart/${session?.user?.id}`,
    {
      next: {
        tags: ["cartItems"],
      },
    }
  );
  const data = await cartList.json();

  return (
    <div className="my-8 max-w-5xl mx-auto ">
      <div className="grid grid-cols-7 gap-x-4 h-fit">
        {/* left side */}
        <div className="col-span-5 p-4 w-full bg-white shadow-md h-fit space-y-4">
          <div className="hidden lg:flex gap-x-4 mb-4 bg-[#FEF0F0] px-4 py-2 *:text-xl">
            <p>Image</p>
            <p className="ml-auto">Product Name</p>
            <div className="flex ml-auto">
              <p className="mr-10">Quantity</p>
              <p>Remove</p>
            </div>
          </div>
          {/* card  */}
          {data?.items?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        {/* Cart Summary */}
        <CartSummary data={data} />
      </div>
    </div>
  );
};

export default CartPage;
