import PDCard from "@/components/shared/PDCard";
import connectMongo from "@/lib/connectDb";
import ProductModel from "@/models/ProductModel";

const Search = async ({ params: { title } }) => {
  await connectMongo();

  const data = await ProductModel.find({
    name: { $regex: title, $options: "i" },
  });
  let content = null;
  if (data?.length === 0) {
    content = <h1 className="text-3xl font-bold">No products found</h1>;
  } else {
    content = (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data?.map((product) => (
          <PDCard product={product} key={product?._id} />
        ))}
      </div>
    );
  }

  return <div className="max-w-5xl mx-auto px-4 md:px-0 my-10">{content}</div>;
};

export default Search;
