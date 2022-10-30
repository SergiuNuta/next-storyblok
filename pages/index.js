import Head from "next/head"
import Layout from "../components/Layout"
import { useStoryblokState, getStoryblokApi, StoryblokComponent  } from "@storyblok/react"
 
export default function Home({ story, preview }) {
  story = useStoryblokState(story, {}, preview)

  return (
    <div>
      <Head>
        <title>Serghei Nuta - Front-End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <StoryblokComponent blok={story.content} />
      </Layout>
      <main>
        
      </main>
    </div>
  )
}
 
export async function getServerSideProps(context) {
  // get the query object
  const insideStoryblok = context.query._storyblok;
  const shouldLoadDraft = context.preview || insideStoryblok;

  // home is the default slug for the homepage in Storyblok
  let slug = "home";
 
  let sbParams = {
    version: "published"
  };

  if(shouldLoadDraft) {
    sbParams.version = 'draft'
  }
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      preview: shouldLoadDraft || false
    },
  };
}