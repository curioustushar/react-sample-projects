import React, { useState } from 'react';

function App() {
  let slides = [
    { path: 'img-1.jpeg', className: 'slide-img' },
    { path: '', className: 'slide-img' },
    { path: 'img-2.jpeg', className: 'slide-img' },
    { path: 'person-1.jpeg', className: 'person-img', name: 'susan doe' }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };
  return (
    <div className="App">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            className="slide"
            key={index}
            style={{
              left: `${index * 100}%`,
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {slide.path && (
              <img
                src={`${process.env.PUBLIC_URL}/${slide.path}`}
                className={slide.className}
                alt=""
              />
            )}
            {slide.name && <h4>{slide.name}</h4>}
            <h1>{index + 1}</h1>
          </div>
        ))}
      </div>
      <div className="btn-container">
        {currentSlide > 0 && (
          <button type="button" className="prevBtn" onClick={prevSlide}>
            prev
          </button>
        )}
        {currentSlide < slides.length - 1 && (
          <button type="button" className="nextBtn" onClick={nextSlide}>
            next
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
