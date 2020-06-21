import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from './../StoreContextProvider/StoreContextProvider';

const Cart = ({ onToggleCart }) => {
  const [cart, , removeItemToCart, emptyCart] = useContext(StoreContext);
  const totalPrice = cart.items.reduce(
    (acc, a) => acc + a.quantity * parseInt(a.price),
    0,
  );
  const removeItem = (e, item) => {
    e.preventDefault();
    removeItemToCart(item);
    console.log(item);
  };
  const clearCart = (e) => {
    e.preventDefault();
    emptyCart();
    onToggleCart();
  };
  const checkout = (e) => {
    e.preventDefault();
    onToggleCart();
    alert('Checkout');
  };
  return (
    <div className="cart">
      {cart.items.map((item) => (
        <div key={item.id} className="cart-item ">
          <img src={item.src} alt={item.name} />
          <div className="item-text">
            <p className="font-weight-bold mb-0">{item.name}</p>
            {item.quantity} * <span>$&nbsp;</span>
            <span className="cart-item-price">{item.price}</span>
          </div>
          <a
            href="/"
            className="cart-item-remove"
            title="remove"
            onClick={(e) => removeItem(e, item)}
          >
            <i className="fas fa-trash"></i>
          </a>
        </div>
      ))}
      {cart.items && cart.items.length ? (
        <>
          <div className="cart-total-container">
            <h5>total</h5>
            <h5>
              <strong id="cart-total" className="font-weight-bold">
                $ {totalPrice}
              </strong>
            </h5>
          </div>
          <div className="cart-buttons-container">
            <a href="/" className="btn btn-black" onClick={clearCart}>
              clear cart
            </a>
            <a href="/" className="btn btn-pink" onClick={checkout}>
              checkout
            </a>
          </div>
        </>
      ) : (
        <p className="empty-cart">Cart is empty :(</p>
      )}
    </div>
  );
};

export default Cart;
