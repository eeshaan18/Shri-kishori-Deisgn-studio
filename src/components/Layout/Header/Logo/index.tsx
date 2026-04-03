import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="inline-block outline-none" aria-label="Go to Home">
      <Image
        // DIRECT PATH: Vercel routes the 'public' folder straight to '/'
        src="/images/logo/Radhe2.svg" 
        alt="Shri Kishori Design Studio Logo"
        width={200}
        height={62}
        className="w-[200px] h-auto object-contain"
        priority // Tells Next.js to skip lazy-loading and fetch this instantly
        quality={100}
      />
    </Link>
  );
};

export default Logo;