import {
  FaBars,
  FaPhoneAlt,
  FaRegHeart,
  FaRegUser,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import Logo from "./Logo";
import Link from "next/link";
import ScrollHandler from "./ScrollHandler";
import NavIcons from "./NavIcons";

const NavBar = () => {
  const categories = [
    "smartphone",
    "laptop",
    "fragrance",
    "skincare",
    "groceries",
    "home-decor",
  ];
  return (
    <>
      <ScrollHandler />
      <div className="bg-blue-500">
        <div className="py-6 flex items-center px-4 md:px-0 max-w-5xl mx-auto justify-between">
          <Logo />

          <div className="flex items-center justify-between gap-x-12 ">
            {/* search input */}
            <form>
              <div className={"relative hidden md:block"}>
                <input
                  type="text"
                  name="title"
                  placeholder="Search..."
                  className="w-auto md:w-96 py-2 pl-4 pr-12 md:pr-[50px] rounded-full text-sm relative"
                />
                <button
                  type="submit"
                  className="border-l border-gray-200 px-4 absolute right-0 py-2 top-1 "
                >
                  <FaSearch className="text-gray-300" />
                </button>
              </div>
            </form>
          </div>
          <NavIcons />
        </div>
      </div>
      <div
        className={` shadow transition-all duration-300 delay-75 scroll-smooth text-[16px] hidden md:block  nav-wrapper
         `}
      >
        <div className="max-w-5xl mx-auto flex items-center  bottom-nav">
          <div className="logo-wrapper hidden">
            <Logo />
          </div>

          <div className={` flex items-center mx-auto `}>
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
          </div>
          <div className="hidden icons">
            <NavIcons />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
