"use client";
import { FaAngleUp } from "react-icons/fa";

const FilterHead = ({ title, toggleAccordion, accordionState }) => {
  return (
    <div className="p-4 border-b flex items-center  justify-between">
      <p className="text-gray-700 capitalize">{title}</p>
      <FaAngleUp
        className={`cursor-pointer  transition-all duration-300 delay-75 ease-linear ${
          accordionState ? "rotate-0" : "rotate-180 "
        }}`}
        onClick={toggleAccordion}
      />
    </div>
  );
};

export default FilterHead;
