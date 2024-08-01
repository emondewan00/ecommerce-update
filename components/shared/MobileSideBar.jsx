import Link from "next/link";
import { FaHome, FaTimes } from "react-icons/fa";

const links = [
  {
    id: 1,
    text: "Smartphones",
    url: "/category/smartphone",
  },
  {
    id: 2,
    text: "Laptops",
    url: "/category/laptop",
  },
  {
    id: 3,
    text: "Fragrances",
    url: "/category/fragrance",
  },
  {
    id: 4,
    text: "skincare's",
    url: "/category/skincare",
  },
  {
    id: 5,
    text: "Groceries",
    url: "/category/grocery",
  },
  {
    id: 6,
    text: "Home Decor",
    url: "/category/home decor",
  },
];

const MenuMobile = () => {
  return (
    <div
      className={`fixed z-20 h-full top-0 w-full transition-all duration-300 delay-75 ease-linear bg-black/40 md:hidden backdrop-blur-sm ${
        true ? "left-0" : "-left-96"
      }`}
    >
      <div className="bg-white w-3/4 h-full">
        <div className="text-xl font-semibold text-white bg-blue-500 p-4 flex justify-between items-center">
          <span className="flex items-center gap-2">
            <FaHome /> Home
          </span>
          <button>
            <FaTimes />
          </button>
        </div>

        <div className="*:p-3 *:font-semibold *:text-xl *:text-gray-600 *:block p-2 mt-2">
          {links.map((link) => (
            <Link href={link.url} key={link.id}>
              {link.text}
            </Link>
          ))}
        </div>
        <div className="absolute top-1 -right-3 bg-rose-500 rounded ">x</div>
      </div>
    </div>
  );
};

export default MenuMobile;
