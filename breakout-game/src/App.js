import React from 'react';
import './App.css';
import Game from './components/breakoutGame/game';
import Rules from './components/rules/rules';

function App() {
  return (
    <div className="App">
      <Rules />
      <Game />
    </div>
  );
}

export default App;
