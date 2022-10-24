import { useState, useRef, useEffect } from 'react';
import { storyblokEditable } from "@storyblok/react"
import { motion } from 'framer-motion'
import { PrevButton, NextButton } from './CarouselButtons';
import Image from "next/image";

const Slider = (blok) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slider = useRef(null);
  const slide = blok.blok.slides
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};
  
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      slider.current !== null &&
      slider.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && slider.current !== null) {
      return (
        slider.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (slider !== null && slider.current !== null) {
      slider.current.scrollLeft = slider.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = slider.current
      ? slider.current.scrollWidth - slider.current.offsetWidth
      : 0;
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className='carousel grid grid-cols-[15%_70%_15%] grid-rows-[100px]'>
      <motion.h1
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible
      }}
      className='flex justify-center items-center text-5xl font-bold col-start-2 col-span-1'>Works</motion.h1>
      <div className='col-start-1 col-span-1 flex items-center justify-center h-[300px] md:h-[400px] xl:h-[500px] 2xl:h-[550px]'>
        <PrevButton onClick={movePrev} disabled={isDisabled('prev')} />
      </div>
      <div ref={slider} className="carousel-container h-[660px] col-start-2 col-span-1 relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
      {slide.map((resource, index) => {
            return (
              <div key={index} className="carousel-item flex-col relative w-full">
                <div className="relative w-full h-[300px] md:h-[400px] xl:h-[500px] 2xl:h-[550px] snap-start mx-auto">
                  <motion.p
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible
                  }}
                  className='absolute z-10 top-5 left-[41%]'>{resource.title}</motion.p>
                  <Image
                    src={resource.image.filename || ''}
                    alt={resource.alt}
                    className="w-full aspect-square grayscale hover:grayscale-0 transition-grayscale duration-300"
                    layout='fill'
                  />
                </div>
                <div className='flex flex-col w-full'>
                <motion.p 
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible
                }}
                className='w-full text-gray-400 block pt-4 text-[1em]'>skills: {resource.skills}</motion.p>
                <motion.p 
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible
                }}
                className='w-full text-gray-400 block text-[2em]'>{resource.description}</motion.p>
                </div>
              </div>
              
            );
          })}
      </div>
      <div className='col-start-3 col-span-1 flex items-center justify-center h-[300px] md:h-[400px] xl:h-[500px] 2xl:h-[550px]'>
      <NextButton onClick={moveNext} disabled={isDisabled('next')} />
      </div>
    </motion.div>
  );
};

export default Slider;

{/* <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible
        }}
        style={
          {
            "--base-width": "24vw",
            top: "-18vw",
            letterSpacing: "-1.4vw",
            x: "-50%"
          } as any
        }
      >
        Galleries
      </motion.h1>
      <ul>
        <motion.li variants={itemVariants}>
          <Link to="/amsterdam">Amsterdam Zuid nightwalk</Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link to="/london">White lines of Canary Wharf</Link>
        </motion.li>
      </ul>
    </motion.article> */}