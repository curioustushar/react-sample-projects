import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Nav from './Components/Navbar/Nav.js';
import Results from './Components/Results/Results.js';
import { AppProvider } from './AppContext';

function App() {
  return (
    <AppProvider>
      <div className="app">
        <Header />
        <Nav />
        <Results />
      </div>
    </AppProvider>
  );
}

export default App;
