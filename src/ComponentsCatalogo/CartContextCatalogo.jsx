import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const isItemAdded = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, isItemAdded }}>
      {children}
    </CartContext.Provider>
  );
};
