import { FaRegHeart, FaSearch, FaShoppingCart } from "react-icons/fa";

const ProductHover = () => {
  return (
    <div className="absolute top-4 right-4 space-y-2 opacity-0 transition-opacity delay-100 duration-300 ease-linear group-hover:opacity-100">
      <div className="bg-white text-gray-400 hover:bg-blue-400 p-2 rounded-full hover:text-white transition-all duration-300 delay-150">
        <FaShoppingCart className="" />
      </div>
      <div className="bg-white text-gray-400 hover:bg-blue-400 p-2 rounded-full hover:text-white transition-all duration-300 delay-150">
        <FaRegHeart className="" />
      </div>
      <div className="bg-white text-gray-400 hover:bg-blue-400 p-2 rounded-full hover:text-white transition-all duration-300 delay-150">
        <FaSearch className="" />
      </div>
    </div>
  );
};

export default ProductHover;