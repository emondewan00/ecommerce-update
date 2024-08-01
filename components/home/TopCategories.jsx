import CategoryCard from "../shared/CategoryCard";

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      text: "Smartphones",
      url: "/category/smartphone",
    },
    {
      id: 2,
      text: "Laptops",
      url: "/category/laptop",
    },
    {
      id: 3,
      text: "Fragrances",
      url: "/category/fragrance",
    },
    {
      id: 4,
      text: "skincare's",
      url: "/category/skincare",
    },
    {
      id: 5,
      text: "Groceries",
      url: "/category/grocery",
    },
    {
      id: 6,
      text: "Home Decor",
      url: "/category/home decor",
    },
  ];
  return (
    <div className="my-10">
      <div className="bg-gray-100 py-10">
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
