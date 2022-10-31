import Link from "next/link";

const Navigation = () => {
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