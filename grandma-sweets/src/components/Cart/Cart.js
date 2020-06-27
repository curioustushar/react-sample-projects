import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from './../StoreContextProvider/StoreContextProvider';
import CartItem from './CartItem';

const Cart = ({ onToggleCart }) => {
  const [cart, , removeItemToCart, updateQuantity, emptyCart] = useContext(
    StoreContext,
  );
  const totalPrice = cart.items.reduce(
    (acc, a) => acc + a.quantity * parseInt(a.price),
    0,
  );
  const removeItem = (item) => {
    removeItemToCart(item);
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
        <CartItem
          key={item.id}
          item={item}
          onDelete={removeItem}
          onUpdateQuantity={(e) => updateQuantity({ ...item, quantity: e })}
        />
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
