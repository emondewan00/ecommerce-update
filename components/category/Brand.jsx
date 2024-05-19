import Accordion from "./Accordion";

const productBrands = [
  {
    id: 4,
    label: "Nike",
    name: "nikeFor",
  },
  {
    id: 5,
    label: "Adidas",
    name: "adidasFor",
  },
  {
    id: 6,
    label: "Puma",
    name: "pumaFor",
  },
  {
    id: 7,
    label: "Gucci",
    name: "gucciFor",
  },
];

const Brand = () => {
  return <Accordion title={"Brand"} items={productBrands} />;
};

export default Brand;
