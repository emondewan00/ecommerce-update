"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";

const TopBar = () => {
  const [numOfItems, setNumOfItems] = useState("12");
  const [sort, setSort] = useState("default");
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    const numOfProducts = params.get("limit");
    const order = params.get("order");
    if (order) {
      setSort(order);
    }
    if (numOfProducts) {
      setNumOfItems(numOfProducts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeLimit = (e) => {
    const limit = e.target.value;
    setNumOfItems(limit);
    params.delete("limit");
    params.set("limit", limit);
    router.push(`${pathName}?${params.toString()}`);
  };

  const onSortChange = (e) => {
    const order = e.target.value;
    setNumOfItems(order);
    params.delete("order");
    params.set("order", order);
    params.set("sort", "price");
    router.push(`${pathName}?${params.toString()}`);
  };

  const onOpenSidebarFilter = () => {
    const sidebar = document.querySelector(".sidebar-container");
    sidebar.classList.add("open");
  };

  return (
    <div className="bg-white shadow  mb-3 rounded-[1px] flex justify-between px-4 py-2">
      <p className="hidden md:block">Product</p>
      <div
        onClick={onOpenSidebarFilter}
        className="gap-2 rounded-[2px] text-gray-700 flex items-center px-2 md:hidden"
      >
        <FaFilter />
        <span>Filter</span>
      </div>
      <div className="flex gap-2">
        <div>
          <label htmlFor="show" className="text-gray-700 hidden md:inline">
            Show:
          </label>
          <select
            id="show"
            className="bg-gray-50 p-1 rounded text-gray-700 ml-1 outline-none"
            onChange={onChangeLimit}
            value={numOfItems}
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </div>
        <div>
          <label htmlFor="sortBy" className="text-gray-700 hidden md:inline">
            Sort By:
          </label>
          <select
            id="sortBy"
            className="bg-gray-50 p-1 rounded text-gray-700 ml-1 outline-none w-28 "
            onChange={onSortChange}
            value={sort}
          >
            <option value="default" disabled>
              Default
            </option>
            <option value="asc">Price (Low {">"} High)</option>
            <option value="desc">Price (High {">"} Low)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
