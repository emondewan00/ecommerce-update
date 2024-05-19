
import Accordion from "./Accordion";

const productColors = [
  {
    id: 1,
    label: "Red",
    name: "redFor",
  },
  {
    id: 2,
    label: "Green",
    name: "greenFor",
  },
  {
    id: 3,
    label: "Blue",
    name: "blueFor",
  },
  {
    id: 4,
    label: "Yellow",
    name: "yellowFor",
  },
  {
    id: 5,
    label: "Black",
    name: "blackFor",
  },
  {
    id: 6,
    label: "White",
    name: "whiteFor",
  },
];

const Color = () => {
  return <Accordion title={"Colors"} items={productColors} />;
};

export default Color;
