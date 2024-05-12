import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
const Header = () => {
  return (
    <div className="md:flex justify-between text-gray-50 py-2 border-b border-gray-50/20 items-center px-4 md:px-0">
      <div className="hidden md:block"></div>

      <div className="flex justify-between md:justify-normal gap-x-6 ">
        <ul className=" text-sm items-center gap-x-4 md:flex hidden">
          <li>
            <Link href={"/dashboard/user"}>My Account</Link>
          </li>
          <li>
            <Link href={"/"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"/"}>Blog</Link>
          </li>
          <li>
            <Link href={"/wishlist"}>My Wishlist</Link>
          </li>
          <li>
            <Link href={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link href={"/login"}>Log In</Link>
          </li>
        </ul>
        <span className="border-[1px] hidden md:block"></span>
        <div className="flex gap-x-4">
          <div className="relative group">
            <Link href={"/"} className="peer">
              Eng
            </Link>
            <div className="group-hover:block absolute text-black p-1 top-6 bg-gray-100 hidden rounded-sm ">
              <ul>
                <li>Eng</li>
                <li>Fra</li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <Link href={"/"} className="peer">
              Eng
            </Link>
            <div className="group-hover:block absolute text-black p-1 top-6 bg-gray-100 hidden rounded-sm ">
              <ul>
                <li>Eng</li>
                <li>Fra</li>
              </ul>
            </div>
          </div>
        </div>
        <span className="border-[1px] hidden md:block"></span>
        <div className="flex items-center gap-x-2 ">
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaInstagramSquare />
        </div>
      </div>
    </div>
  );
};

export default Header;
