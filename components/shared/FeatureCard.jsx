import Image from "next/image";

const FeatureCard = ({ img, title, subtitle }) => {
  return (
    <div className="flex gap-x-4 px-3 md:px-6 border-b md:border-r md:border-b-0 py-4">
      <Image
        src={img}
        className="object-contain"
        width={40}
        height={40}
        alt=""
      />
      <div>
        <h3 className="text-md font-bold">{title}</h3>
        <p className="text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
