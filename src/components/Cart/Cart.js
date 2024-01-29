import React, { useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([
    { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },
    // Add more dummy data as needed
  ]);

  const removeItemHandler = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const cartItemsList = cartItems.map((item) => (
    <li key={item.id}>
      {item.name} - {item.amount} x ${item.price.toFixed(2)}{' '}
      <button onClick={() => removeItemHandler(item.id)}>Remove</button>
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>{cartItemsList}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>
          ${cartItems.reduce((total, item) => total + item.amount * item.price, 0).toFixed(2)}
        </span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
