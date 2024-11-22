import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'; // Añadimos el ícono del carrito
import { useCart } from './context/CartContext';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { cart } = useCart(); // Obtiene el carrito desde el contexto
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md flex items-center justify-between px-4 py-4 mt-12 w-full border-b border-gray-300">
        {/* Buscador */}
        {/* Título */}
        <div className="w-1/3 text-center">
          <h1 className="text-lg font-semibold text-gray-700">Mi Marca</h1>
        </div>
        {/* Icono de carrito */}
        <div className="w-1/3 flex justify-end relative">
          <button className="hover:text-gray-500 text-gray-700"
          onClick={() => navigate('/carrito')}
          >
            <FaShoppingCart size={34} />
            {/* Muestra el número de artículos en el carrito */}
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;

