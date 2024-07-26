"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Pagination = ({ totalPages }) => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  useEffect(() => {
    const page = params.get("page");
    if (page) {
      setPage(+page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickPage = (value) => {
    const page = value;
    setPage(page);
    params.delete("page");
    params.set("page", page);
    router.push(`${pathName}?${params.toString()}`);
  };

  const pagesArray = new Array(totalPages).fill(0);
  return (
    <div>
      {pagesArray?.map((_, idx) => (
        <span
          className={`size-8 inline-flex items-center justify-center first:ml-0 border shadow-lg hover:scale-105 delay-100 duration-300 transition-all ease-linear font-semibold cursor-pointer ${
            page === idx + 1
              ? "bg-blue-500 text-white"
              : "bg-white text-slate-500 "
          }`}
          key={idx}
          onClick={() => onClickPage(idx + 1)}
        >
          {idx + 1}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
