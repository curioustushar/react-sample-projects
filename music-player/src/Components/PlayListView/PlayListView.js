import React from 'react';
import { useAppContext } from '../../AppContextProvider';
import './PlayListView.css';

export const PlayListView = ({ album, currentSong, isSongPlaying }) => {
  const { dispatch } = useAppContext();
  return (
    <div className="player-back">
      <div className="play-list">
        <ul>
          {album.map((song, index) => (
            <li
              key={index}
              className={
                currentSong.name === song.name && isSongPlaying
                  ? 'song-item active'
                  : 'song-item'
              }
              onClick={() => dispatch({ type: 'setCurrentSong', currentSong })}
            >
              <div className="info">
                <p className="song-title">{song.name}</p>
                <p className="artist">{song.artist}</p>
              </div>
              <div className="status">
                {currentSong.name === song.name && isSongPlaying && (
                  <i className="fa fa-signal" title="Playing"></i>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
