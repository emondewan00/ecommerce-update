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
        <div className="py-6 flex items-center px-4 md:px-0 max-w-5xl mx-auto">
          <div className="flex gap-4 ">
            <FaBars className="text-white text-2xl block md:hidden cursor-pointer" />
            <Logo />
          </div>
          <div className="flex items-center justify-between gap-x-12 ml-auto">
            {/* search input */}
            <form>
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
            <div className="flex gap-x-4 items-center">
              <Link href={"/wishlist"}>
                <FaRegHeart className="text-2xl text-white" />
              </Link>
              <Link href={"/cart"}>
                <FaShoppingCart className="text-2xl text-white" />
              </Link>

              <Link href={"/dashboard/user"}>
                <FaRegUser className="text-2xl text-white" />
              </Link>
            </div>
          </div>
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
            <div className="flex gap-x-4 items-center">
              <Link href={"/wishlist"}>
                <FaRegHeart className="text-2xl text-white" />
              </Link>
              <Link href={"/cart"}>
                <FaShoppingCart className="text-2xl text-white" />
              </Link>

              <Link href={"/dashboard/user"}>
                <FaRegUser className="text-2xl text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
