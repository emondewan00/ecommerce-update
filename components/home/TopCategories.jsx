import CategoryCard from "../shared/CategoryCard";
import categories from "@/lib/categoryLinks";

const TopCategories = () => {
  return (
    <div className="my-10">
      <div className="bg-white p-4 shadow">
        <h2 className="text-lg text-center font-semibold mb-4">
          Top Categories Of The Month{" "}
        </h2>
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full justify-center items-center mx-auto px-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
