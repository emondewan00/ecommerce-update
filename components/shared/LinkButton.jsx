import Link from "next/link";

const LinkButton = ({ url, text }) => {
  return (
    <Link
      href={url}
      className="bg-gray-950 px-3 leading-10 md:px-6 md:py-3 text-white inline-block uppercase rounded"
    >
      {text}
    </Link>
  );
};

export default LinkButton;
