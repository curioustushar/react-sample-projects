import React, { useState, useEffect, useRef } from 'react';
import { Header } from './Components/Header/Header';
import { Tracker } from './Components/Tracker/Tracker';
import { SongInfo } from './Components/SongInfo/SongInfo';
import { VolumeControl } from './Components/VolumeControl/VolumeControl';

import { PlayerActions } from './Components/PlayerActions/PlayerActions';
import { PlayListView } from './Components/PlayListView/PlayListView';
import { getSongInfo } from './musicService';
import { useAppContext } from './AppContextProvider';
import { cover, playlistsongs } from './config';
import './App.css';

function App() {
  const playList = useRef([]);
  const { state, dispatch } = useAppContext();
  const [navHeading, setHeading] = useState('');

  useEffect(() => {
    if (document.querySelector('#id3')) {
      dispatch({ type: 'setSongs', payload: playList?.current });
      return;
    }
    const script = document.createElement('script');
    script.src = '/assets/id3-minimized.js';
    script.id = 'id3';
    script.onload = () => {
      getSongInfo(playlistsongs).then((songs) => {
        playList.current = songs;
        dispatch({ type: 'setSongs', payload: songs });

        if (songs && songs.length > 0) {
          if (!navHeading) setHeading(songs[0].album);
          if (Object.keys(state.currentSong).length === 0) {
            dispatch({
              type: 'setCurrentSong',
              payload: {
                ...songs[0],
                cover,
              },
            });
          }
        }
      });
    };
    document.body.appendChild(script);

    return () => {};
  }, [playList?.current]);
  return (
    <div className="container">
      <div className="music-player">
        <Header Heading={navHeading} currentView={state.currentView} />
        {state.currentView === 'musicPlayer' && (
          <div className="album-cover">
            <img
              src={state.currentSong.cover}
              alt={state.currentSong.name}
              id="cover"
            />
            <Tracker />
            <SongInfo currentSong={state.currentSong} />
            <PlayerActions />
            {state.isVolumeControl && <VolumeControl />}
          </div>
        )}
        {state.currentView === 'PlayList' && (
          <PlayListView
            album={playList.current}
            currentSong={state.currentSong}
            isSongPlaying={state.isSongPlaying}
          />
        )}
      </div>
    </div>
  );
}

export default App;
