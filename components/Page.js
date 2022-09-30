import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => (
  <main className="pb-4" {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent  blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;