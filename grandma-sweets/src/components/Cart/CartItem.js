import React from 'react';

const CartItem = ({ item, onDelete, onUpdateQuantity }) => {
  const decrement = (e) => {
    e.preventDefault();
    if (item.quantity >= 2) {
      onUpdateQuantity(item.quantity - 1);
    } else {
      onDelete(item);
    }
  };
  const increment = (e) => {
    e.preventDefault();
    if (item.quantity < 99) {
      onUpdateQuantity(item.quantity + 1);
    }
  };
  return (
    <div key={item.id} className="cart-item ">
      <img src={item.src} loading="lazy" alt={item.name} />
      <div className="item-text">
        <p className="font-weight-bold mb-0">{item.name}</p>
        {item.quantity} * <span>$&nbsp;</span>
        <span className="cart-item-price">{item.price}</span>
      </div>

      <div className="cart-actions">
        <button title="decrement" onClick={decrement}>
          {item.quantity === 1 ? (
            <span className="cart-item-remove" title="remove">
              <i className="fas fa-trash"></i>
            </span>
          ) : (
            '-'
          )}
        </button>
        <input value={item.quantity} readOnly />
        <button title="increment" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
