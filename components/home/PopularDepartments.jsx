import connectMongo from "@/lib/connectDb";
import ButtonOutline from "../shared/ButtonOutline";
import PDCard from "../shared/PDCard";
import ProductModel from "@/models/ProductModel";
const PopularDepartments = async () => {
  await connectMongo();
  const data = await ProductModel.find({}).limit(10);
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
        {data.map((product) => (
          <PDCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularDepartments;
