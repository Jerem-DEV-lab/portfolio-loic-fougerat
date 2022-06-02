import React from 'react'
import { Title } from '../../Title'
export const Gallery = () => {
    return <div className="px-3 py-4">
        <div className="before:h-2 before:w-8 before:bg-amber-600 before:content-[' '] flex items-center before:mr-4 text-sm uppercase tracking-wide font-semibold">
            Mes photos
        </div>
        <div className='flex flex-col-reverse'>
            <GalleryPicture />
        </div>
    </div>
}

const GalleryPicture = () => {
    return <div>
        <Title title='Une image vaut plus que milles mots !' className='uppercase tracking-wide text-2xl mt-4 font-bold leading-tight mb-6' />
        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-3 overflow-hidden">
            <img src="/assets/placeholder.jpg" alt="" className="w-full h-64 rounded"/>
        </div>
    </div>
}

const ServicesList = () => {
    return <>
        <WeddingPictures/>
    </>
}

const WeddingPictures = () => {
    return <div>
        <div>
            <img src="/assets/wedding-icon.svg" alt="" className="w-20 h-20 mx-auto" />
        </div>
        <h5 className='text-xl font-medium text-center leading-snug uppercase'>Photos mariage</h5>
        <p className="text-sm py-4 text-justify">
            Vous souhaitez célébrer votre union et immortaliser ce moment avec vos proches ?<br />
            Comptez donc sur moi pour vous proposer les plus belles photos de cet instant inoubliable.
        </p>
    </div>
}

const Book = () => {
    return <div>
    <div>
        <img src="/assets/wedding-icon.svg" alt="" className="w-20 h-20 mx-auto" />
    </div>
    <h5 className='text-xl font-medium text-center leading-snug uppercase'>Photos mariage</h5>
    <p className="text-sm py-4 text-justify">
        Vous souhaitez célébrer votre union et immortaliser ce moment avec vos proches ?<br />
        Comptez donc sur moi pour vous proposer les plus belles photos de cet instant inoubliable.
    </p>
</div>
}
