import React from 'react';
import PropTypes from 'prop-types';
import logo from './../../logo.svg';
import SocialLinks from './../socialLinks/socialLinks';
import './sidebar.css';

function SideBar(props) {
  return (
    <aside className={props.isOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="" />
        <button className="close-btn" onClick={props.onMenuToggle}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <ul className="links">
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
      <SocialLinks />
    </aside>
  );
}

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onMenuToggle: PropTypes.func
};
export default SideBar;
