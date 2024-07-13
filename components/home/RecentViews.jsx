import connectMongo from "@/lib/connectDb";
import RecentViewCard from "../shared/RecentViewCard";
import ProductModel from "@/models/ProductModel";

const RecentViews = async () => {
  await connectMongo();
  const data = await ProductModel.find({}).limit(6);
  return (
    <div className="mb-10">
      <div className="py-2 border-b flex items-center justify-between">
        <h3 className="text-xl text-gray-700 font-bold ">Your Recent Views</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-4">
        {data.map((product) => (
          <RecentViewCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecentViews;
