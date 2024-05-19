import LinkButton from "../shared/LinkButton";

const BannerVertical = ({ url }) => {
  return (
    <div
      className="bg-clothing bg-center  md:max-w-[250px] md:h-[590px] bg-cs  p-6 rounded relative "
      style={{
        backgroundImage: `url(/images/${url}-vertical.jpeg)`,
      }}
    >
      <p className="text-gray-500/80 after:[] after:w-7 after:h-[2px] after:mt-4 after:left-6 after:bg-black after:absolute after:top-8 mb-2">
        Weekend Sale
      </p>
      <h1 className="text-3xl text-slate-700 font-bold">
        New Arrivals <span className="font-light">Collection</span>
      </h1>
      <LinkButton text={"Shop Now"} url={"/"} />
    </div>
  );
};

export default BannerVertical;
