import Logo from "./Logo";
import Link from "next/link";
import ScrollHandler from "./ScrollHandler";
import NavIcons from "./NavIcons";
import SearchInput from "./SearchInput";
import MenuMobile from "./MobileSideBar";
import categories from "@/lib/categoryLinks";

const NavBar = () => {
  return (
    <>
      <ScrollHandler />
      <div className="bg-blue-500">
        <div className="py-6 flex items-center px-4 md:px-0 max-w-5xl mx-auto justify-between">
          <Logo />

          <div className="flex items-center justify-between gap-x-12 ">
            <SearchInput />
          </div>
          <NavIcons />
        </div>
      </div>
      {/* bottom nav start */}
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
              {categories.map((category) => (
                <li key={category.id}>
                  <Link className="capitalize" href={category.url}>
                    {category.text}
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
      <MenuMobile />
    </>
  );
};

export default NavBar;
