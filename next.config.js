/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    storyblokPreviewToken: process.env.STORYBLOK_PREVIEW_TOKEN,
    storyblokPublicToken: process.env.STORYBLOK_PUBLIC_TOKEN,
    storyblokPreviewSecretWord: process.env.STORYBLOK_PREVIEW__SECRET_TOKEN
  }
}

module.exports = nextConfig
