import React from 'react'
import LayoutTheme from '../Layout'
import { SubHeader } from '../../components/SubHeader'
import dogBanner from '../../assets/images/contact-dog.png'
import { Gallery } from '../../components/Gallery'

const GalleryImages = ['gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-5.png', 'gallery-4.png', 'gallery-6.png', 'gallery-1.png', 'gallery-2.png', 'gallery-3.png', 'gallery-4.png', 'gallery-5.png', 'gallery-6.png']

export const GalleryPage = () => {
  return (
    <LayoutTheme>

      <SubHeader
        name="Gallery"
        img={dogBanner}
      />

       <Gallery
          containerClass="GalleryPage"
          innerContainer="Gallery_gallerypage"
          firstClass="dog_img_1"
          title="Our Gallery"
          description="Welcome to our Gallery, where we showcase the captivating world of dogs through stunning visuals. Discover heartwarming moments, playful antics, and the undeniable charm of our furry companions. Enjoy the adorable canines that grace our collection."
          galleryClass="grid"
          GalleryData={GalleryImages}

        />
    </LayoutTheme>
  )
}
