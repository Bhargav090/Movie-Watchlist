import React from 'react';
import './auth.css';
import image1 from '../images/RRR.jpg';
import image2 from '../images/Kalki2898AD2.jpeg';
import image3 from '../images/animal.jpg';
import image4 from '../images/deadpool.jpg';
import image5 from '../images/kantara.jpg';
import image6 from '../images/raayan.jpeg';
import image7 from '../images/salaar.jpeg';

const images = [image1, image2, image3, image4, image5, image6, image7];

const Background = () => {
  return (
    <div className="background-slideshow">
      {images.map((image, index) => (
        <div
          key={index}
          className="bg-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default Background;
