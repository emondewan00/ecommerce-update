"use client";
import Image from "next/image";
import {
  FaFacebook,
  FaLinkedinIn,
  FaPinterest,
  FaRegHeart,
  FaShoppingBag,
  FaStar,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import Rating from "react-rating";

const HotDeals = ({
  image = "/images/1-1-600x675.jpg",
  name = "Coat Pool Comfort Jacket",
  price = "$53.00",
  rating = 4.5,
  review = "1 Reviews",
  discount = "7%",
}) => {
  return (
    <div className="rounded border p-4 md:min-w-[75%]">
      <h3 className="text-xl py-2 border-b">Deals Hot of The Day</h3>
      <div className="  mt-5 flex flex-col md:flex-row gap-6 ">
        <div className="relative">
          <Image
            src={image}
            className="hidden md:block object-cover relative"
            width={600}
            height={600}
            alt=""
          />
          <Image
            src={image}
            className="block h-64 w-72 md:hidden object-cover relative mx-auto"
            width={120}
            height={100}
            alt=""
          />
          <span className="absolute top-4 left-4 bg-orange-400 text-white text-[12px] px-2 rounded-[2px] py-[1px]">
            {discount} OFF
          </span>
        </div>
        <div className="w-full self-center">
          <h4 className="mt-2 text-xl">{name}</h4>
          <hr className="my-3" />
          <h3 className="font-extrabold text-xl">$53.00 - $180.00</h3>
          <p className=" text-gray-600 ">
            Offer Ends In:{" "}
            <span className="text-blue-900 font-bold">0 days,00:00:00</span>
          </p>
          <div className="text-sm my-2">
            <Rating
              readonly
              placeholderRating={rating}
              emptySymbol={<FaStar className="text-gray-400 " />}
              placeholderSymbol={<FaStar className="text-yellow-400 " />}
              fullSymbol={<FaStar />}
            />
            <span className="ml-2 text-gray-400">({review})</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <p>Size:</p>
            <div className="space-x-2">
              <button className=" text-[12px] border rounded-[2px] py-[2px] px-2 text-gray-700">
                Extra Large
              </button>
              <button className=" text-[12px] border rounded-[2px] py-[2px] px-2 text-gray-700">
                Large
              </button>
              <button className=" text-[12px] border rounded-[2px] py-[2px] px-2 text-gray-700">
                Medium
              </button>
              <button className=" text-[12px] border rounded-[2px] py-[2px] px-2 text-gray-700">
                Small
              </button>
            </div>
          </div>
          <hr className="my-4" />
          <div className="flex  gap-x-4">
            <input
              type="number"
              name=""
              className="outline-none border-gray-400 border py-2 px-2 rounded-[2px] w-32"
              id=""
              defaultValue={1}
            />
            <button className="uppercase text-sm text-gray-500 bg-gray-100 py-2 px-3 rounded flex gap-x-2 items-center grow justify-center">
              <FaShoppingBag />
              add to cart
            </button>
          </div>
          <div className="flex gap-x-2 items-center mt-3">
            <div className="border text-gray-500 p-2 rounded-full">
              <FaFacebook />
            </div>
            <div className="border text-gray-500 p-2 rounded-full">
              <FaTwitter />
            </div>
            <div className="border text-gray-500 p-2 rounded-full">
              <FaPinterest />
            </div>
            <div className="border text-gray-500 p-2 rounded-full">
              <FaWhatsapp />
            </div>
            <div className="border text-gray-500 p-2 rounded-full">
              <FaLinkedinIn />
            </div>
            <span className="border mx-3 h-6"></span>
            <FaRegHeart className="text-xl text-gray-500" />
            <MdCompareArrows className="text-xl text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
