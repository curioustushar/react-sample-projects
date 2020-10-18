import React from 'react';
import { useAppContext } from '../../AppContextProvider';
import './SongInfo.css';

export const SongInfo = () => {
  const { state, dispatch } = useAppContext();
  return (
    <div className="album-info">
      {state.currentSong && (
        <div className="">
          <p className="song-title">{state.currentSong.name}</p>
          <p className="artist">{state.currentSong.artist}</p>
        </div>
      )}
      <div className="loop-songs">
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
