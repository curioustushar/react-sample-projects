import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <svg viewBox="0 0 20 20" fill="currentColor" className="home w-6 h-6">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <p>Home</p>
        </div>
        <div className="header__icon">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="light-bulb w-6 h-6"
          >
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
          </svg>
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="check-circle w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <p>My Stuff</p>
        </div>
        <div className="header__icon">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="collection w-6 h-6"
          >
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
          </svg>
          <p>Collection</p>
        </div>
        <div className="header__icon">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="search w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p>Search</p>
        </div>
        <div className="header__icon">
          <svg viewBox="0 0 20 20" fill="currentColor" className="user w-6 h-6">
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt="hulu"
      />
    </header>
  );
}

export default Header;
