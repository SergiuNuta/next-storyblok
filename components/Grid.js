import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

const Grid = ({ blok }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
  )
}

export default Grid