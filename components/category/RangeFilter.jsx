"use client";
import { useState } from "react";
const RangeFilter = () => {
  const [range, setRange] = useState(0);

  return (
    <div className="shadow-md rounded-[1px] bg-gray-50">
      <p className="text-gray-700 p-4 border-b">Price Range</p>
      <div className="mt-6 px-4 pb-3">
        <input
          type="range"
          className="w-full bg-orange-600 text-orange-600"
          onChange={(e) => setRange(e.target.value)}
          max={9999999}
          value={range}
        />
        <div className="flex justify-between mt-2">
          <input
            type="text"
            className="border text-gray-600 outline-none w-16 text-center"
            defaultValue={0}
            onChange={(e) => setRange(e.target.value)}
          />
          <input
            type="text"
            className="border text-gray-600 outline-none w-16 text-center"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeFilter;
