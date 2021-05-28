import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Carousel from './Carousel';
// CURRENT DATA SOURCE
import Data from './Data.json';


export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [galeryOpen, setGaleryOpen] = useState(0)
  const [imageData, setImageData] = useState(Data)

  useEffect(() => {
      fetchImageCollection();
  }, []);

  const fetchImageCollection = async () => {
     await fetch(`http://dk-frontend-test.s3-eu-west-1.amazonaws.com/index.json`)
      .then(response => response.json)
      .then(data => setImageData(data))
      .catch(error => { console.error("There is a "+error); });
  };

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
        {imageData.map((cover, i) => (
          <img style={COVER_IMAGE_HOME} src={cover.galleryImages[0].image.source} alt="alt" onClick={() => whichGalery(i)} key={cover.galleryImages[0].image.alt+i}/>
        ))}
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <Carousel imageData={imageData} number={galeryOpen} onClose={() => setIsOpen(false)} />
        </Modal>
      </div>
    </div>
  );
}
