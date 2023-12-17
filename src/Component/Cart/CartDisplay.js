import React from 'react';
import { useCart } from '../CartContext/CartContext'; 

const CartDisplay = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            Item Name: {item.name}, Amount: {item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDisplay;

