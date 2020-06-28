import React, { useContext } from 'react';
import { StoreContext } from './../StoreContextProvider/StoreContextProvider';

function Item({ item, onClick }) {
  const [, addItemToCart] = useContext(StoreContext);
  const addToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItemToCart(item);
  };
  return (
    <a href="/" onClick={onClick}>
      <div className={`store-item ${item.type}`}>
        <div className="img-container">
          <img
            src={item.src}
            loading="lazy"
            className="store-img"
            alt={item.name}
          />
          <span className="store-item-icon" onClick={addToCart}>
            <i className="fas fa-shopping-cart"></i>
          </span>
        </div>
        <div className="item-text">
          <h5>{item.name}</h5>
          <h5 className="store-item-value">
            <span>$ &nbsp;</span>
            <strong>{item.price}</strong>
          </h5>
        </div>
      </div>
    </a>
  );
}

export default Item;
