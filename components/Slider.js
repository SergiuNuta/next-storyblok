import { useState, useRef, useEffect } from 'react';
import { storyblokEditable } from "@storyblok/react"
import { PrevButton, NextButton } from './CarouselButtons';
import Image from "next/image";

const Slider = (blok) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slider = useRef(null);
  const slide = blok.blok.slides
  
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
    <div className='carousel grid grid-cols-[15%_70%_15%] grid-rows-[100px]'>
      <h1 className='flex justify-center items-center text-5xl font-bold col-start-2 col-span-1'>Works</h1>
      <div className='col-start-1 col-span-1 flex items-center justify-center h-[300px] md:h-[400px] xl:h-[500px] 2xl:h-[550px]'>
        <PrevButton onClick={movePrev} disabled={isDisabled('prev')} />
      </div>
      <div ref={slider} className="carousel-container h-[660px] col-start-2 col-span-1 relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
      {slide.map((resource, index) => {
            return (
              <div key={index} className="carousel-item flex-col relative w-full">
                <div className="relative w-full h-[300px] md:h-[400px] xl:h-[500px] 2xl:h-[550px] snap-start mx-auto">
                  <p className='absolute z-10 top-5 left-[41%]'>{resource.title}</p>
                  <Image
                    src={resource.image.filename || ''}
                    alt={resource.alt}
                    className="w-full aspect-square grayscale hover:grayscale-0 transition-grayscale duration-300"
                    layout='fill'
                  />
                </div>
                <div className='flex flex-col w-full'>
                <p className='w-full text-gray-400 block pt-4 text-[1em]'>skills: {resource.skills}</p>
                <p className='w-full text-gray-400 block text-[2em]'>{resource.description}</p>
                </div>
              </div>
              
            );
          })}
      </div>
      <div className='col-start-3 col-span-1 flex items-center justify-center h-[300px] md:h-[400px] xl:h-[500px] 2xl:h-[550px]'>
      <NextButton onClick={moveNext} disabled={isDisabled('next')} />
      </div>
    </div>
  );
};

export default Slider;