import { FaPercent } from "react-icons/fa";
import ButtonOutline from "./ButtonOutline";
const OfferCardFullWidth = () => {
  return (
    <div className="bg-offer bg-cs h-56 md:h-40 p-4 md:px-12 rounded mb-4 flex  md:items-center flex-col md:flex-row">
      <div className="flex ">
        <div className="text-orange-500 flex">
          <h1 className="text-5xl font-bold">25</h1>
          <sup className="text-lg font-extrabold mt-3">
            <FaPercent />
          </sup>
          <sub className="text-lg -ml-4 mt-4">OFF</sub>
        </div>
        <hr className="mx-6 border hidden md:block h-12 border-gray-500/50" />
      </div>
      <div className="flex md:items-center grow md:justify-between flex-col md:flex-row">
        <div>
          <h1 className="text-3xl font-bold text-white">FOR TODAYS FASHION </h1>
          <p className="text-[16px] text-white">
            Use code{" "}
            <span className="text-gray-900 p-1 rounded-[2px] bg-white">
              Black12345
            </span>{" "}
            to get best offer.
          </p>
        </div>
        {/* <button className="uppercase text-white text-[16px] border-2 px-6 py-2 h-fit rounded flex items-center gap-x-2">
          shop now <FaArrowRight />
        </button> */}
        <ButtonOutline text={"shop now"} style="text-white w-fit mt-4" />
      </div>
    </div>
  );
};

export default OfferCardFullWidth;
