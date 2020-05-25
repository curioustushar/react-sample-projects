import React, { useState } from 'react';
import SideBar from './components/sidebar/sideBar';
import logo from './logo.svg';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button className="sidebar-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </button>

      <SideBar onMenuToggle={toggleMenu} isOpen={isOpen} />

      <main>
        <div style={{ textAlign: 'center' }}>
          <img src={logo} alt="logo" height="150px" />
          <button className="btn" onClick={toggleMenu}>
            Toggle Menu
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
