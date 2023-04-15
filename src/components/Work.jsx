import React, { useState } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['./carousel.png', './image2.png', './image3.png'];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
   
  };

  return (
    <div>
      <div className="content text-[#fefefe] m-5 md:mt-20 md:px-[10%]">
        <h1 className="text-3xl font-bold py-10 pb-5 md:text-[48px]">Our Awesome Portfolio</h1>
        <img className="ml-[90%] w-[34px]" src="./Circles.png" alt="circles" />

        <div className="works py-5 m-auto ">
          <div className="images mx-14 md:flex md:gap-20 md:mx-0 ">
            {/* Display all images on larger screen */}
            {images.map((image, index) => (
              <img
                key={index}
                className={`md:block ${currentIndex === index ? '' : 'hidden'}`}
                src={image}
                alt={`carousel-${index}`}
              />
            ))}
            {/* Display only one image on mobile screen */}
            <img className=" hidden " src={images[currentIndex]} alt={`carousel-${currentIndex}`} />
          </div>
          <div className="controllers flex mt-10 justify-center gap-3 md:hidden">
            <div className={`prev p-2 ${currentIndex === 0 ? 'bg-gray-300' : 'bg-[#fefefe] opacity-20'} rounded-[50px]`} onClick={handlePrevClick}>
              <GrFormPrevious size={'20px'} />
            </div>
            <div className={`next p-2 ${currentIndex === images.length - 1 ? 'bg-gray-300' : 'bg-[#5454D4]'} rounded-[50px]`} onClick={handleNextClick}>
              <GrFormNext className="icon-color text-[20px]" />
            </div>
          </div>
        </div>

        <img className="w-[34px] mt-10" src="./Vector.png" alt="vector" />
      </div>
    </div>
  );
};

export default Work;
