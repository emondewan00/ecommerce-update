import PDCard from "@/components/shared/PDCard";
import connectMongo from "@/utils/connectDb";
import { AiOutlineClose } from "react-icons/ai";
import FilterContainer from "@/components/category/FilterContainer";
import TopBar from "@/components/category/TopBar";
import SideBarMobile from "@/components/shared/SideBarMobile";

const Search = async ({ _, searchParams }) => {
  await connectMongo();
  const res = await fetch(
    `https://porto-ecommerce-three.vercel.app/api/products?q=${searchParams.q}`
  );
  console.log(searchParams);
  const data = await res.json();

  if (!data.success) {
    return (
      <div className="max-w-5xl mx-auto my-10 uppercase">please try again </div>
    );
  }

  const className = `h-full bg-gray-100 p-4 shadow-lg shadow-purple-400 overflow-y-scroll min-w-64 md:hidden left-0`;

  return (
    <div className="max-w-5xl mx-auto my-10">
      <div className="md:flex  gap-4 px-4 md:px-0">
        <SideBarMobile>
          <h4 className="text-gray-600 mb-4">Filter:</h4>
          <FilterContainer filterData={data?.filters} />
        </SideBarMobile>
        <div className="grow">
          <TopBar />
          {data?.products.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data?.products?.map((product) => (
                <PDCard product={product} key={product?._id} />
              ))}
            </div>
          )}
          {data?.products.length === 0 && (
            <h1 className="text-3xl font-bold">No products found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
