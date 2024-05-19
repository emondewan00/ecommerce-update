"use client";
import MidNavIcons from "./MidNavIcons";
import Logo from "./Logo";
import { useState } from "react";
import { FaBars, FaPhoneAlt, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";

const MidNav = () => {
  const [sideBar, setSideBar] = useState(false);
  const router = useRouter();
  const searchHandler = async (e) => {
    e.preventDefault();
    const search = e.target[0].value;
    if (!search) return;
    e.target.reset();
    router.push(`/search/${search}`);
  };
  return (
    <>
      <div className="py-6 flex items-center px-4 md:px-0">
        <div className="flex gap-4">
          <FaBars
            className="text-white text-2xl block md:hidden cursor-pointer"
            onClick={() => setSideBar(true)}
          />
          <Logo />
        </div>
        <div className="flex items-center justify-between gap-x-12 ml-auto">
          <form onSubmit={searchHandler}>
            <div className={"relative hidden md:block"}>
              <input
                type="text"
                name="title"
                placeholder="Search..."
                className="w-auto md:w-80 py-2 pl-4 pr-12 md:pr-[50px] rounded-full text-sm relative"
              />
              <button
                type="submit"
                className="border-l border-gray-200 px-4 absolute right-0 py-2 top-1 "
              >
                <FaSearch className="text-gray-300" />
              </button>
            </div>
          </form>

          <div className="md:flex items-center hidden">
            <FaPhoneAlt className="text-2xl text-gray-100 mr-2" />
            <div className="flex flex-col">
              <span className="text-sm text-gray-50 font-medium">
                Call Us Now
              </span>
              <Link
                href={"tel:+880174123522"}
                className="text-white font-semibold"
              >
                +880174123522
              </Link>
            </div>
          </div>
          <MidNavIcons />
        </div>
      </div>
      {/* mobile side navbar */}

      <div
        className={`fixed z-20 w-64 h-full top-0 bg-gray-900 text-white p-4 transition-all duration-300 delay-75 ease-linear  md:hidden ${
          sideBar ? "left-0" : "-left-96"
        }`}
      >
        <ul className="nav-link">
          <li>
            <Link href={"/"}>HOME</Link>
          </li>
          <li>
            <Link href={"/"}>CATEGORY</Link>
          </li>
          <li>
            <Link href={"/"}>PRODUCTS</Link>
          </li>
          <li>
            <Link href={"/"}>PAGES</Link>
          </li>
          <li>
            <Link href={"/"}>BLOG</Link>
          </li>
          <li>
            <Link href={"/"}>CONTACT US</Link>
          </li>
        </ul>
        <div className="absolute top-1 -right-3 bg-rose-500 rounded ">
          <AiOutlineClose
            onClick={() => setSideBar(false)}
            className="text-3xl"
          />
        </div>
      </div>
    </>
  );
};

export default MidNav;
