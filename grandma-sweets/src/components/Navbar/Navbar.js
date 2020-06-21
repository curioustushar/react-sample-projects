import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from './../StoreContextProvider/StoreContextProvider';
import Cart from './../Cart/Cart';

import './Navbar.css';
function Navbar() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isShowNav, toggleNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cart] = useContext(StoreContext);
  const totalPrice = cart.items.reduce(
    (acc, a) => acc + a.quantity * parseInt(a.price),
    0,
  );

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const handelNavlinkClick = (e) => {
    e.preventDefault();
    const id = e.target.href.split('/').pop();
    const scrollDiv = document.querySelector(`#${id}`).offsetTop;
    window.scrollTo({ top: scrollDiv - 80, behavior: 'smooth' });
  };

  function checkMediaMatch(x) {
    if (x.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    var x = window.matchMedia('(max-width: 700px)');
    checkMediaMatch(x);
    x.addListener(checkMediaMatch);
    return () => {
      x.removeEventListener(checkMediaMatch);
    };
  }, []);
  return (
    <>
      <nav className={`navbar ${isMobile ? 'mobile-navbar' : ''}`}>
        <a className="navbar-brand" href="/">
          <img src="img/logo.svg" alt="logo" />
        </a>
        {isMobile && (
          <button
            className="navbar-toggler"
            aria-label="menu"
            onClick={(e) => toggleNavbar(!isShowNav)}
          >
            <span className="toggler-icon">
              <i className="fas fa-bars"></i>
            </span>
          </button>
        )}
        {(!isMobile || isShowNav) && (
          <div className={`navbar-collapse ${isMobile ? 'd-block' : ''}`}>
            <ul className={`navbar-nav ${isMobile ? 'column' : ''}`}>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  href="/home"
                  onClick={handelNavlinkClick}
                >
                  home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/about"
                  onClick={handelNavlinkClick}
                >
                  about
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/store"
                  onClick={handelNavlinkClick}
                >
                  store
                </a>
              </li>
            </ul>
            {!isMobile && (
              <div className="nav-info-items">
                <div className="nav-info">
                  <i className="fas fa-phone"></i>
                  <a href="tel:+ 123456789">+ 123 456 789</a>
                </div>
                <div
                  onClick={(e) => toggleCart()}
                  className="nav-info cart-info"
                >
                  <i className="fas fa-shopping-cart"></i>
                  {cart.items && cart.items.length ? (
                    <p className="">
                      <span id="item-count">{cart.items.length} </span>
                      items - $<span className="item-total">{totalPrice}</span>
                    </p>
                  ) : (
                    'Cart'
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
      {isCartOpen ? <Cart onToggleCart={(e) => toggleCart()} /> : ''}
    </>
  );
}

export default Navbar;
