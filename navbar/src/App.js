import React, { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(false);

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

          <ul className={`links ${(toggle) ? 'show-links' : ''}`}>
            <li>
              <a href="# ">home</a>
            </li>
            <li>
              <a href="# ">about</a>
            </li>
            <li>
              <a href="# ">projects</a>
            </li>
            <li>
              <a href="# ">contact</a>
            </li>
          </ul>

          <ul className="social-icons">
            <li>
              <a target="_blank" href="https://www.github.com/curioustushar">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.twitter.com/curioustushar">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://stackoverflow.com/users/2224265/tushar-gupta-curioustushar">
                <i className="fab fa-stack-overflow"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/curioustushar/">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.freecodecamp.com/curioustushar">
                <i className="fab fa-free-code-camp"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.hackerrank.com/curioustushar">
                <i className="fab fa-hackerrank"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div >

  );
}

export default App;
