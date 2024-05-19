import Breadcrumb from "@/components/shared/Breadcrumb";
import ButtonOutline from "@/components/shared/ButtonOutline";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  return (
    <div className="">
     <Breadcrumb page={"Cart"} location={"/cart"} />
      <div className="max-w-5xl mx-auto  my-10 px-6 md:px-0">
        <div className="md:grid table-grid flex flex-col items-center mx-auto">
          <div>
            <table className="w-full">
              <thead className="">
                <tr className="hidden md:table-row border-b *:pb-2">
                  <th className="text-start">Product</th>
                  <th className="text-start">Price</th>
                  <th className="text-start">Quantity</th>
                  <th className="text-start">Total</th>
                </tr>
              </thead>
              <tbody className="cart md:*:!border-b">
                <tr className="flex flex-col items-center justify-center border  p-4 md:!border-x-0 md:p-0 md:table-row md:*:my-2">
                  <td className="md:flex items-center w-fit">
                    <Image
                      src={"/images/product-1.jpg"}
                      width={120}
                      height={120}
                      className="object-cover hidden md:block"
                      alt={"product image"}
                    />

                    <Image
                      src={"/images/product-1.jpg"}
                      width={250}
                      height={250}
                      className="object-cover h-72 min-w-72 block md:hidden"
                      alt={"product image"}
                    />
                    <h3 className="text-xl md:text-lg text-center my-2 md:my-0">
                      hello
                    </h3>
                  </td>
                  <td> $40.00</td>
                  <td>
                    <input
                      type="number"
                      name=""
                      className="outline-none border-gray-400 border py-2 px-2 rounded-[2px] w-32"
                      id=""
                      defaultValue={1}
                    />
                  </td>
                  <td>$40.00</td>
                </tr>
              </tbody>
            </table>
            <div className="flex flex-wrap  justify-center gap-4 md:justify-between my-6">
              <Link
                href={"/"}
                className="bg-gray-950 px-3 leading-10 md:px-6 md:py-3 text-white inline-block uppercase rounded"
              >
                Continue Shopping
              </Link>
              <div className="space-x-4">
                <ButtonOutline text={"clear cart"} />
                <ButtonOutline text={"update"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
