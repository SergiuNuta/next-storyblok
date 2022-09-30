import { storyblokEditable } from "@storyblok/react"

const HeroSection = ({blok}) => {
    return (
      <div className="bg-black text-white md:h-screen pb-96">
        <h2 className="font-serif text-3xl text-center" {...storyblokEditable(blok)}>{blok.headline}</h2>
      </div>
    )
  }
  
  export default HeroSection