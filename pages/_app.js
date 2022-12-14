import { storyblokInit, apiPlugin } from '@storyblok/react'
import '../styles/tailwind.css'

import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Slider from "../components/Slider";
import HeroSection from '../components/HeroSection';
 
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  navigation: Navigation,
  footer: Footer,
  layout: Layout,
  slider: Slider,
  heroSection: HeroSection
};

storyblokInit({
  accessToken: process.env.storyblokPreviewToken,
  use: [apiPlugin],
  components
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
