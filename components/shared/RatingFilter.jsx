"use client";

import { FaArrowUp, FaStar } from "react-icons/fa";
import Accordion from "./Accordion";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const RatingFilter = () => {
  const [rating, setRating] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const onRatingChange = (e) => {
    setRating(e.target.value);
    params.delete("rating");
    params.set("rating", e.target.value);
    router.push(`${pathName}?${params.toString()}`);
  };
  return (
    <Accordion title={"Rating"}>
      <label
        htmlFor="rating-5"
        className={`flex gap-x-4 mt-2 px-1 cursor-pointer text-gray-300`}
      >
        <input
          type="radio"
          onChange={onRatingChange}
          id="rating-5"
          name="rating"
          value="5"
          hidden
        />
        <div className="flex gap-x-2 items-center">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          {/* <FaArrowUp className="text-[12px] text" /> */}
        </div>
      </label>
      <label
        htmlFor="rating-4"
        className={`flex gap-x-4 mt-2 px-1 cursor-pointer text-gray-300`}
      >
        <input
          type="radio"
          onChange={onRatingChange}
          id="rating-4"
          name="rating"
          value="4"
          hidden
        />
        <div className="flex gap-x-2 items-center">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar />
          <FaArrowUp className="text-[12px] text" />
        </div>
      </label>
      <label
        htmlFor="rating-3"
        className={`flex gap-x-4 mt-2 px-1 cursor-pointer text-gray-300`}
      >
        <input
          type="radio"
          onChange={onRatingChange}
          id="rating-3"
          name="rating"
          value="3"
          hidden
        />
        <div className="flex gap-x-2 items-center">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar />
          <FaStar />
          <FaArrowUp className="text-[12px] text" />
        </div>
      </label>
      <label
        htmlFor="rating-2"
        className={`flex gap-x-4 mt-2 px-1 cursor-pointer text-gray-300`}
      >
        <input
          type="radio"
          onChange={onRatingChange}
          id="rating-2"
          name="rating"
          value="2"
          hidden
        />
        <div className="flex gap-x-2 items-center">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaArrowUp className="text-[12px] text" />
        </div>
      </label>
      <label
        htmlFor="rating-1"
        className={`flex gap-x-4 mt-2 px-1 cursor-pointer text-gray-300`}
      >
        <input
          type="radio"
          onChange={onRatingChange}
          id="rating-1"
          name="rating"
          value="1"
          hidden
        />
        <div className="flex gap-x-2 items-center">
          <FaStar className="text-yellow-400" />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaArrowUp className="text-[12px] text" />
        </div>
      </label>
    </Accordion>
  );
};

export default RatingFilter;
