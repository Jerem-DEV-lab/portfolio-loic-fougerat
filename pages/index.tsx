import type { NextPage } from 'next'
import Hero from '../components/Hero'
import { Layout } from '../components/Layout'
import { Gallery } from '../components/Home/Sections/Gallery'
import Section from '../components/Section'

const Home: NextPage = () => {
  return <Layout nav={true} pageTitle="Portfolio Loïc Fougerat | Accueil">
    <Section>
      <Hero />
    </Section>
    <Section>
      <Gallery />
    </Section>
  </Layout>
}

export default Home
