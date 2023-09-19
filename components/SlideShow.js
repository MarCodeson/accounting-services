import React, { useState } from 'react';

const Slideshow = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === children.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? children.length - 1 : prevSlide - 1));
  };

  return (
    <div className="slideshow">
      {children[currentSlide]}
      <button onClick={prevSlide} className="prev-button">
        Prev
      </button>
      <button onClick={nextSlide} className="next-button">
        Next
      </button>
    </div>
  );
};

export default Slideshow;
