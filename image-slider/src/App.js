import React, { useRef, useState } from 'react';

function App() {
  const images = [
    `${process.env.PUBLIC_URL}/images/shoe1.jpg`,
    `${process.env.PUBLIC_URL}/images/shoe2.jpg`,
    `${process.env.PUBLIC_URL}/images/shoe3.jpg`,
    `${process.env.PUBLIC_URL}/images/preset1.png`,
    `${process.env.PUBLIC_URL}/images/preset4.jpg`,
    `${process.env.PUBLIC_URL}/images/preset5.jpg`,
    `${process.env.PUBLIC_URL}/images/preset8.jpg`
  ];

  const [selctedImage, setSelectedImage] = useState(images[0]);
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 180;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 180;
  };

  const onSelectImage = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className="App">
      <div id="content-wrapper">
        <div className="column">
          <img id="featured" src={selctedImage} alt="bg img" />

          <div id="slide-wrapper">
            <img
              id="slideLeft"
              className="arrow"
              onClick={slideLeft}
              src={`${process.env.PUBLIC_URL}/images/arrow-left.png`}
              alt="arrow-left"
            />

            <div id="slider" ref={sliderRef}>
              {images.map((img, index) => (
                <img
                  key={index}
                  className={`thumbnail ${
                    selctedImage === img ? 'active' : ''
                    }`}
                  onClick={(e) => onSelectImage(img)}
                  src={img}
                  alt="img"
                />
              ))}
            </div>

            <img
              id="slideRight"
              className="arrow"
              onClick={slideRight}
              src={`${process.env.PUBLIC_URL}/images/arrow-right.png`}
              alt="arrow-right"
            />
          </div>
        </div>

        <div className="column">
          <h1>Awesome Shoes</h1>
          <hr />
          <h3>$89.99</h3>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <input defaultValue="1" type="number" min="1" />
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
