import React from 'react'
import {Title} from '../../Title'
import {Button} from "../../Button";

export const Gallery = () => {
  return <div className="px-3 py-4">
    <div
      className="before:h-2 before:w-8 before:bg-amber-600 before:content-[' '] flex items-center before:mr-4 text-sm uppercase tracking-wide font-semibold">
      Mes photos
    </div>
    <div className='flex flex-col-reverse'>
      <GalleryPicture/>
    </div>
  </div>
}

const GalleryPicture = () => {
  /*Sur grand écran rajouter 2 voir 3 images*/
  return <div>
    <Title title='Une image vaut plus que milles mots !'
           className='uppercase tracking-wide text-2xl mt-4 font-bold leading-tight mb-6'/>
    <div className="grid-wrapper">
      <div className="tall">
        <img
          src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
          alt=""/>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80"
          alt=""/>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
          alt=""/>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt=""/>
      </div>
      <div className="tall">
        <img
          src=" https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=60"
          alt=""/>
      </div>
      <div className="tall">
        <img
          src="https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2134&amp;q=80"
          alt=""/>
      </div>
    </div>
    <Button isLink={true} href="/"
            className="text-sm hover:bg-amber-300 transition duration-300 mt-6 block w-fit rounded px-4 py-2 font-medium mx-auto">
      Voir plus de photo
    </Button>
  </div>
}
