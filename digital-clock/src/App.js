import React, { useState, useEffect } from 'react';
import clockUtils from './utils/clock';
import useInterval from './hooks/useInterval';

function App() {
  const [clockInfo, setClockInfo] = useState({});

  const chnageDateFormat = () => {
    let index = clockInfo.currentIndex + 1 || 0;
    if (index === clockUtils.maxFormats) index = 0;
    return index;
  }

  const setClockDetails = () => {
    const index = chnageDateFormat();
    return {
      style: {
        color: clockUtils.getRandomColor(),
        background: clockUtils.getRandomDarkColor()
      },
      info: clockUtils.getRandomClockFormat(index),
      currentIndex: index,
    };
  };

  const refreshTime = () => {
    return {
      style: clockInfo.style,
      info: clockUtils.getRandomClockFormat(clockInfo.currentIndex),
      currentIndex: clockInfo.currentIndex,
    };
  }

  function ChangeHandler() { setClockInfo(setClockDetails()); };

  useEffect(() => ChangeHandler(), []);

  useInterval(() => setClockInfo(refreshTime()), 1000);

  return (
    <div className="App">
      <p id="instruction">Click on clock to change formats</p>
      <div className="outer">
        <div className="inner">
        <div className="clock-dial" style={clockInfo.style} onClick={() => ChangeHandler()}>
          <span className="time unselectable" >{clockInfo.info}</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
