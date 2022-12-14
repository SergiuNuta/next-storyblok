import { storyblokEditable } from "@storyblok/react"

const Teaser = ({blok}) => {
    return (
      <div className="bg-black">
        <h2 className="font-serif text-3xl text-center" {...storyblokEditable(blok)}>{blok.headline}</h2>
      </div>
    )
  }
  
  export default Teaser