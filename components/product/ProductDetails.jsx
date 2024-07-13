import { FaShoppingCart, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const PdDetails = ({ product }) => {
  const {
    discount_price,
    price,
    rating,
    name,
    brand,
    category,
    sku,
    availability,
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
          <span className="text-green-600">In Stock</span>
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
        <button className="uppercase w-fit text-sm text-white bg-yellow-400 py-3 my-2 px-6 rounded flex gap-2 items-center  justify-center">
          <FaShoppingCart />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default PdDetails;
