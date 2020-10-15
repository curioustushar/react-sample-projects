import React, { useState } from 'react';
import { useAppContext } from '../../AppContextProvider';
import './VolumeControl.css';

export const VolumeControl = () => {
  const { state, dispatch } = useAppContext();
  const [volumeIcon, setValueIcon] = useState('fa-volume-down');

  const setVolume = (e = 0.0) => {
    let playerVolume = Number(e);
    if (playerVolume === 0.0) {
      setValueIcon('fa-volume-off');
    } else if (playerVolume > 0.2 && playerVolume < 0.6) {
      setValueIcon('fa-volume-down');
    } else if (playerVolume > 0.6) {
      setValueIcon('fa-volume-up');
    }
    dispatch({ type: 'setVolume', payload: { playerVolume } });
  };

  setVolume(state.playerVolume);

  return (
    <div className="volumeControl">
      <i className={`fas ${volumeIcon}`}></i>
      <input
        type="range"
        name="volume"
        min="0.0"
        max="1.0"
        step="0.1"
        className="volume"
        value={state.playerVolume}
        onChange={(e) => setVolume(e.target.value)}
      />
    </div>
  );
};
