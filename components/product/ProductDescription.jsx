const ProductDescription = ({ product }) => {
  let content = [];
  for (const key in product.details) {
    content.push(
      <div className="flex my-2 text-sm md:text-[15px] ">
        <p className="w-1/5 bg-[#f7f7f7] pl-4 text-gray-700 p-1 capitalize font-semibold">
          {key}
        </p>
        <p className="w-full bg-[#f0f0f0] pl-4 text-gray-700 p-1">
          {product.details[key]}
        </p>
      </div>
    );
  }
  return (
    <div className="my-10 shadow-lg bg-white p-4">
      <h3 className="text-gray-600 text-lg ">Product Specification</h3>
      <div>{content.map((item) => item)}</div>
    </div>
  );
};

export default ProductDescription;
