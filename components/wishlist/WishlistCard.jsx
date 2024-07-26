import Image from "next/image";
import { auth } from "@/auth";
import DeleteWishList from "./DeleteToWishList";
import AddToCart from "./AddToCart";
import Link from "next/link";
const WishlistCard = async ({ data: { product_id } }) => {
  const { name, discount_price, quantities, _id } = product_id || {};
  const session = await auth();
  const stringID = _id.toString();
  return (
    <div className="grid grid-cols-4 p-4 border-gray-200 rounded border">
      <div className="col-span-3 flex gap-4 items-center">
        <div className="w-28">
          <Image
            width={115}
            height={85}
            src={`https://picsum.photos/115/115?id=${_id}`}
            alt={name}
            className="w-full"
          />
        </div>
        <div className="w-1/3">
          <Link
            href={`/product/${_id}`}
            className="text-gray-800 text-xl font-medium uppercase"
          >
            {name}
          </Link>
          <p className="text-gray-500 text-sm">
            Availability:
            {quantities ? (
              <span className="text-green-600">In Stock ({quantities}) </span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>
        </div>

        <div className="text-primary text-lg font-semibold ">
          ${discount_price}
        </div>
      </div>
      <div className="flex items-center gap-8">
        <DeleteWishList user_id={session?.user?.id} product_id={stringID} />
        <AddToCart name={name} product_id={stringID} />
      </div>
    </div>
  );
};

export default WishlistCard;
