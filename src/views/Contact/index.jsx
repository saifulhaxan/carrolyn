import React from 'react'
import LayoutTheme from '../Layout';
import { SubHeader } from '../../components/SubHeader';
import dogBanner from '/images/gallery-dog2.png'
import { Contact } from '../../components/Contact';

export const ContactUs = () => {
  return (
    <LayoutTheme>
      <SubHeader
        name="Contact Us"
        img={dogBanner}
      />

      <div className='ContactPage'>
        <Contact 
          showImage="false"
        />
      </div>
    </LayoutTheme>
  )
}
