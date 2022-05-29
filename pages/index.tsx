import type { NextPage } from 'next'
import Hero from '../components/Hero'
import { Layout } from '../components/Layout'
import Section from '../components/Section'

const Home: NextPage = () => {
  return <Layout nav={true} pageTitle="Portfolio Loïc Fougerat | Accueil">
    <Section>
      <Hero />
    </Section>
  </Layout>
}

export default Home
