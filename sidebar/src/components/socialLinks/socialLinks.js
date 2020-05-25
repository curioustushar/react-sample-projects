import React from 'react';
import './sociallnks.css';

function socialLinks() {
  const links = [
    { url: 'https://www.github.com/nmanikiran', iconName: 'github' },
    { url: 'https://www.twitter.com/nmanikiran', iconName: 'twitter' },
    {
      url: 'https://www.stackoverflow.com/users/2979100/nmanikiran',
      iconName: 'stack-overflow'
    },
    {
      url: 'https://www.freecodecamp.com/nmanikiran',
      iconName: 'free-code-camp'
    },
    { url: 'https://www.hackerrank.com/nmanikiran', iconName: 'hackerrank' }
  ];

  return (
    <ul className="social-icons">
      {links.map((link, index) => (
        <li key={index}>
          <a
            target="_blank"
            href={link.url}
            rel="noopener noreferrer"
            title={link.iconName}
          >
            <i className={`fab fa-${link.iconName}`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default socialLinks;
