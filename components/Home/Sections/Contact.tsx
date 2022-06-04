import React from 'react';
import Section from "../../Section";
import {Title} from "../../Title";
import Paragraph from "../../Paragraph";
import FormContact from "../../FormContact";

const Contact = () => {
  return <Section>
    <div
      className="before:h-2 before:w-8 before:bg-amber-600 before:content-[' '] flex items-center before:mr-4 text-sm uppercase tracking-wide font-semibold">
      Contactez moi
    </div>
    <Title title="Envie d'immortaliser un moment ?" className="uppercase tracking-wide text-4xl mt-4 font-bold mb-4"/>
    <Paragraph>
      Vous avez un projet et vous avez envie d&apos;approfondir, je reste à votre disposition pour parler de votre
      projet.
    </Paragraph>
    <FormContact/>
  </Section>
};

export default Contact;
