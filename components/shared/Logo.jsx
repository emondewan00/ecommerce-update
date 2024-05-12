import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          priority
          src={"/images/logo-white.png"}
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
