
// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (amount) => {
      setCartItemCount((prevCount) => prevCount + amount);
      setCartItems((prevItems) => [...prevItems, { id: Date.now(), amount }]);
    };
  
    return (
      <CartContext.Provider value={{ cartItems, cartItemCount, addToCart }}>
        {children}
      </CartContext.Provider>
    );
  };
  
export const useCart = () => {
  return useContext(CartContext);
};
