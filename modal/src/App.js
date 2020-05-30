import React, { useState } from 'react';

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalHandler = () => setToggleModal(!toggleModal);

  return (
    <div className="App">
      <header className="hero">
        <div className="banner">
          <h1>modal project</h1>
          <button className="btn modal-btn" onClick={toggleModalHandler}>
            open modal
        </button>
        </div>
      </header>
      <div className={`modal-overlay ${(toggleModal ? 'open-modal' : '')}`}>
        <div className="modal-container">
          <h3>modal content</h3>
          <button className="close-btn" onClick={toggleModalHandler}><i className="fas fa-times"></i></button>
        </div>
      </div>
    </div>
  );
}

export default App;
