"use client";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const Accordion = ({ children, title }) => {
  const [accordionOpen, setAccordionOpen] = useState(true);
  const toggleAccordion = () => setAccordionOpen(!accordionOpen);

  return (
    <div className="shadow-md rounded-[1px] my-2 bg-gray-50">
      <div className="p-4 border-b flex items-center  justify-between">
        <p className="text-gray-700 capitalize">{title}</p>
        <FaAngleUp
          className={`cursor-pointer  transition-all duration-300 delay-75 ease-linear ${
            accordionOpen ? "rotate-0" : "rotate-180 "
          }}`}
          onClick={toggleAccordion}
        />
      </div>
      <div
        className={`transition-all duration-300 ease-linear delay-75 grid px-4 ${
          accordionOpen
            ? "grid-rows-[1fr] mt-4 pb-3  overflow-y-hidden"
            : "grid-rows-[0fr] overflow-hidden"
        }`}
      >
        <div className="row-span-2">
          {/* accordion content */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
