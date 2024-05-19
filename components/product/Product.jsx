"use client";
import PdDetails from "./ProductDetails";
import ThumbsGallery from "./ThumbsGallery";

const Product = ({ product }) => {
  return (
    <div className="shadow-lg bg-white mt-5 grid grid-cols-1 md:grid-cols-pdDetails gap-6 py-4 px-6">
      {/* flex flex-col-reverse md:flex-row gap-4 */}
      <ThumbsGallery product={product} />
      <PdDetails product={product} />
    </div>
  );
};

export default Product;
