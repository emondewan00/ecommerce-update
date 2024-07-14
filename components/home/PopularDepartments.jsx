"use client";
import { useEffect, useState } from "react";
import ButtonOutline from "../shared/ButtonOutline";
import PDCard from "../shared/PDCard";
const PopularDepartments = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("createdAt");
  // https://porto-ecommerce-three.vercel.app/
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `http://localhost:3000/api/products?sort=${type}&order=desc&limit=10`
      );
      const json = await res.json();
      setData(json);
    };
    getData();
  }, [type]);

  const buttons = [
    {
      id: 1,
      name: "new arrivals",
      query: "createdAt",
    },
    {
      id: 2,
      name: "most popular",
      query: "soldCount",
    },
    {
      id: 3,
      name: "featured",
      query: "featured",
    },
  ];
 
  return (
    <div className="my-20">
      <h3 className="text-xl font-bold text-center">Popular Departments</h3>
      <div className="flex flex-wrap gap-2 justify-center mt-4 mb-6">
        {buttons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setType(btn.query)}
            className={`uppercase text-sm border-2 px-6 py-2 h-fit rounded hover:scale-105 transition-all delay-75 duration-200 ${
              type === btn.query
                ? "border-blue-400 text-blue-500"
                : "text-gray-800"
            }`}
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {data.map((product) => (
          <PDCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularDepartments;
