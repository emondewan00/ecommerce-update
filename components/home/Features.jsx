import FeatureCard from "../shared/FeatureCard";

const Features = () => {
  return (
    <div className="border grid grid-cols-1 md:grid-cols-3 items-center mt-6 shadow feature bg-white">
      <FeatureCard
        img={"/images/delivery.png"}
        title={"FREE SHIPPING & RETURN"}
        subtitle={"Free shipping on all orders over $99."}
      />
      <FeatureCard
        img={"/images/cashback.png"}
        title={"MONEY BACK GUARANTEE"}
        subtitle={"100% money back guarantee"}
      />
      <FeatureCard
        img={"/images/support.png"}
        title={"FREE SHIPPING & RETURN"}
        subtitle={"Free shipping on all orders over $99."}
      />
    </div>
  );
};

export default Features;
