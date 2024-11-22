// src/components/pages/CartPage.jsx
import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-10 mt-14">
      <h1 className="text-4xl font-bold text-gray-800">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="mt-6">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center my-4">
              <div>
                <h3>{item.nombre}</h3>
                <p>${item.precio}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="text-red-500"
              >
                <FaTrashAlt size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
      <Link to="/" className="text-blue-500">Seguir comprando</Link>
    </div>
  );
}

export default CartPage;
