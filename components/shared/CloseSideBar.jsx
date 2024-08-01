"use client";
import { FaTimes } from "react-icons/fa";

const CloseSideBar = () => {
  const closeSideBar = () => {
    const sidebar = document.querySelector(".sidebar-nav");
    sidebar.classList.remove("open-sidebar");
  };
  return (
    <button onClick={closeSideBar}>
      <FaTimes />
    </button>
  );
};

export default CloseSideBar;
