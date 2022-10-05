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
    <div className="carousel w-full h-full" {...storyblokEditable(blok)}>
      <div className="relative w-full h-full overflow-hidden">
        <h1 className='flex items-center justify-center text-5xl font-bold pb-5'>Works</h1>
      {/* <div className="flex absolute bg-gray-400 top-0 right-0">
        <PrevButton onClick={movePrev} disabled={isDisabled('prev')} />
        <NextButton onClick={moveNext} disabled={isDisabled('next')} />
      </div> */}
      <div
          ref={slider}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
          {slide.map((resource, index) => {
            return (
              <div key={index} className="carousel-item flex-col relative w-full">
                <div className="relative max-w-[600px] w-[70%] min-w-[400px] min-h-[400px] max-h-[600px] snap-start mx-auto">
                  <Image
                    src={resource.image.filename || ''}
                    alt={resource.alt}
                    className="w-full aspect-square grayscale"
                    layout='fill'
                  />
                </div>
                <div className='max-w-[600px] w-[70%] min-w-[400px] flex flex-col mx-auto'>
                <p className='w-full text-gray-400 block pt-4 text-[1em]'>skills: {resource.skills}</p>
                <p className='w-full text-gray-400 block text-[2em]'>{resource.description}</p>
                </div>
              </div>
              
            );
          })}
        </div>
        <div className="flex justify-between px-5 md:px-5 xl:px-10 w-full min-w-[375px] absolute top-[25%]">
        <PrevButton onClick={movePrev} disabled={isDisabled('prev')} />
        <NextButton onClick={moveNext} disabled={isDisabled('next')} />
        </div>
      </div>
    </div>
  );
};

export default Slider;