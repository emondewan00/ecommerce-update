import Image from "next/image";
import QuantityAdjust from "./QuantityAdjust";

const Card = async ({ item: { product_id, quantity } }) => {
  const { name, image, price, discount_price, category, quantities, _id } =
    product_id;
  return (
    <div className=" flex gap-x-4 ">
      <Image
        src={`https://picsum.photos/360/265?id=${_id}`}
        width={120}
        height={120}
        alt="Product Image"
        className=" object-cover "
      />

      <div className=" my-auto">
        <p className=" font-semibold">{name}</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 capitalize">
          {category}
        </p>
        <p className="space-x-2">
          <span className="">$ {discount_price}</span>
          <span className="text-red-500 line-through text-[12px]">
            $ {price}
          </span>
        </p>
      </div>

      <div className="flex justify-between flex-col-reverse lg:flex lg:items-center ml-auto lg:flex-row lg:justify-normal">
        <QuantityAdjust product={{ quantity, _id, quantities }} />
      </div>
    </div>
  );
};

export default Card;
