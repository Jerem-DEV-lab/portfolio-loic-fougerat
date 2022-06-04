import React from 'react'
import { Title } from '../components/Title'
import Section from '../components/Section'
import Image from 'next/image'
import { Button } from './Button'

const Hero = () => {
  return <div className=''>
    <HeroContent />
    <HeroImage />
  </div>
}

export default Hero

const HeroContent = () => {
  return <div className="space-y-4 px-3 py-4">
    <div className="before:h-2 before:w-8 before:bg-amber-600 before:content-[' '] flex items-center before:mr-4 text-sm uppercase tracking-wide font-semibold">Photographe professionnel</div>
    <Title title='Loïc Fougerat' className="uppercase tracking-wide text-4xl mt-4 font-bold" />
    <div className="flex space-x-4">
      <div className="h-auto w-8 bg-amber-600"></div>
      <p className="text-sm text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A debitis magni deserunt tempore laudantium possimus accusantium ut fugit alias! Dolorum ut perspiciatis laboriosam eligendi velit quod eaque, ea laborum doloremque.
      </p>
    </div>
    <div className="ml-5">
      <Button isLink={true} href="/" className="text-sm hover:bg-amber-300 transition duration-300">En savoir plus</Button>
    </div>
  </div>
}

const HeroImage = () => {
  return <div className="relative hidden lg:block lg:h-36 lg:w-32">
    <Image src="/assets/placeholder.webp" layout="fill" />
  </div>
}
