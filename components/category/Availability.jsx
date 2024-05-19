import Accordion from "./Accordion";

const productAvailabilities = [
  {
    id: 1,
    label: "In Stock",
    name: "inStockFor",
  },
  {
    id: 2,
    label: "Out of Stock",
    name: "outOfStockFor",
  },
  {
    id: 3,
    label: "Pre Order",
    name: "preOrderFor",
  },
  {
    id: 4,
    label: "Up Coming",
    name: "upComingFor",
  },
];

const Availability = () => {
  return <Accordion title={"Availability"} items={productAvailabilities} />;
};

export default Availability;
