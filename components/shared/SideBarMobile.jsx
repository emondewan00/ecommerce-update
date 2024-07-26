"use client";

import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const SideBarMobile = ({ children }) => {
  const onCloseSidebarFilter = () => {
    const sidebar = document.querySelector(".sidebar-container");
    sidebar.classList.remove("open");
  };

 
  return (
    <div
      className={`fixed md:static transition-all z-30 duration-500 delay-150 ease-linear top-0 sidebar-container md:block`}
    >
      <div
        onClick={onCloseSidebarFilter}
        className="absolute md:hidden top-2 right-3  rounded "
      >
        <AiOutlineClose className="text-3xl" />
      </div>
      {children}
    </div>
  );
};

export default SideBarMobile;
