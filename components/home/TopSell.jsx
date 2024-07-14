import connectMongo from "@/utils/connectDb";
import PDCard from "../shared/PDCard";
import PDCardHorizontal from "../shared/PDCardHorizontal";
import ProductModel from "@/models/ProductModel";

const TopSell = async () => {
  await connectMongo();
  const products = await ProductModel.find({})
    .sort({
      soldCount: -1,
    })
    .limit(3);

  console.log(products);
  return (
    <div className="rounded border  md:max-w-[270px] w-full hidden md:block">
      <h3 className="text-xl border-b p-4">Top 20 Sell Product</h3>
      <div className="flex flex-col gap-4 p-4">
        {/* <PDCardHorizontal />
        <PDCardHorizontal />
        <PDCardHorizontal /> */}
        {products.map((product) => (
          <PDCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSell;
