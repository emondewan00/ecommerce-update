"use client";
import { useEffect } from "react";

const ScrollHandler = () => {
  useEffect(() => {
    const navWrapper = document.querySelector(".nav-wrapper");
    const navContainer = document.querySelector(".bottom-nav");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navWrapper.classList.add("scroll");
        navContainer.classList.add("scroll");
      } else if (window.scrollY < 80) {
        navWrapper.classList.remove("scroll");
        navContainer.classList.remove("scroll");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return null;
};

export default ScrollHandler;
