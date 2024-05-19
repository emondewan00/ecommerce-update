import TopBar from "@/components/category/TopBar";
// import FilterContainer from "@/components/category/FilterContainer";
// import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PDCard from "@/components/shared/PDCard";
import connectBD from "@/lib/connectDB";
import ProductModel from "@/models/ProductModel";
import FilterContainer from "@/components/category/FilterContainer";

const CategoryPage = async ({ params: { categoryName } }) => {
  //   const [openFilter, setOpenFilter] = useState(false);
  const param = categoryName.split("-").join(" ");
  console.log(param)
  await connectBD();
  const products = await ProductModel.find({ category: param }).limit(
    20
  );
  const className = `h-full bg-gray-100 p-4 shadow-lg shadow-purple-400 overflow-y-scroll min-w-64 md:hidden left-0`;
  return (
    <div className="max-w-5xl mx-auto my-10">
      <div className="md:flex  gap-4 px-4 md:px-0">
        <div
          className={`fixed md:static transition-all z-30 duration-500 delay-150 ease-linear top-0 ${
            false ? className : "-left-96  md:block md:basis-72 "
          }`}
        >
          <div className="absolute md:hidden top-2 right-3 bg-rose-500 rounded ">
            <AiOutlineClose className="text-3xl" />
          </div>
          <h4 className="text-gray-600 mb-4">Filter:</h4>
          <FilterContainer />
        </div>
        <div className="full">
          <TopBar onClick={() => {}} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <PDCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
