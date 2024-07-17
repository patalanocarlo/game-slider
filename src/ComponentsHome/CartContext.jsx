import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [addedItems, setAddedItems] = useState(new Set());

  const addToCart = (game) => {
    setCart((prevCart) => [...prevCart, game]);
    setAddedItems((prevAdded) => new Set(prevAdded).add(game.id));
  };

  const isItemAdded = (gameId) => addedItems.has(gameId);

  return (
    <CartContext.Provider value={{ cart, addToCart, isItemAdded }}>
      {children}
    </CartContext.Provider>
  );
};