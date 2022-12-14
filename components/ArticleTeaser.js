import Image from "next/image"

const ArticleTeaser = ({blok}) => {
    const resizedImage = function(imageUrl) {
      if (typeof imageUrl !== 'undefined') {
        return imageUrl.filename.replace('//a.storyblok.com', '//img2.storyblok.com/300x250')
      }
      return null
    }
  
    return (
      <div className="py-10">
        <Image src={resizedImage(blok.hero_image)} className="pb-10" alt="hero image"/>
        <h2 className="pb-6 text-xl">{blok.title}</h2>
        <p className="pb-6 text-gray-700 leading-loose">{blok.intro}</p>
        <p className="text-gray-700">{blok.author}</p>
      </div>
    )
  }
  
  export default ArticleTeaser