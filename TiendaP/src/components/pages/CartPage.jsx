// src/components/pages/CartPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';
import Header from '../Header';
import Footer from "../Footer";

function CartPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();

  return (
    <>
      {/* Marquee */}
      <div className="bg-burdeos text-white fixed top-0 w-full z-50">
				<marquee className="py-2" scrollamount="8">
					- Ropa nueva todas las semanas🔥 - Estilos y tendencias😲😮 - Lo mejor en calzado 👟 - ¡Descubre nuestras ofertas exclusivas!♥️ - Promociones imperdibles🤑💸
				</marquee>
			</div>
      <Header />
      <div className="p-10 mt-4">
        <h1 className="text-3xl xs:text-4xl font-bold text-gray-800 mb-6">Carrito de Compras</h1>

        {cart.length === 0 ? (
          <p className="text-lg text-gray-600">No hay productos en el carrito.</p>
        ) : (
          <div className={`grid ${cart.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-8`}>
            {cart.map((item, index) => (
              <div key={index} className="flex items-center bg-white p-4 border border-dorado rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">

                {/* Imagen */}
                <div
                  className="shadow-md opacity-100 hover:opacity-50 transition-opacity duration-300 cursor-pointer"
                  onClick={() => navigate(`/prenda/${item.id}`)}
                >
                  <img
                    src={item.img}
                    alt={item.nombre}
                    className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-lg mr-6"
                  />
                </div>

                {/* Información del Producto */}
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.nombre}</h3>
                  <p className="text-lg text-gray-700 mb-4">${item.precio}</p>
                </div>

                {/* Botón Eliminar */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                >
                  <FaTrashAlt size={20} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Enlace para seguir comprando */}
        <div className="mt-8">
          <Link
            to="/"
            className="text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md shadow-md transition duration-300"
          >
            Seguir comprando
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartPage;
