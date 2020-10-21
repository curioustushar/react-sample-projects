import React, { useState, useEffect, useRef } from 'react';
import { Header } from './Components/Header/Header';

import { PlayListView } from './Components/PlayListView/PlayListView';
import { getSongInfo, loadScriptFile } from './musicService';
import { useAppContext } from './AppContextProvider';
import { cover, playlistsongs } from './config';
import { PlayerView } from './Components/PlayerView/PlayerView';
import './App.css';

function App() {
  const playList = useRef([]);
  const { state, dispatch } = useAppContext();
  const [navHeading, setHeading] = useState('');

  const setData = (songs) => {
    if (!songs || songs.length === 0) return;
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
  };

  useEffect(() => {
    if (document.querySelector('#id3')) {
      dispatch({ type: 'setSongs', payload: playList?.current });
      return;
    }

    loadScriptFile().then(() => {
      getSongInfo(playlistsongs).then((songs) => {
        playList.current = songs;
        dispatch({ type: 'setSongs', payload: songs });
        setData(songs);
      });
    });

    return () => {};
  }, [playList?.current]);

  return (
    <div className="container">
      <div className="music-player">
        <Header Heading={navHeading} />
        <PlayerView
          className={state.currentView === 'musicPlayer' ? '' : 'hide'}
          cover={state.currentSong.cover}
          name={state.currentSong.name}
          isVolumeControl={state.isVolumeControl}
        />
        <PlayListView
          className={state.currentView === 'PlayList' ? '' : 'hide'}
          album={playList.current}
          currentSong={state.currentSong}
          isSongPlaying={state.isSongPlaying}
        />
      </div>
    </div>
  );
}

export default App;
