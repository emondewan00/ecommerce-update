import ButtonOutline from "../shared/ButtonOutline";
import PDCard from "../shared/PDCard";

const PopularDepartments = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();
  return (
    <div className="my-20">
      <h3 className="text-xl font-bold text-center">Popular Departments</h3>
      <div className="flex flex-wrap gap-2 justify-center mt-4 mb-6">
        <ButtonOutline
          style={"border-blue-400 text-blue-500"}
          text={"new arrivals"}
        />
        <ButtonOutline text={"best sellers"} />
        <ButtonOutline text={"most popular"} />
        <ButtonOutline text={"featured"} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {data.products.map((product) => (
          <PDCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularDepartments;
