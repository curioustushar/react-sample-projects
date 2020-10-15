import React from 'react';
import { useAppContext } from '../../AppContextProvider';
import './Header.css';

export const Header = ({ currentView, Heading, goBack, showPlayList }) => {
  const { state, dispatch } = useAppContext();

  return (
    <div className="top-nav">
      {state.currentView !== 'musicPlayer' && (
        <label
          title="back"
          onClick={() =>
            dispatch({
              type: 'setCurrentView',
              payload: { currentView: 'musicPlayer' },
            })
          }
        >
          <i className="fas fa-long-arrow-alt-left"></i>
        </label>
      )}
      <span className="title">{Heading}</span>
      {state.currentView === 'musicPlayer' && (
        <label
          title="Play List"
          className="list-songs"
          onClick={() =>
            dispatch({
              type: 'setCurrentView',
              payload: { currentView: 'PlayList' },
            })
          }
        >
          <i className="fas fa-list"></i>
        </label>
      )}
    </div>
  );
};
