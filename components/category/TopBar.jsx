import { FaFilter } from "react-icons/fa";

const TopBar = ({ onClick }) => {
  return (
    <div className="shadow mb-3 rounded-[1px] flex justify-between px-4 py-2">
      <p className="hidden md:block">Product</p>
      <div
        onClick={onClick()}
        className="bg-gray-100 gap-2 rounded-[2px] text-gray-700 flex items-center px-2 md:hidden"
      >
        <FaFilter />
        <span>Filter</span>
      </div>
      <div className="flex gap-2">
        <div>
          <label htmlFor="show" className="text-gray-700 hidden md:inline">
            Show:
          </label>
          <select
            id="show"
            className="bg-gray-100 p-1 rounded text-gray-700 ml-1 outline-none"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
          </select>
        </div>
        <div>
          <label htmlFor="sortBy" className="text-gray-700 hidden md:inline">
            Sort By:
          </label>
          <select
            id="sortBy"
            className="bg-gray-100 p-1 rounded text-gray-700 ml-1 outline-none w-28 "
            defaultValue={"default"}
          >
            <option value="default" disabled>
              Default
            </option>
            <option value="lowToHigh">Price (Low {">"} High)</option>
            <option value="highToLow">Price (High {">"} Low)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
