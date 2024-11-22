import React, { useState } from 'react';
import Footer from "../Footer";
import Header from "../Header";
import { shops } from "../mocks/MockIndex";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../mocks/ScrollToTopButton";
import FilterMenu from "../mocks/FilterGarments";

function Start() {
	const navigate = useNavigate();
	const [filteredShops, setFilteredShops] = useState(shops); // Al principio, muestra todos los productos

	// Función que actualiza los productos filtrados
	const handleFilterChange = (gender, type, subType) => {
		const filtered = shops.filter((shop) => {
			const matchesGender = gender ? shop.genero === gender : true;
			const matchesType = type ? shop.tipo === type : true;
			const matchesSubType = subType ? shop.subtipo === subType : true;
			return matchesGender && matchesType && matchesSubType;
		});

		setFilteredShops(filtered);
	};

	return (
		<>
			{/* Marquee */}
			<div className="bg-black text-white fixed top-0 w-full z-50">
				<marquee className="py-2" scrollamount="8">
					- Ropa nueva todas las semanas🔥 - Estilos y tendencias😲😮 - Lo Mejor en calzado 👟 - ¡Descubre nuestras ofertas exclusivas!♥️ - Promociones imperdibles🤑💸
				</marquee>
			</div>

			{/* Header */}
			<Header />

			{/* Filtro */}
			<div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-28 py-6">
				<FilterMenu onFilterChange={handleFilterChange} />
			</div>

			{/* Contenido principal */}
			<div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-28 py-4 max-w-7xl mx-auto">
				<h1 className="md:text-5xl text-4xl font-bold text-stone-900 py-5">Tienda ropa 🐼</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-content-between">
					{filteredShops.map((shop, index) => {
						const { id, nombre, precio, img, imgHover } = shop;
						return (
							<div key={index} className="flex justify-center">
								<div className="overflow-hidden rounded-lg shadow-lg border bg-zinc-200 p-6 h-[500px] w-full flex flex-col">
									<div className="relative w-full h-2/3">
										<img
											src={img}
											alt={nombre}
											className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out"
										/>
										<img
											src={imgHover}
											alt={nombre}
											className="absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out transform scale-100 opacity-0 hover:scale-110 hover:opacity-100"
										/>
										<div
											className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md opacity-100 hover:opacity-50 transition-opacity duration-300 cursor-pointer"
											onClick={() => navigate(`/prenda/${id}`)}
										>
											<FaEye size={24} className="text-gray-800" />
										</div>
									</div>

									<div className="mt-4 text-center">
										<h3 className="text-stone-900 text-xl font-bold">{nombre}</h3>
										<p className="font-serif text-stone-900 font-semibold text-lg py-2">${precio}</p>
										<p className="text-sm text-gray-500">Camisa básica, corte V</p>
									</div>

									<div className="mt-4 text-center">
										<a
											href={`https://wa.me/1234567890?text=Me%20interesa%20este%20articulo%20${nombre}`}
											target="_blank"
											className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm"
											rel="noopener noreferrer"
										>
											Comprar
										</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<ScrollToTopButton />
			<Footer />
		</>
	);
}

export default Start;
