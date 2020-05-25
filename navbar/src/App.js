import React, { useState, useEffect } from 'react';

function App() {
  const [toggle, setToggle] = useState(false);
  const [toggleClass, setToggleClass] = useState('');

  useEffect(() => {
    let newToggleClass = '';
    if (toggle) newToggleClass = 'show-links';
    setToggleClass(newToggleClass);
  }, [toggle]);

  return (
    <div className="App">
      <nav>
        <div className="nav-center">

          <div className="nav-header">
            <img src="./logo.png" className="logo" alt="logo" />
            <button className="nav-toggle" onClick={() => setToggle(!toggle)}>
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className={`links ${toggleClass}`}>
            <li>
              <a href="!#">home</a>
            </li>
            <li>
              <a href="!#">about</a>
            </li>
            <li>
              <a href="!#">projects</a>
            </li>
            <li>
              <a href="!#">contact</a>
            </li>
          </ul>

          <ul className="social-icons">
            <li>
              <a href="https://www.twitter.com/curioustushar">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/curioustushar">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/curioustushar">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/curioustushar">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i className="fab fa-sketch"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div >

  );
}

export default App;
