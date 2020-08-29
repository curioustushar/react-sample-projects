import React, { useContext } from 'react';
import './Nav.css';
import { AppContext } from './../../AppContext';

const NavLinks = [
  { key: 'Trending', name: 'Trending' },
  { key: 'TopRated', name: 'Top Rated' },
  { key: 'Action', name: 'Action' },
  { key: 'Comedy', name: 'Comedy' },
  { key: 'Horror', name: 'Horror' },
  { key: 'Romance', name: 'Romance' },
  { key: 'Mystery', name: 'Mystery' },
  { key: 'SciFi', name: 'Sci-fi' },
  { key: 'Western', name: 'Western' },
  { key: 'Animation', name: 'Animation' },
  { key: 'TV', name: 'Movies' },
];

const Nav = () => {
  const { type, setType } = useContext(AppContext);
  return (
    <nav className="nav">
      {NavLinks.map(({ key, name }) => (
        <h2
          className={type === key ? 'active' : ''}
          onClick={() => setType(key)}
        >
          {name}
        </h2>
      ))}
    </nav>
  );
};

export default Nav;
