import Header from "../Header";
import { shops } from "../mocks/MockIndex";
import { FaEye, FaWhatsapp } from 'react-icons/fa'; // Importa el icono de ojo y Whatsapp


function Start() {
	const handleWhatsApp = (img, nombre) => {
		const message = `Me interesa este artículo: ${nombre}`;
		const url = `https://wa.me/?text=${encodeURIComponent(message)}%0A${encodeURIComponent(img)}`;
		window.open(url, "_blank");
	};

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
							const { nombre, precio, img, tipo, descripcion } = shop;
							return (
								<div key={index} className="flex justify-center">
									<div className="overflow-hidden rounded-lg shadow-lg border bg-zinc-200 p-6 h-[550px] w-full flex flex-col">
										{/* Imagen con iconos sobre ella */}
										<div className="relative w-full h-2/3">
											<img className="w-full h-full object-cover rounded-lg" src={img} alt={nombre} />

											{/* Icono de ojo */}
											<div className="absolute top-3 left-3 bg-white rounded-full p-2 cursor-pointer opacity-80 hover:opacity-100">
												<FaEye size={24} color="black" />
											</div>
										</div>

										{/* Información debajo de la imagen */}
										<div className="pt-4 flex flex-col justify-between flex-grow">
											<p className="text-lg font-semibold text-gray-700">{tipo}</p>
											<p className="text-gray-600 text-sm">{descripcion}</p>
											<p className="text-xl font-bold text-gray-900">${precio}</p>
										</div>

										{/* Botón de compra */}
										<div className="mt-4 text-center">
											<button
												className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
												onClick={() => handleWhatsApp(img, nombre)}
											>
												<FaWhatsapp size={20} className="mr-2" />
												Comprar
											</button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Start;