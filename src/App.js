import React, { useState } from 'react';
import Modal from './Modal';
import Data from './Data.json';
import Carousel from './Carousel';

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [galeryOpen, setGaleryOpen] = useState(0)
 
  function whichGalery(i) {
    setGaleryOpen(i);
    setIsOpen(true);
  }

  const COVER_IMAGE_HOME = {
    width: 'auto',
    height: '250px',
    margin: '15px'
  }

  return (
    <div>
      <div>
        {/* list all the images from the API and use as a thumbnail to open the carousel(s) as a modal for aech */}
        {Data.map((cover, i) => (
          <img style={COVER_IMAGE_HOME} src={cover.galleryImages[0].image.source} alt="alt" onClick={() => whichGalery(i)} key={cover.galleryImages[0].image.alt+i}/>
        ))}
        
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <Carousel number={galeryOpen} onClose={() => setIsOpen(false)} />
        </Modal>
      </div>
    </div>
  );
}
