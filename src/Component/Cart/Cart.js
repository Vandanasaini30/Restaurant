import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartDisplay from './CartDisplay';
import { useCart } from '../CartContext/CartContext';

const Cart = (props) => {
  const { cartItems, addToCart } = useCart();

  // You can still have sample items or use real data here as needed

  // Calculate total amount
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  return (
    <Modal onClose={props.onClose}>
      <CartDisplay cartItems={cartItems} />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button} onClick={() => addToCart({ id: 'm2', name: 'Another Item', price: 30 })}>
          Add Another Item
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
