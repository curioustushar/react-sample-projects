import React from 'react';
import { useAppContext } from '../../AppContextProvider';
import './PlayListView.css';

export const PlayListView = ({
  album,
  currentSong,
  isSongPlaying,
  className,
}) => {
  const { dispatch } = useAppContext();
  const playSelectedSong = (song) => {
    dispatch({ type: 'playSong', payload: { song } });
  };
  return (
    <div className={`${className} player-back`}>
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
              onClick={() => playSelectedSong(song)}
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
