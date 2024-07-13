import connectMongo from "@/utils/connectDb";
import PDCard from "../shared/PDCard";
import BannerVertical from "./BannerVertical";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import ProductModel from "@/models/ProductModel";

const Clothing = async ({ category }) => {
  await connectMongo();
  const products = await ProductModel.find({ category: category }).limit(8);
  return (
    <div>
      <div className="py-2 border-b flex items-center justify-between">
        <h3 className="text-xl text-gray-700 font-bold capitalize">
          {category}
        </h3>
        <Link href={"/products"} className="flex items-center gap-x-2 text-sm">
          More Products <BsArrowRight />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-4 my-8 items-center">
        <BannerVertical url={category} />
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
