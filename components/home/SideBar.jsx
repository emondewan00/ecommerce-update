import Link from "next/link";
import categories from "@/lib/categoryLinks";

const SideBar = () => {
  return (
    <div className="border rounded md:min-w-60 h-fit hidden md:block">
      <h2 className="text-lg font-semibold py-[14px] px-5 bg-gray-100">
        TOP CATEGORIES
      </h2>
      <div className="px-4 mb-4">
        <ul className="sidebar">
          {categories?.slice(0, 6)?.map((category) => (
            <li key={category.id}>
              <Link className="capitalize" href={category.url}>
                {category.text}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={"/"}
          className="bg-black px-6 py-3 text-white inline-block mt-4"
        >
          HUG SALE -70% OFF
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
