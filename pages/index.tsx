import type { NextPage } from 'next'
import Hero from '../components/Hero'
import { Layout } from '../components/Layout'
import { Gallery } from '../components/Home/Sections/Gallery'
import Section from '../components/Section'
import Contact from "../components/Home/Sections/Contact";

const Home: NextPage = () => {
  return <Layout nav={true} pageTitle="Portfolio Loïc Fougerat | Accueil" container={true}>
    <Section>
      <Hero />
    </Section>
    <Section>
      <Gallery/>
    </Section>
    <Section>
      <Contact/>
    </Section>
  </Layout>
}

export default Home
