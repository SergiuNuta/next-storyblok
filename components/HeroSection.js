import { storyblokEditable } from "@storyblok/react"
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

const HeroSection = ({ blok }) => {

const subheading = blok.subheading
  const [typedSubheading, setTypedSubheading] = useState('')
  useEffect(() => {

    const timeout = setTimeout(() => {
      setTypedSubheading(subheading.slice(0, typedSubheading.length + 1))
    }, 100)
    return () => clearTimeout(timeout)
  }, [subheading, typedSubheading])
  return (
    <div className="bg-[#242359] w-full h-screen overflow-hidden flex flex-col items-center pt-48 text-white h-screen">
      <h1 className="pl-5 md:pl-0 w-full opacity-50 text-[2em] md:text-[2em] md:w-[80%]" {...storyblokEditable(blok)}>{blok.headline}</h1>
      <h2 className="pl-5 md:pl-0 text-[3em] md:text-[4em] blinking-cursor w-full md:w-[80%]" {...storyblokEditable(blok)}>{typedSubheading}</h2>
      <motion.div
      initial={{ opacity: 0}}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%']
      }}
      transition={{ duration: 2.5 }}
      className="circleWrapper relative flex justify-center items-center z-10">
        <div className="opacity-10 absolute border border-[white] flex justify-center items-center rounded-full h-[200px] w-[200px] animate-pulse"></div>
        <div className="opacity-10 absolute border border-[white] flex justify-center items-center rounded-full h-[300px] w-[300px]"></div>
        <div className="opacity-10 absolute border border-[white] flex justify-center items-center rounded-full h-[500px] w-[500px]"></div>
        <div className="absolute border border-[#EAAA00] flex justify-center items-center rounded-full h-[650px] w-[650px] animate-pulse opacity-10"></div>
        <div className="opacity-10 absolute border border-[white] flex justify-center items-center rounded-full h-[800px] w-[800px]"></div>
        <div className="opacity-10 absolute border border-[white] flex justify-center items-center rounded-full h-[950px] w-[950px]"></div>
      </motion.div>
    </div>
  )
}

export default HeroSection