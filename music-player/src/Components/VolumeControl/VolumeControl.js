import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../AppContextProvider';
import './VolumeControl.css';
let timeoutHandle;
export const VolumeControl = () => {
  const { state, dispatch } = useAppContext();

  const setVolume = (e = 0.0) => {
    let icon = state.volumeIcon;
    let playerVolume = Number(e);
    if (playerVolume === 0.0) {
      icon = 'fa-volume-off';
    } else if (playerVolume > 0.2 && playerVolume < 0.6) {
      icon = 'fa-volume-down';
    } else if (playerVolume > 0.6) {
      icon = 'fa-volume-up';
    }
    if (state.playerVolume !== playerVolume) {
      setTimeout(() => {
        dispatch({
          type: 'setVolume',
          payload: { playerVolume, volumeIcon: icon },
        });
      }, 0);
    }
  };

  const onMouseEnter = (e) => {
    clearTimeout(timeoutHandle);
  };

  const onMouseLeave = (e) => {
    dispatch({
      type: 'showVolumeControl',
      payload: { isVolumeControl: !state.isVolumeControl },
    });
  };

  useEffect(() => {
    setVolume(state.playerVolume);
    timeoutHandle = setTimeout(() => {
      dispatch({
        type: 'showVolumeControl',
        payload: { isVolumeControl: !state.isVolumeControl },
      });
    }, 2500);
    return () => {};
  }, [state.playerVolume]);

  return (
    <div
      className="volumeControl"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <i className={`fas ${state.volumeIcon}`}></i>
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
