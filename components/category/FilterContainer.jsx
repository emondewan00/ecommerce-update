import CheckBoxFilterContainer from "../shared/CheckBoxFilterContainer";
import RadioFilterContainer from "../shared/RadioFilterContainer";
import RangeFilter from "./RangeFilter";

const FilterContainer = ({ filterData }) => {
  let filters = [];

  for (const key in filterData) {
    if (filterData[key]?.length > 0) {
      if (key === "brands") {
        filters.push(
          <RadioFilterContainer title={key} items={filterData[key]} />
        );
      } else {
        filters.push(
          <CheckBoxFilterContainer title={key} items={filterData[key]} />
        );
      }
    }
  }

  return (
    <div className="w-full">
      <RangeFilter />
      {filters.map((filter) => filter)}
    </div>
  );
};

export default FilterContainer;
