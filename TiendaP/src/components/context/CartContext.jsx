// src/context/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]); // Agregar la prenda al carrito
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id)); // Eliminar prenda del carrito
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el carrito en cualquier componente
export const useCart = () => {
  return useContext(CartContext);
};
