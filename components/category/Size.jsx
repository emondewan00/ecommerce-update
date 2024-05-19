import Accordion from "./Accordion";

const productSizes = [
  { id: 1, label: "S", name: "smallFor" },
  { id: 2, label: "M", name: "mediumFor" },
  { id: 3, label: "L", name: "largeFor" },
  { id: 4, label: "XL", name: "extraLargeFor" },
  { id: 5, label: "XXL", name: "doubleExtraLargeFor" },
];

const Size = () => {
  return <Accordion title={"Size"} items={productSizes} />;
};

export default Size;
