"use client";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import ProductHover from "./ProductHover";
const PDCard = ({ product }) => {
  const { discountPercentage, id, thumbnail, price, rating, title } =
    product || {};
  const priceWithDiscount = (
    price -
    (price * discountPercentage) / 100
  ).toFixed(2);
  return (
    <div className="text-center w-fit group bg-white hover:shadow-lg transition-all duration-200">
      <div className="relative">
        <Link href={`/product/${id}`}>
          <Image
            src={thumbnail}
            className="w-[200px] h-[180px] object-cover relative"
            width={300}
            height={300}
            alt={title}
          />
        </Link>
        <span className="absolute top-4 left-4 bg-orange-400 text-white text-[12px] px-2 rounded-[2px] py-[1px]">
          {discountPercentage} OFF
        </span>
        <ProductHover />
      </div>
      <div className="p-1">
        <Link href={`/product/${id}`} className=" mt-2 inline-block">
          {title}
        </Link>
        <div className="text-sm my-1">
          <Rating
            readonly
            placeholderRating={rating}
            emptySymbol={<FaStar className="text-gray-400 " />}
            placeholderSymbol={<FaStar className="text-yellow-400 " />}
            fullSymbol={<FaStar />}
          />
          {/* <span className="ml-2 text-gray-400">(10)</span> */}
        </div>
        <h3 className="font-bold ">
          <span className="text-[#aaa] line-through">${price}</span> - $
          {priceWithDiscount}
        </h3>
      </div>
    </div>
  );
};

export default PDCard;
