import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="relative bg-white border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="w-full mx-auto px-4 sm:px-6 bg-[#1e2142]">
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
      <div className="md:flex md:items-center md:justify-end">
        <div className="flex justify-center space-x-6 md:order-last">
        <p className="text-gray-400 text-[1.5em] pt-[10px]">Get in touch</p>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Linkedin</span>
            <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 112.196 112.196" aria-hidden="true">
              <path fillRule="evenodd" d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118
                c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715
                c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662
                C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967
                c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z
                M27.865,83.739H41.27V43.409H27.865V83.739z" clipRule="evenodd">
                </path>
            </svg>
          </a>
          </div>
          </div>
    </div>
  );
};
 
export default Navigation;