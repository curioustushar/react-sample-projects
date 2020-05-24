import React, { useState } from 'react';

function App() {
  const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

  const [color, setColor] = useState('#f1f5f8');

  const changeColor = () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    setColor(colors[randomNumber]);
  };

  const setHexColor = () => {
    const hexColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(hexColor);
  };

  return (
    <div className="App">
      <main style={{ backgroundColor: color }}>
        <div className="container">
          <h2>
            background color : <span className="color">{color}</span>
          </h2>
          <button className="btn btn-hero" onClick={changeColor}>
            Change Color
          </button>
          <button className="btn btn-hero" onClick={setHexColor}>
            Set Hex Color
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
