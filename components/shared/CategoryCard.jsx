import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (
    <>
      <div className=" relative overflow-hidden">
        <Link href={`/category/${category}`} className="w-full">
          <Image
            src={`/images/${category}.avif`}
            className="relative hover:scale-110 transition-all duration-300 delay-100 ease-linear h-[120px] w-full object-cover object-center"
            width={170}
            height={170}
            alt=""
          />
          <div className="absolute bottom-0 h-8 w-full bg-white/50 flex justify-center items-center">
            <p className=" text-center threeD capitalize ">{category}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CategoryCard;
