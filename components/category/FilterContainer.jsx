import Availability from "./Availability";
import Brand from "./Brand";
import Color from "./Color";
import RangeFilter from "./RangeFilter";
import Size from "./Size";

const FilterContainer = () => {
  return (
    <div>
      {/* filters */}
      <RangeFilter />
      <Availability />
      <Brand />
      <Color />
      <Size />
    </div>
  );
};

export default FilterContainer;
