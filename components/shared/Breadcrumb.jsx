import Link from "next/link";

const Breadcrumb = ({  page, location }) => {
  return (
    <div className="bg-gray-100 h-36 flex flex-col justify-center items-center text-gray-800">
      <div>
        <Link href={"/"}>HOME</Link>
        <span className="mx-2">/</span>
        <Link href={location}>{page}</Link>
      </div>
      <h1 className="text-3xl font-bold ">{page}</h1>
    </div>
  );
};

export default Breadcrumb;
