import React, { useState } from 'react';
import { reviews } from './data';

function App() {
  const [currentItemIndex, setCurrentIndex] = useState(0);
  const currentReview = reviews[currentItemIndex];

  const previousReview = () => {
    let currentIndex = currentItemIndex - 1;
    if (currentIndex < 0) {
      currentIndex = reviews.length - 1;
    }
    setCurrentIndex(currentIndex);
  };
  const nextReview = () => {
    let currentIndex = currentItemIndex + 1;
    if (currentIndex > reviews.length - 1) {
      currentIndex = 0;
    }
    setCurrentIndex(currentIndex);
  };
  const randomReview = () => {
    const idx = Math.floor(Math.random() * reviews.length);
    setCurrentIndex(idx);
  };

  return (
    <div className="App">
      <main>
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>

          <article className="review">
            <div className="img-container">
              <img src={currentReview.img} id="person-img" alt="" />
            </div>
            <h4 id="author">{currentReview.name}</h4>
            <p id="job">{currentReview.job}</p>
            <p id="info">{currentReview.text}</p>
            <div className="button-container">
              <button
                className="prev-btn"
                onClick={previousReview}
                title="left"
              >
                &#x2039;
              </button>
              <button className="next-btn" onClick={nextReview} title="right">
                &#x203A;
              </button>
            </div>
            <button className="random-btn" onClick={randomReview}>
              surprise me
            </button>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
