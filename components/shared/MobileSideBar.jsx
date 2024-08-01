import Link from "next/link";
import { FaHome } from "react-icons/fa";
import categories from "@/lib/categoryLinks";
import CloseSideBar from "./CloseSideBar";

const MenuMobile = () => {
  return (
    <div
      className={`fixed z-20 h-full top-0 w-full transition-all duration-300 delay-75 ease-linear bg-black/40 md:hidden backdrop-blur-sm -left-[500px] sidebar-nav`}
    >
      <div className="bg-white w-3/4 h-full">
        <div className="text-xl font-semibold text-white bg-blue-500 p-4 flex justify-between items-center">
          <span className="flex items-center gap-2">
            <FaHome /> Home
          </span>
          <CloseSideBar />
        </div>

        <div className="*:p-3 *:font-semibold *:text-xl *:text-gray-600 *:block p-2 mt-2">
          {categories.map((link) => (
            <Link href={link.url} key={link.id}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
