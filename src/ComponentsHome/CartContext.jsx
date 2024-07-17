import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [addedItems, setAddedItems] = useState(new Set());

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
    const itemIds = new Set(savedCart.map(item => item.id));
    setAddedItems(itemIds);
  }, []);

  const addToCart = (game) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, game];
      localStorage.setItem('cart', JSON.stringify(updatedCart)); 
      return updatedCart;
    });
    setAddedItems((prevAdded) => new Set(prevAdded).add(game.id));
  };

  const removeFromCart = (gameId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(game => game.id !== gameId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
    setAddedItems((prevAdded) => {
      const newAdded = new Set(prevAdded);
      newAdded.delete(gameId);
      return newAdded;
    });
  };

  const isItemAdded = (gameId) => addedItems.has(gameId);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isItemAdded }}>
      {children}
    </CartContext.Provider>
  );
};
