import PDCard from "@/components/shared/PDCard";
import Product from "@/components/product/Product";
import TopSell from "@/components/home/TopSell";
import connectMongo from "@/lib/connectDb";
import ProductModel from "@/models/ProductModel";
import ProductDescription from "@/components/product/ProductDescription";

const ProductDetailsPage = async ({ params: { id } }) => {
  await connectMongo();
  const data = await ProductModel.findById(id);
  const relatedData = await ProductModel.find({
    category: data.category,
  }).limit(8);

  return (
    <div className="max-w-5xl mx-auto my-4 px-4 md:px-0">
      <Product product={data} />
      <ProductDescription product={data} />
      <div className="my-10 shadow-lg p-4 bg-slate-50">
        <h1>Related Products </h1>
        <div className="related-product flex flex-col md:flex-row gap-4 mt-4 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            {relatedData.map((product) => (
              <PDCard key={product.id} product={product} />
            ))}
          </div>
          <div>
            <TopSell />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
