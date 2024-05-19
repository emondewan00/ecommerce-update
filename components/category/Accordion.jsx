"use client";
import FilterHead from "./FilterHead";
import { useState } from "react";

const Accordion = ({ title, items = [] }) => {
  const [accordionOpen, setAccordionOpen] = useState(true);
  return (
    <div className="shadow-md rounded-[1px] my-2 bg-gray-50">
      <FilterHead
        title={title}
        accordionFn={setAccordionOpen}
        accordionState={accordionOpen}
      />
      <div
        className={`transition-all duration-300 ease-linear delay-75 grid ${
          accordionOpen
            ? "grid-rows-[1fr] mt-4 px-4 pb-3  overflow-y-hidden"
            : "grid-rows-[0fr] overflow-hidden"
        }`}
      >
        <div className="row-span-2">
          {items?.map((item, indx) => (
            <label
              key={indx}
              htmlFor={item.name}
              className="flex gap-x-4 mt-2 hover:bg-gray-200/80 transition-all duration-100 delay-50 px-1 cursor-pointer"
            >
              <input type="checkbox" id={item.name} />
              <p>{item.label}</p>
              {/* <label htmlFor={id}>{name}</label> */}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
