import Footer from "../Footer";
import Header from "../Header";
import { shops } from "../mocks/MockIndex";
import { FaEye, FaWhatsapp } from 'react-icons/fa'; // Importa el icono de ojo y Whatsapp
import { useNavigate } from "react-router-dom";


function Start() {
	// const handleWhatsApp = (img, nombre) => {
	// 	const message = `Me interesa este artículo: ${nombre}`;
	// 	const url = `https://wa.me/?text=${encodeURIComponent(message)}%0A${encodeURIComponent(img)}`;
	// 	window.open(url, "_blank");
	// };
	const navigate = useNavigate();

	return (
		<>
			{/* Marquee */}
			<div className="bg-black text-white fixed top-0 w-full z-50">
				<marquee className="py-2" scrollamount="8">
					- Ropa nueva todas las semanas🔥   - Estilos y tendencias😲😮   - Lo Mejor en calzado 👟  - ¡Descubre nuestras ofertas exclusivas!♥️   - Promociones imperdibles🤑💸
				</marquee>
			</div>

			{/* Contenido principal */}
			<Header />
			<div className="#f5f5f4 pt-1">
				<div className="w-full h-screen md:px-40 xs:px-6 py-8">
					<h1 className="md:text-5xl text-4xl font-bold text-stone-900 py-5">
						Tienda ropa 🐼
					</h1>
					<div className="grid sm:grid-cols-3 xs:grid-cols-1 gap-8 place-content-between">
						{shops.map((shop, index) => {
							const { id, nombre, precio, img, imgHover, tipo, descripcion } = shop;
							return (
								<div key={index} className="flex justify-center">
									<div className="overflow-hidden rounded-lg shadow-lg border bg-zinc-200 p-7 h-[500px] w-full flex flex-col">
										{/* Contenedor de la imagen */}
										<div className="relative w-full h-2/3">
											{/* Imagen principal (cambia al hover) */}
											<img
												src={img} // Imagen principal
												alt={nombre}
												className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out"
											/>

											{/* Imagen alternativa que aparece al hover */}
											<img
												src={imgHover} // Segunda imagen
												alt={nombre}
												className="absolute top-0 left-0 w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out transform scale-100 opacity-0 hover:scale-110 hover:opacity-100" // Transición de zoom en la imagen de hover
											/>

											{/* Icono de ojo */}
											<div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md opacity-100 hover:opacity-50 transition-opacity duration-300 cursor-pointer"
												key={id}
												onClick={() => navigate(`/prenda/${id}`)}>

												<FaEye size={24} className="text-gray-800" />

											</div>
										</div>

										{/* Información de la prenda */}
										<div className="mt-4 text-center">
											<h3 className="text-stone-900 text-xl font-bold">{nombre}</h3>
											<p className="font-serif text-stone-900 font-semibold text-lg py-2">${precio}</p>
											<p className="text-sm text-gray-500">Camisa básica, corte V</p>
										</div>

										{/* Botón de compra */}
										<div className="mt-4 text-center">
											<a
												href={`https://wa.me/1234567890?text=Me%20interesa%20este%20articulo%20${nombre}`}
												target="_blank"
												className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm"
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
				<Footer />
			</div>
		</>
	);
}

export default Start;