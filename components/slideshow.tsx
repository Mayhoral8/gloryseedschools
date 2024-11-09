"use client"
import { StaticImageData } from 'next/image';
import  Image  from 'next/image';
import React, { useState, useEffect, ReactNode } from 'react';
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import { MdCircle } from "react-icons/md";

type Props = {  
  images: StaticImageData[]
  interval: number
  innerElement?: ReactNode
}
const Slideshow: React.FC<Props>  = ({ images, interval = 3000, innerElement }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every few seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, interval);
    
    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, [currentIndex, interval]);

  // Function to go to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-full ">
     <div className="relative w-full h-full ">
      <div
        className="flex top-0 bottom-0 -z-10 inset-0 w-full h-full bg-cover bg-center rounded-sm "
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
          backgroundSize: 'cover'
        }}
      >
         {innerElement && innerElement}
      </div>
    </div>
      <div className="hidden lg:flex  flex-row gap-x-2 w-full justify-center ">
        {images.map((_: StaticImageData, index: number) => (
          <span
            key={index}
            className=""
            onClick={() => setCurrentIndex(index)}
          >{currentIndex === index ? <MdCircle className='text-[#ECD337] cursor-pointer '/> : <FaRegCircle className='cursor-pointer'/>}</span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
