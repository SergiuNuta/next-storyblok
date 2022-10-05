import Link from 'next/link'
import Image from 'next/image'

const Footer = () => (
    <footer className="bg-black block w-full" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="px-5 py-12 mx-auto bg-cover bg-no-repeat bg-[url('https://a.storyblok.com/f/171187/x/a018ab7421/code-text-2.svg')]  sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
      <div className="flex flex-col md:flex-row justify-center md:items-center mx-auto mb-8 space-x-6 md:order-last md:mb-0">
        <span className='text-white md:text-4xl text-3xl'>const Contact = () =&gt; &#123;</span>
          <a target="_blank" href="https://www.linkedin.com/in/serghei-nuta-472092123/" rel="noopener noreferrer" className='pt-2'>
            <span className="sr-only">linkedin profile</span>
            <Image
              className="h-20 w-auto sm:h-10 sm:hidden"
              src='https://a.storyblok.com/f/171187/x/f50082d22f/linkedin-icon.svg'
              alt="Storyblok"
              width={50}
              height={50}
            />
          </a>
            <a target="_blank" href="https://github.com/SergiuNuta" rel="noopener noreferrer" className='pt-2'>
            <span className="sr-only">github profile</span>
            <Image
              className="h-20 w-auto sm:h-10 sm:hidden"
              src='https://a.storyblok.com/f/171187/x/529b1d4551/git-icon.svg'
              alt="Storyblok"
              width={50}
              height={50}
            />
            </a>
        <span className='text-white md:text-4xl text-3xl'>&#125;</span>
      </div>
      </div>
    </footer>
     
    )
     
    export default Footer