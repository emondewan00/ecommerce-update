import TopBar from "@/components/category/TopBar";
import FilterContainer from "@/components/category/FilterContainer";
import { getProductsBySearchParams } from "@/utils/getProductsBySearchParams";
import PDCard from "@/components/shared/PDCard";
import Pagination from "@/components/shared/Pagination";
import SideBarMobile from "@/components/shared/SideBarMobile";
const CategoryPage = async ({ params, searchParams }) => {
  const products = await getProductsBySearchParams({
    ...params,
    limit: 12,
    ...searchParams,
    filterData: true,
  });

  return (
    <div className="max-w-5xl mx-auto my-10">
      <div className="md:flex  gap-4 px-4 md:px-0">
        <SideBarMobile>
          <h4 className="text-gray-600 mb-4">Filter:</h4>
          <FilterContainer filterData={products?.filters} />
        </SideBarMobile>
        <div className="full grow">
          <TopBar />
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-4">
              {products?.products?.map((product) => (
                <PDCard key={product._id} product={product} />
              ))}
              <Pagination totalPages={products?.totalPages} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
