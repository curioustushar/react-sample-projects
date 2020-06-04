import React, { useState, useEffect, useRef } from 'react';
import useInterval from './hooks/useIntervel';
import bgImg from './bg.jpg';
import muteImg from './mute.png';
import speakerImg from './speaker.png';

function App() {
  const [text, setText] = useState('');
  const [containerClass, setContainerClass] = useState('');
  const [isMute, setisMute] = useState(false);
  const utterranceRef = useRef(null);

  const totalTime = 7500;
  const breatheTime = (totalTime / 5) * 2;
  const holdTime = totalTime / 5;

  const speak = (voiceText) => {
    if (utterranceRef && !isMute) {
      utterranceRef.current.text = voiceText;
      window.speechSynthesis.speak(utterranceRef.current);
    }
  };

  if (isMute) {
    window.speechSynthesis.cancel();
  }

  const breathAnimation = () => {
    if (window.speechSynthesis.paused || window.speechSynthesis.speaking) {
      window.speechSynthesis.resume();
    }
    setContainerClass('grow');
    speak('Breathe In!');
    setText('Breathe In!');
    setTimeout(() => {
      setText('Hold');
      speak('Hold');
      setTimeout(() => {
        speak('Breathe Out!');
        setText('Breathe Out!');
        setContainerClass('shrink');
      }, holdTime);
    }, breatheTime);
  };

  useEffect(() => {
    if (window.speechSynthesis) {
      utterranceRef.current = new SpeechSynthesisUtterance();
      utterranceRef.current.rate = 1;
      utterranceRef.current.pitch = 0.5;
      setisMute(true);
    }
    breathAnimation();
    return () => {
      if (utterranceRef) window.speechSynthesis.cancel();
    };
  }, []);

  useInterval(() => breathAnimation(), totalTime);

  return (
    <div className="App" style={{ backgroundImage: `url(${bgImg})` }}>
      <h1>Relaxer</h1>
      <img
        src={isMute ? muteImg : speakerImg}
        alt="icon"
        className="speak"
        onClick={(e) => setisMute(!isMute)}
      />
      <div className={`container ${containerClass}`} id="container">
        <div className="circle"></div>

        <p id="text">{text}</p>

        <div className="pointer-container">
          <span className="pointer"></span>
        </div>

        <div className="gradient-circle"></div>
      </div>
    </div>
  );
}

export default App;
