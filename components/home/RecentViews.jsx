import RecentViewCard from "../shared/RecentViewCard";

const RecentViews = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=6&skip=30");
  const data = await res.json();
  return (
    <div className="mb-10">
      <div className="py-2 border-b flex items-center justify-between">
        <h3 className="text-xl text-gray-700 font-bold ">Your Recent Views</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-4">
        {data.products.map((product) => (
          <RecentViewCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecentViews;
