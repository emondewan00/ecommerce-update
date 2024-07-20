import { auth } from "@/auth";
import BodyRow from "@/components/cart/BodyRow";
import CartSummary from "@/components/cart/CartSummary";
import TableHead from "@/components/cart/TableHead";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ButtonOutline from "@/components/shared/ButtonOutline";
import Link from "next/link";

const CartPage = async () => {
  const session = await auth();
  const cartItemsRes = await fetch(
    `http://localhost:3000/api/cart/${session?.user?.id}`,
    {
      next: {
        tags: ["cartLength"],
      },
    }
  );

  const cartItems = await cartItemsRes.json();
  console.log(cartItems);
  return (
    <div className="">
      <Breadcrumb page={"Cart"} location={"/cart"} />
      <div className="max-w-5xl mx-auto  my-10 px-6 md:px-0">
        <div className="md:grid grid-cols-7 gap-x-4 flex flex-col items-center mx-auto">
          <div className="col-span-5">
            <table className="w-full ">
              <TableHead />
              <tbody className="cart md:*:!border-b">
                {cartItems?.items.length > 0 &&
                  cartItems?.items.map((item, index) => (
                    <BodyRow
                      key={index}
                      product={item?.product_id}
                      quantity={item?.quantity}
                    />
                  ))}
              </tbody>
            </table>
          </div>

          <CartSummary data={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
