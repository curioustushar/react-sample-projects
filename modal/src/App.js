import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [toggleModal, setToggleModel] = useState(false);
  const [toggleClass, setToggleClass] = useState('');

  const toggleModalFn = () => setToggleModel(!toggleModal);

  useEffect(() => {
    setToggleClass(toggleModal ? 'open-modal' : '');
  }, [toggleModal])

  return (
    <div className="App">
      <header className="hero">
        <div className="banner">
          <h1>modal project</h1>
          <button className="btn modal-btn" onClick={toggleModalFn}>
            open modal
        </button>
        </div>
      </header>
      <div className={`modal-overlay ${toggleClass}`}>
        <div className="modal-container">
          <h3>modal content</h3>
          <button className="close-btn" onClick={toggleModalFn}><i className="fas fa-times"></i></button>
        </div>
      </div>
    </div>
  );
}

export default App;
