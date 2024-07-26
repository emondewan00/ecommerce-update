"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Accordion from "./Accordion";
const filters = {
  brands: "brand",
};

const RadioFilterContainer = ({ title, items = [] }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    const queryString = params.get(filters[title]);
    if (queryString) {
      const decodedQuery = decodeURI(queryString);
      setQuery(decodedQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value === "all") {
      params.delete(filters[title]);
    } else {
      params.append(filters[title], e.target.value);
    }
    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <>
      <Accordion title={title}>
        <label
          htmlFor={"all"}
          className={`flex gap-x-4 mt-2 hover:bg-gray-200/80 transition-all duration-100 delay-50 px-1 cursor-pointer capitalize`}
        >
          <input
            type="radio"
            name={title}
            value={"all"}
            id={"all"}
            onChange={onChange}
            checked={query === "all"}
          />
          All
        </label>

        {items.map((item, idx) => (
          <label
            key={idx}
            htmlFor={item}
            className={`flex gap-x-4 mt-2 hover:bg-gray-200/80 transition-all duration-100 delay-50 px-1 cursor-pointer capitalize`}
          >
            <input
              type="radio"
              name={title}
              value={item}
              id={item}
              onChange={onChange}
              checked={query === item}
            />
            {item}
          </label>
        ))}
      </Accordion>
    </>
  );
};

export default RadioFilterContainer;
