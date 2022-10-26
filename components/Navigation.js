import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navigation = () => {
  const [logoSrc, setLogoSrc] = useState('https://a.storyblok.com/f/171187/800x100/f4be8953e6/logo-anim-revers.gif')
  return (
    <div className="relative bg-white border-gray-100 grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full mx-auto px-4 sm:px-6 bg-[#242359]">
        <div className="flex justify-between items-center  pt-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="logo-name text-white text-4xl">
                SN
                <span className="sr-only">Serghei Nuta</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Navigation;