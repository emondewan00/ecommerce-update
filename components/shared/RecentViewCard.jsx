import Image from "next/image";
import Link from "next/link";

const RecentViewCard = ({ product }) => {
  const { name, image, _id } = product || {};
  return (
    <div className="relative group">
      <Image
        src={image[0]}
        className=" object-cover w-[190px] h-[150px] relative rounded"
        width={190}
        height={150}
        alt={name}
      />
      <div className="absolute top-0 left-0 w-full text-white bg-blue-400/40  group-hover:flex justify-center items-center group-hover:h-full transition-all ease-in-out duration-500 h-0 rounded text-balance text-center">
        <Link
          href={`/product/${_id}`}
          className=" group-hover:block hidden  after:transition-all after:ease-linear after:duration-200 after:delay-100 after:[] after:w-0 after:h-1 after:bg-white after:rounded after:absolute  after:left-11 hover:after:w-[70px] after:mt-6 "
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

export default RecentViewCard;
