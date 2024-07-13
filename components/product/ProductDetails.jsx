import { FaShoppingCart, FaStar } from "react-icons/fa";
import AddToCart from "./AddToCart";

const PdDetails = ({ product }) => {
  const {
    _id,
    discount_price,
    price,
    rating,
    name,
    brand,
    category,
    sku,
    availability,
    quantities,
  } = product || {};
  const ratingArray = new Array(Math.round(rating))?.fill(0);

  return (
    <div className="w-full ">
      <h4 className="mt-2 text-xl">{name}</h4>
      <div className="text-sm my-2 text-yellow-400 flex gap-x-1 items-center">
        {ratingArray.map((_, index) => (
          <FaStar key={index} className="text-yellow-400" />
        ))}
        <span className="ml-2 text-gray-400">{rating} Ratings </span>
      </div>
      <p className="text-gray-800 font-semibold space-x-2">
        <span>Availability: </span>
        {availability ? (
          <span className="text-green-600">In Stock ({quantities})</span>
        ) : (
          <span className="text-red-600">Out of Stock</span>
        )}
      </p>
      <p className="text-gray-500 my-2 capitalize space-x-2">Brand:{brand}</p>
      <p className="text-gray-500 my-2 capitalize space-x-2">
        Category:{category}
      </p>
      <p className="space-x-2 text-gray-500 my-2 capitalize">
        <span>SKU: </span>
        <span>{sku}</span>
      </p>
      <h4 className="font-semibold text-[16px] ">Summary:</h4>
      <p className="text-green-500">{product?.description}</p>
      <h3 className="font-extrabold text-xl">
        <span className="text-[#aaa] line-through">${price}</span> - $
        {discount_price}
      </h3>

      <div className="flex  gap-4">
        <AddToCart product_id={_id.toString()} name={name} />
      </div>
    </div>
  );
};

export default PdDetails;
