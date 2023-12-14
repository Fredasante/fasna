import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        className="mr-6"
        src={"/images/bird-logo.png"}
        alt="logo"
        width={80}
        height={80}
      />
    </Link>
  );
};

export default Logo;
