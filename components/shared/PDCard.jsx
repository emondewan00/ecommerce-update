import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import ProductHover from "./ProductHover";
const PDCard = ({ product }) => {
  const {
    _id,
    sku,
    image,
    name,
    price,
    discount_price,
    description,
    category,
    brand,
    reviewsNumber,
    rating,
    availability,
  } = product;
  const ratingArray = new Array(Math.round(rating)).fill(0);
  const discount = Math.round((price - discount_price) / price * 100);
  return (
    <div className=" w-fit group bg-white hover:shadow-lg transition-all duration-200">
      <div className="relative">
        <Link href={`/product/${_id}`}>
          <Image
            src={image[0]}
            className="w-[200px] h-[180px] object-cover relative"
            width={300}
            height={300}
            alt={name}
          />
        </Link>
        <span className="absolute top-4 left-4 bg-orange-400 text-white text-[12px] px-2 rounded-[2px] py-[1px]">
          {discount}% OFF
        </span>
        <ProductHover />
      </div>
      <div className="p-1">
        <Link href={`/product/${_id}`} className=" mt-2 inline-block">
          {name}
        </Link>
        <div className="text-sm my-1 flex gap-1 items-center">
          {ratingArray.map((_, index) => (
            <FaStar className="text-yellow-400" key={index} />
          ))}
          <span>({reviewsNumber})</span>
        </div>
        <h3 className="font-bold ">
          <span className="text-[#aaa] line-through">${price}</span> - $
          {discount_price}
        </h3>
      </div>
    </div>
  );
};

export default PDCard;
