import React, { useState } from 'react';
import { useAppContext } from '../../AppContextProvider';
import { AudioPlayer } from '../AudioPlayer';
import './Tracker.css';

export const Tracker = () => {
  const { state } = useAppContext();
  const [tracker, setTrack] = useState({ currentTime: 0, defaultTime: 0 });

  const onTimeUpdateHandler = (e) => {
    const songDuration = parseFloat(e.trackDuration / 60).toFixed(2);
    const currentTime = parseFloat(e.currentTime / 60).toFixed(2);
    const w = (e.currentTime / e.trackDuration) * 100;
    const progress = parseInt(w);
    setTrack({ songDuration, currentTime, progress });
  };

  const updateProgress = ($event) => {
    var d = Number(tracker.songDuration || 0);
    const w = (tracker.currentTime / tracker.songDuration) * 100;
    var s = Math.round(($event.pageX / w) * d) || 0;
    setTrack({ ...tracker, defaultTime: s });
  };

  return (
    <div className="tracker clearfix">
      <AudioPlayer
        currentSongName={state.currentSong.name}
        isPlaying={state.isSongPlaying}
        onTimeUpdate={onTimeUpdateHandler}
        defaultTime={tracker.defaultTime}
        onEnd={(e) => console.log('onEnd', e)}
      />
      <div className="trackTimes clearfix">
        {tracker.currentTime !== 0 && (
          <span className="currentTime">{tracker.currentTime}</span>
        )}
        {tracker.songDuration !== 0 && (
          <span className="duration">{tracker.songDuration}</span>
        )}
      </div>
      <div
        className="progressbar"
        title={tracker.currentTime}
        onClick={updateProgress}
      >
        <span
          id="progress"
          className="progress"
          style={{ width: `${tracker.progress}%` }}
        ></span>
      </div>
    </div>
  );
};
