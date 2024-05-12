import PDCard from "../shared/PDCard";
import getGroupProducts from "@/lib/getGroupProducts";
import BannerVertical from "./BannerVertical";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Clothing = async (url1, url2) => {
  const products = await getGroupProducts(url1, url2);
  const { category, moreLink } = {
    category: "Clothing & Apparel",
    moreLink: "/",
  };
  return (
    <div>
      <div className="py-2 border-b flex items-center justify-between">
        <h3 className="text-xl text-gray-700 font-bold ">{category}</h3>
        <Link href={moreLink} className="flex items-center gap-x-2 text-sm">
          More Products <BsArrowRight />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-4 my-8 items-center">
        <BannerVertical />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 self-start">
          {products.map((product) => (
            <PDCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clothing;
