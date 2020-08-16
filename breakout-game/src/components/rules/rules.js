import React, { useState } from 'react';
import './rules.css';

const Rules = () => {
  const [state, setState] = useState('');
  return (
    <>
      <h1>Breakout!</h1>
      <button
        id="rules-btn"
        className="btn rules-btn"
        onClick={(e) => setState('show')}
      >
        Show Rules
      </button>
      <div className={`rules ${state}`} onClick={(e) => setState('')}>
        <h2>How To Play:</h2>
        <p>
          Use your right and left keys to move the paddle to bounce the ball up
          and break the blocks.
        </p>
        <p>If you miss the ball, your score and the blocks will reset.</p>
        <button id="close-btn" className="btn" onClick={(e) => setState('')}>
          Close
        </button>
      </div>
    </>
  );
};

export default Rules;
