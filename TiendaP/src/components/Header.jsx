import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Icono del corazón

function Header() {
  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md flex items-center justify-between px-4 py-4 mt-12 w-full border-b border-gray-300">
        {/* Buscador */}
        <div className="flex items-center w-1/3">
          <input
            type="text"
            placeholder="Filtrar por .."
            className="border border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        {/* Título */}
        <div className="w-1/3 text-center">
          <h1 className="text-lg font-semibold text-gray-700">Mi Marca</h1>
        </div>
        {/* Icono de corazón */}
        <div className="w-1/3 flex justify-end">
          <button className="hover:text-gray-500 text-gray-700">
            <FaHeart size={24} />
          </button>
        </div>
      </header>

      {/* Contenido para probar el scroll */}
      <div className="p-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan velit non justo porttitor,
          non gravida lorem scelerisque. Duis ut fermentum libero. Etiam tincidunt libero ut ligula vehicula
          vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <p>
          [Contenido adicional para simular el desplazamiento]
        </p>
      </div>
    </>
  );
}

export default Header;
