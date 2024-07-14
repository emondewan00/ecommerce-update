import PDCard from "@/components/shared/PDCard";
import Product from "@/components/product/Product";
import TopSell from "@/components/home/TopSell";
import connectMongo from "@/utils/connectDb";
import ProductModel from "@/models/ProductModel";
import ProductDescription from "@/components/product/ProductDescription";
import RecentViews from "@/components/home/RecentViews";

const ProductDetailsPage = async ({ params: { id } }) => {
  await connectMongo();
  const data = await ProductModel.findById(id);
  const relatedData = await ProductModel.find({
    category: data.category,
  }).limit(10);

  return (
    <div className="max-w-5xl mx-auto my-4 px-4 md:px-0">
      <Product product={data} />
      <ProductDescription product={data} />
      <div className="my-10 shadow-lg p-4 bg-slate-50">
        <h1>Related Products </h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 ">
          {relatedData.map((product) => (
            <PDCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <RecentViews />
    </div>
  );
};

export default ProductDetailsPage;
