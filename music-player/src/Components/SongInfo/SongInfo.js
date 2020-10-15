import React from 'react';
import { useAppContext } from '../../AppContextProvider';
import './SongInfo.css';

export const SongInfo = ({ currentSong }) => {
  const { state, dispatch } = useAppContext();
  return (
    <div className="album-info clearfix">
      {currentSong && (
        <div className="grid w90p">
          <span className="song-title">{currentSong.name}</span>
          <br />
          <small className="artist">{currentSong.artist}</small>
        </div>
      )}
      <div className="grid w10p loop-songs">
        <a
          href="#"
          title="Album"
          className={state.loopSongs !== 'Once' ? 'active' : ''}
          onClick={() => dispatch({ type: 'setLoopSongs' })}
        >
          <i className="fas fa-sync-alt"></i>
        </a>
        {state.loopSongs === 'This' && <small>1</small>}
      </div>
    </div>
  );
};
