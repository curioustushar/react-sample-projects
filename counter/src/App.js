import React, { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('black');

  useEffect(() => {
    let newColor = 'black';
    if (counter > 0) newColor = 'green';
    else if (counter < 0) newColor = 'red';
    return setColor(newColor);
  }, [counter]);

  return (
    <div className="App">
      <main>
        <div className="container">
          <h1>counter</h1>
          <span id="value" style={{ color: color }}> {counter}</span>
          <div className="button-container">
            <button className="btn decrease" onClick={() => setCounter(counter - 1)}>decrease</button>
            <button className="btn reset" onClick={() => setCounter(0)}>reset</button>
            <button className="btn increase" onClick={() => setCounter(counter + 1)}>increase</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
