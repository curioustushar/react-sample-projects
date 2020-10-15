import React from 'react';
import { useAppContext } from '../../AppContextProvider';
import './PlayerActions.css';

export const PlayerActions = () => {
  const { state, dispatch } = useAppContext();
  return (
    <div className="player-actions">
      <div className="player-controls clearfix">
        <a
          href="#"
          title="Volume"
          onClick={() =>
            dispatch({
              type: 'showVolumeControl',
              payload: { isVolumeControl: !state.isVolumeControl },
            })
          }
        >
          <i className="fa fa-volume-up"></i>
        </a>
        <a
          href="#"
          className="play-buttons"
          onClick={() => dispatch({ type: 'previous' })}
          title="Previous"
        >
          <i className="fa fa-backward"></i>
        </a>
        {state.isSongPlaying ? (
          <a
            href="#"
            className="play-buttons play"
            onClick={() => dispatch({ type: 'pause' })}
            title="Pause"
          >
            <i className="fa fa-pause"></i>
          </a>
        ) : (
          <a
            href="#"
            className="play-buttons play"
            onClick={() => dispatch({ type: 'play' })}
            title="Play"
          >
            <i className="fa fa-play"></i>
          </a>
        )}

        <a
          href="#"
          className="play-buttons"
          onClick={() => dispatch({ type: 'next' })}
          title="Next"
        >
          <i className="fa fa-forward"></i>
        </a>
        <a
          href="#"
          title="Shuffle"
          className={state.isRandomSongs ? 'active' : ''}
          onClick={() => dispatch({ type: 'random' })}
        >
          <i className="fa fa-random"></i>
        </a>
      </div>
    </div>
  );
};
