"use client";
import { usePathname, useSearchParams } from "next/navigation";
import FilterHead from "./FilterHead";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const filters = {
  categories: "category",
  brands: "brand",
  colors: "colors",
  sizes: "size",
  ratings: "rating",
};

const FilterAccordion = ({ title, items = [] }) => {
  const [accordionOpen, setAccordionOpen] = useState(true);
  const toggleAccordion = () => setAccordionOpen(!accordionOpen);

  const [query, setQuery] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    const queryString = params.get(filters[title]);
    if (queryString) {
      const decodedQuery = decodeURI(queryString);
      const queryStringInArray = decodedQuery.split(",");
      setQuery(queryStringInArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (e) => {
    if (e.target.checked) {
      setQuery([...query, e.target.name]);
      params.delete(filters[title]);
      params.append(filters[title], [...query, e.target.name].join(","));
    } else {
      const remove = query.filter((item) => item !== e.target.name);
      setQuery(remove);
      params.delete(filters[title]);
      if (remove.length > 0) {
        params.append(filters[title], remove);
      }
    }
    router.push(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="shadow-md rounded-[1px] my-2 bg-gray-50">
      <FilterHead
        title={title}
        toggleAccordion={toggleAccordion}
        accordionState={accordionOpen}
      />
      <div
        className={`transition-all duration-300 ease-linear delay-75 grid px-4 ${
          accordionOpen
            ? "grid-rows-[1fr] mt-4 pb-3  overflow-y-hidden"
            : "grid-rows-[0fr] overflow-hidden"
        }`}
      >
        <div className="row-span-2">
          {items?.map((item, indx) => (
            <label
              key={indx}
              htmlFor={item}
              className={`flex gap-x-4 mt-2 hover:bg-gray-200/80 transition-all duration-100 delay-50 px-1 cursor-pointer ${
                title !== "colors" && "capitalize"
              }`}
            >
              <input
                type="checkbox"
                onChange={onChange}
                name={item}
                id={item}
                checked={query.includes(item)}
                style={{
                  accentColor: `${title === "colors" ? item : ""}`,
                }}
              />
              <p>
                {item}{" "}
                {title === "colors" && (
                  <span
                    style={{
                      backgroundColor: item,
                    }}
                    className="size-3 rounded-full ml-2 inline-block"
                  ></span>
                )}
              </p>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterAccordion;
