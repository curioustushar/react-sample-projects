import React from 'react';
import './rules.css';

const Rules = () => {
  return (
    <div>
      <h1>Breakout!</h1>
      <button
        id="rules-btn"
        className="btn rules-btn"
        onClick={(e) => e.target.nextSibling.classList.add('show')}
      >
        Show Rules
      </button>
      <div
        id="rules"
        className="rules"
        onClick={(e) => e.target.classList.remove('show')}
      >
        <h2>How To Play:</h2>
        <p>
          Use your right and left keys to move the paddle to bounce the ball up
          and break the blocks.
        </p>
        <p>If you miss the ball, your score and the blocks will reset.</p>
        <button
          id="close-btn"
          className="btn"
          onClick={(e) => e.target.parentElement.classList.remove('show')}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Rules;
