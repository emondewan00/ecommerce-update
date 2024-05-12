"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";

const PDCardHorizontal = ({
  image = "/images/3-1-1.jpg",
  name = "Classic Hat",
  rating = 4.5,
  price = "$53.00",
}) => {
  return (
    <div className=" w-fit flex gap-4">
      <div className="relative">
        <Image
          src={image}
          className="w-[100px] h-[100px] object-cover relative"
          width={200}
          height={200}
          alt=""
        />
        {/* <span className="absolute top-4 left-4 bg-orange-400 text-white text-[12px] px-2 rounded-[2px] py-[1px]">
        7% OFF
      </span> */}
      </div>
      <div className="self-center">
        <p className=" mt-2">{name}</p>
        <div className="text-sm my-1">
          <Rating
            readonly
            placeholderRating={rating}
            emptySymbol={<FaStar className="text-gray-400 " />}
            placeholderSymbol={<FaStar className="text-yellow-400 " />}
            fullSymbol={<FaStar />}
          />
          {/* <span className="ml-2 text-gray-400">(1 Reviews)</span> */}
        </div>
        <h3 className="font-bold ">{price}</h3>
      </div>
    </div>
  );
};

export default PDCardHorizontal;
