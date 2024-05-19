import PDCardHorizontal from "../shared/PDCardHorizontal";

const TopSell = () => {
  return (
    <div className="rounded border  md:max-w-[270px] w-full">
      <h3 className="text-xl border-b p-4">Top 20 Sell Product</h3>
      <div className="flex flex-col gap-4 p-4">
        <PDCardHorizontal />
        <PDCardHorizontal />
        <PDCardHorizontal />
      </div>
    </div>
  );
};

export default TopSell;
