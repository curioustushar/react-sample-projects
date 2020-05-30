import React, { useState, useEffect } from 'react';
import useIntervel from './hooks/useIntervel';
import './App.css';

function App() {
  const [ration, setRotation] = useState({ seconds: 0, minutes: 0, hours: 0 });

  function setClock() {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds() * 6; // per second move 6 deg
    const minutes = currentDate.getMinutes() * 6; // per minute move 6 deg
    // getHours will give in 24 hours mod 12 and then move 30 deg
    const hours = (currentDate.getHours() % 12) * 30;
    setRotation({ seconds, minutes, hours });
  }
  useIntervel(() => setClock(), 1000);
  useEffect(() => {
    setClock();
    return () => {};
  }, []);

  return (
    <div className="App">
      <div className="clock">
        <div
          className="hand hour"
          style={{
            transform: `translateX(-50%) rotate(${ration.hours}deg)`
          }}
        ></div>
        <div
          className="hand minute"
          style={{
            transform: `translateX(-50%) rotate(${ration.minutes}deg)`
          }}
        ></div>
        <div
          className="hand second"
          style={{
            transform: `translateX(-50%) rotate(${ration.seconds}deg)`
          }}
        ></div>

        {Array.from(Array(12)).map((_, index) => (
          <div key={index} className={`number number${index + 1}`}>
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
