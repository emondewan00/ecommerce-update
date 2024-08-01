"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  const openSidebar = () => {
    const element = document.querySelector(".sidebar-nav");
    element.classList.add("open-sidebar");
  };
  return (
    <div className="flex gap-x-2">
      <div
        className="space-y-1 *:w-6 *:h-1 *:rounded *:block *:bg-white block md:hidden"
        onClick={openSidebar}
      >
        <span />
        <span />
        <span />
      </div>
      <Link href={"/"}>
        <Image
          priority
          src={"/images/logo-white.png"}
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
