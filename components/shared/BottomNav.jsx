"use client";
import MidNavIcons from "./MidNavIcons";
import Logo from "./Logo";
import Link from "next/link";
import { useEffect, useState } from "react";

const BottomNav = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else if (window.scrollY < 80) {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    "smartphone",
    "laptop",
    "fragrance",
    "skincare",
    "groceries",
    "home-decor",
  ];
  return (
    <div
      className={` shadow transition-all duration-300 delay-75 scroll-smooth text-[16px] hidden md:block ${
        scroll ? "bg-blue-500 fixed z-50 top-0 w-full text-white" : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center">
        <div className={`${scroll ? "block" : "hidden"}`}>
          <Logo />
        </div>
        <div
          className={`grow ${
            scroll ? "justify-between" : "justify-center"
          } hidden items-center md:flex`}
        >
          <ul className="flex menu-item">
            <li>
              <Link href={"/"}>HOME</Link>
            </li>
            {categories.map((category, idx) => (
              <li key={idx}>
                <Link className="capitalize" href={`/category/${category}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <div className={`${scroll ? "block" : "hidden"}`}>
            <MidNavIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
