import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: process.env.storyblokPreviewToken,
    cache: {
      clear: 'auto',
      type: 'memory'
    }
})

export default Storyblok