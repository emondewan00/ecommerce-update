import Image from "next/image";

const OfferCardVertical = ({ offerData }) => {
  const { subTitle, percentage, title, titleAfterBR, textSm, amount, button } = {
    subTitle: "New Arrival",
    percentage: "20 % OFF",
    title: "ACCESSORIES",
    titleAfterBR: "Collection",
    textSm: "Only From",
    amount: "$100.00",
  };
  return (
    <div className="relative md:w-1/2">
      <Image
        src={"/images/1-2.jpg"}
        className="relative rounded w-full h-[160px] md:h-[200px]"
        width={560}
        height={200}
        alt=""
      />
      {/* <div className="absolute top-0  flex flex-col justify-center h-full ml-10">
        <p className="text-gray-400">
          New Arrivals{" "}
          <span className="text-orange-400 font-bold">20 % OFF</span>
        </p>
        <h3 className="font-extrabold text-white text-2xl">
          ACCESSORIES
          <br />
          <span className="font-normal">Collection</span>
        </h3>
        <p className="text-sm mt-3 text-white">
          Only From <span className="text-orange-400">$170.00</span>
        </p>
      </div> */}
      <div className="absolute top-0  flex flex-col justify-center h-full ml-10">
        <p className="text-gray-400">
          {subTitle}{" "}
          <span className="text-orange-400 font-bold">{percentage}</span>
        </p>
        <h3 className="font-bold md:font-extrabold text-white text-lg md:text-2xl">
          {title}
          <br />
          <span className="font-light md:font-normal">{titleAfterBR}</span>
        </h3>
        {!button ? (
          <p className="text-sm mt-3 text-white">
            {textSm} <span className="text-orange-400">{amount}</span>
          </p>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default OfferCardVertical;
