import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
      <Image
        src={`${getImagePrefix()}images/logo/Radhe2.svg`}
        alt="logo"
        width={160}
        height={50}
        style={{ width: "200px", height: "auto" }}
        quality={100}
      />
  );
};

export default Logo;
