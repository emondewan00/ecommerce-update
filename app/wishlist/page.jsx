import Breadcrumb from "@/components/shared/Breadcrumb";
import ButtonOutline from "@/components/shared/ButtonOutline";
import Image from "next/image";

const Wishlist = () => {
  return (
    <div>
      <Breadcrumb page={"Wishlist"} location={"/wishlist"} />
      <div className="max-w-5xl mx-auto  my-10 px-6 md:px-0">
        <table className="w-full">
          <thead className="w-full">
            <tr className="hidden md:table-row border-b *:pb-2">
              <th className="text-start w-1/3">Product</th>
              <th className="text-start w-1/6">Price</th>
              <th className="text-start w-1/6">Stock Status</th>
              <th className="text-start w-1/4">Action</th>
            </tr>
          </thead>
          <tbody className="cart md:*:!border-b">
            <tr className="flex flex-col items-center justify-center border  p-4 md:!border-x-0 md:p-0 md:table-row md:*:my-2">
              <td className="md:flex items-center">
                <Image
                  src={"/images/product-1.jpg"}
                  width={120}
                  height={120}
                  className="object-cover "
                  alt={"product image"}
                />
                <h3 className="text-xl md:text-lg text-center my-2 md:my-0">
                  hello
                </h3>
              </td>
              <td> 10</td>
              <td>10</td>
              <td>
                <div className="space-x-2 flex  h-full">
                  <ButtonOutline text={"quick view"} style="py-[6px]" />
                  <button className="bg-gray-800 px-3 py-[6px] text-white inline-block uppercase rounded text-sm ">
                    Add to Cart
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
