import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { shops } from "../mocks/MockIndex";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../mocks/ScrollToTopButton";
import FilterMenu from "../mocks/FilterGarments";

function Start() {
	const navigate = useNavigate();
	const [filteredShops, setFilteredShops] = useState(shops);
	const [filters, setFilters] = useState({
		genero: "",
		tipo: "",
		subTipo: "",
	});

	const handleFilterChange = (field, value) => {
		if (field === "genero") {
			setFilters({
				genero: value,
				tipo: "",
				subTipo: "",
			});
		} else if (field === "tipo") {
			setFilters((prev) => ({
				...prev,
				tipo: value,
				subTipo: "",
			}));
		} else {
			setFilters((prev) => ({
				...prev,
				[field]: value,
			}));
		}
	};

	useEffect(() => {
		const { genero, tipo, subTipo } = filters;
		const filtered = shops.filter((shop) => {
			const matchesGender = genero ? shop.genero === genero : true;
			const matchesType = tipo ? shop.tipo === tipo : true;
			const matchesSubType = subTipo ? shop.subtipo === subTipo : true;
			return matchesGender && matchesType && matchesSubType;
		});

		setFilteredShops(filtered);
	}, [filters]);

	return (
		<>
			<div className="bg-burdeos text-white fixed top-0 w-full z-50">
				<marquee className="py-2" scrollamount="8">
					- Ropa nueva todas las semanas🔥 - Estilos y tendencias😲😮 - Lo mejor en calzado 👟 - ¡Descubre nuestras ofertas exclusivas!♥️ - Promociones imperdibles🤑💸
				</marquee>
			</div>

			<Header />

			<div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-28 py-6 bg-white">
				<FilterMenu filters={filters} onFilterChange={handleFilterChange} />
			</div>

			<div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-28 py-4 max-w-7xl mx-auto mb-12">
				<h1 className="md:text-5xl text-4xl font-bold text-azul-marino py-5">
					Tienda ropa 🐼
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredShops.length === 0 ? (
						<div className="col-span-1 sm:col-span-2 lg:col-span-3 flex flex-col items-center justify-center h-96 text-center">
							{/* Contenedor del círculo */}
							<div className="relative flex items-center justify-center">
								{/* Círculo en blanco y negro */}
								<div className="w-80 h-80 rounded-full bg-gray-100 flex items-center justify-center shadow-inner">
									<img
										src="https://http2.mlstatic.com/D_NQ_NP_866487-CBT74764289231_022024-O.webp"
										alt="Decorativo"
										className="w-56 h-56 object-contain grayscale rounded-full"
									/>
								</div>
							</div>
							<p className="text-lg text-gray-600 mt-6">No hay prendas disponibles.</p>
						</div>
					) : (
						filteredShops.map((shop, index) => {
							const { id, nombre, precio, img, imgHover, descripcion } = shop;

							return (
								<div key={index} className="flex justify-center">
									<div className="overflow-hidden rounded-lg shadow-lg border border-dorado bg-white p-6 h-auto w-full flex flex-col transition-transform transform hover:scale-105 duration-300">
										{/* Imagen */}
										<div className="relative w-full h-64">
											<img
												src={img}
												alt={nombre}
												className="w-full h-full object-cover rounded-lg transition-opacity duration-500"
											/>
											<img
												src={imgHover}
												alt={nombre}
												className="absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500"
											/>
											<div
												className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md opacity-100 hover:opacity-75 transition-opacity duration-300 cursor-pointer"
												onClick={() => navigate(`/prenda/${id}`)}
											>
												<FaEye size={24} className="text-azul-marino" />
											</div>
										</div>

										{/* Información */}
										<div className="mt-4 text-center flex-1">
											<h3 className="text-azul-marino text-xl font-bold">
												{nombre}
											</h3>
											<p className="font-serif text-dorado font-semibold text-lg py-2">
												${precio}
											</p>
											<p className="text-sm text-gray-500">{descripcion}</p>
										</div>

										{/* Botón Comprar */}
										<div className="mt-4 flex justify-center">
											<a
												href={`https://wa.me/1234567890?text=Me%20interesa%20este%20articulo%20${nombre}`}
												target="_blank"
												className="bg-burdeos text-white py-2 px-4 rounded-lg text-sm hover:bg-burdeos-claro transition-colors duration-300"
												rel="noopener noreferrer"
											>
												Comprar
											</a>
										</div>
									</div>
								</div>
							);
						})
					)}
				</div>
			</div>

			<ScrollToTopButton />
			<Footer />
		</>
	);
}

export default Start;
