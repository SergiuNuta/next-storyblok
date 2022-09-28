import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="relative bg-white border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">Serghei Nuta</span>
                <Image
                  className="h-20 w-auto sm:h-10 sm:hidden"
                  src='https://a.storyblok.com/f/171187/92x106/523a47537d/storyblok-logo.png'
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