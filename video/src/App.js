import React, { useState } from 'react';
import preloader from './preloader.gif';
import video from './video.mp4';

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoRef, setVideoRef] = useState(null);

  const togglePlaying = () => {
    if (isPlaying) {
      videoRef.pause();
    } else {
      videoRef.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <div className={videoRef ? 'preloader hide-preloader' : 'preloader'}>
        <img src={preloader} alt="preloader" className="preloader__item" />
      </div>
      <header>
        <video
          muted
          autoPlay
          loop
          className="video-container"
          ref={(video) => setVideoRef(video)}
        >
          <source src={video} type="video/mp4" />
        </video>
        <h1>video project</h1>
        <button
          className={isPlaying ? 'switch-btn slide' : 'switch-btn'}
          onClick={togglePlaying}
        >
          <span>play</span>
          <span>pause</span>
          <span className="switch"></span>
        </button>
      </header>
    </div>
  );
}

export default App;
