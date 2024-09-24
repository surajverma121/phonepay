import React, { useEffect, useState } from 'react';

// Example of importing local images (you can also put images in 'public' folder and use the path)
import image1 from '../img/p1.jpeg';
import image2 from '../img/p2.jpeg';
import image3 from'../img/p3.jpeg';

const Carousel = () => {
  const images = [
    {
      src: image1, // Local image import
      text: 'Amazing Deals'
    },
    {
      src: image2,
      text: 'Latest Products'
    },
    {
      src: image3,
      text: 'Best Offers'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-72 md:h-96 overflow-hidden lg:h-120">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.text}
            className="w-full h-full  object-center"
          />
          
        </div>
      ))}
    </div>
  );
};

export default Carousel;