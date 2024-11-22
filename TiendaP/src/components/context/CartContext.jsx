import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del carrito
export const CartProvider = ({ children }) => {
  // Leer el carrito desde el localStorage al inicializar el estado
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : []; // Si hay un carrito en localStorage, lo usamos
  });

  // Función para agregar al carrito
  const addToCart = (item) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, item];
      localStorage.setItem('cart', JSON.stringify(newCart)); // Guardamos el carrito actualizado en localStorage
      return newCart;
    });
  };

  // Función para eliminar del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem('cart', JSON.stringify(newCart)); // Guardamos el carrito actualizado en localStorage
      return newCart;
    });
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
