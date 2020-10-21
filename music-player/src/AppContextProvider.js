import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();
const cover = 'assets/images/covers/RaceGurramFront.jpg';
const appState = {
  playList: [],
  currentSong: {},
  isSongPlaying: false,
  cover,
  currentView: 'musicPlayer',
  playerVolume: 0.4,
  isVolumeControl: false,
  volumeIcon: 'fa-volume-down',
  action: '',
};
const getRandomIndex = (songs = []) => {
  var index = parseInt(Math.random() * 10);
  if (index >= 0 && index < songs.length) {
    return index;
  } else {
    getRandomIndex(songs);
  }
};

function playerReducer(state, action) {
  switch (action.type) {
    case 'play': {
      return { ...state, isSongPlaying: true, action: action.type };
    }
    case 'pause': {
      return { ...state, isSongPlaying: false, action: action.type };
    }
    case 'previous': {
      const idx = state.playList.findIndex(
        (s) => s.name === state.currentSong.name,
      );
      let currentSong = {};
      if (idx <= 0) {
        currentSong = state.playList[state.playList.length - 1];
      } else {
        currentSong =
          idx > 0 && idx <= state.playList.length - 1
            ? state.playList[idx - 1]
            : state.currentSong;
      }
      return { ...state, currentSong: { ...currentSong, cover } };
    }
    case 'next': {
      let currentSong = {};
      let idx = state.playList.findIndex(
        (s) => s.name === state.currentSong.name,
      );

      if (state.loopSongs !== 'This') {
        idx = idx + 1; //index || idx + 1;
      }
      if (state.loopSongs === 'Loop') {
        currentSong = state.playList[idx];
      } else if (idx < state.playList.length - 1) {
        currentSong = state.playList[idx];
      } else {
        currentSong = state.playList[0];
      }
      return { ...state, currentSong: { ...currentSong, cover } };
    }
    case 'random': {
      const index = getRandomIndex(state.playList) || 0;
      return { ...state, currentSong: { ...state.playList[index], cover } };
    }
    case 'setSongs': {
      const playList = action.payload;
      return { ...state, playList };
    }
    case 'setCurrentSong': {
      const currentSong = action.payload;
      return { ...state, currentSong: { ...currentSong, cover } };
    }
    case 'setCurrentView': {
      const { currentView } = action.payload;
      return { ...state, currentView };
    }
    case 'playSong': {
      const { song } = action.payload;
      return {
        ...state,
        currentView: 'musicPlayer',
        currentSong: { ...song, cover },
        isSongPlaying: false,
      };
    }
    case 'setVolume': {
      const { playerVolume, volumeIcon } = action.payload;

      return {
        ...state,
        playerVolume,
        volumeIcon,
      };
    }
    case 'showVolumeControl': {
      const { isVolumeControl } = action.payload;
      return { ...state, isVolumeControl };
    }
    case 'setLoopSongs': {
      let loopSongs;
      if (state.loopSongs === 'Once') {
        loopSongs = 'Loop';
      } else if (state.loopSongs === 'Loop') {
        loopSongs = 'This';
      } else if (state.loopSongs === 'This') {
        loopSongs = 'Once';
      }
      return { ...state, loopSongs };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(playerReducer, appState);
  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
}

export { AppContextProvider, AppContext, useAppContext };
