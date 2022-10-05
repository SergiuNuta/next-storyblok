import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="relative bg-white border-gray-100 grid grid-cols-1 md:grid-cols-2">
      <div className="w-full mx-auto px-4 sm:px-6 bg-[#242359]">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Serghei Nuta</span>
                <Image
                  className="h-20 w-auto sm:h-10 sm:hidden"
                  src='https://a.storyblok.com/f/171187/300x300/dd89de556d/logo.png'
                  alt="Storyblok"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Navigation;