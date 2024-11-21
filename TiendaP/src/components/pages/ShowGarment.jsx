import { useState } from "react";
import { useParams } from "react-router-dom";
import { shops } from "../mocks/MockIndex";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Footer from "../Footer";
import ScrollToTopButton from "../mocks/ScrollToTopButton"; // Importa el componente


function ShowGarment() {
    const { id } = useParams(); // Obtén el ID desde la URL
    const garment = shops.find((item) => item.id === parseInt(id));

    // Manejo de la imagen seleccionada
    const [selectedImage, setSelectedImage] = useState(garment?.img);

    if (!garment) {
        return <p>Prenda no encontrada</p>;
    }

    return (
        <>
            {/* Marquee */}
            <div className="bg-black text-white fixed top-0 w-full z-50">
                <marquee className="py-2" scrollamount="8">
                    - Ropa nueva todas las semanas🔥 - Estilos y tendencias😲😮 - Lo Mejor en calzado 👟 - ¡Descubre nuestras ofertas exclusivas!♥️ - Promociones imperdibles🤑💸
                </marquee>
            </div>

            {/* Contenido principal */}
            <div className="p-10 mt-14 flex flex-col lg:flex-row items-start justify-center gap-10">
                {/* Subimágenes */}
                {garment.subImages && garment.subImages.length > 0 && (
                    <div className="flex flex-row md:flex-col items-center gap-4">
                        {garment.subImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Subimagen ${index + 1}`}
                                className={`w-20 h-20 object-cover rounded-lg shadow-lg cursor-pointer transition-all ${selectedImage === img ? "border-2 border-black scale-105" : ""
                                    }`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                )}

                {/* Imagen seleccionada con zoom */}
                <div className="flex justify-center">
                    <Zoom>
                        <img
                            src={selectedImage}
                            alt={garment.nombre}
                            className="w-80 h-80 lg:w-[400px] lg:h-[400px] object-cover rounded-lg shadow-lg cursor-pointer"
                        />
                    </Zoom>
                </div>

                {/* Información del producto */}
                <div className="flex flex-col gap-6 max-w-lg">
                    <h1 className="text-4xl font-bold text-gray-800">{garment.nombre}</h1>
                    <p className="text-xl font-semibold text-gray-700">Precio: ${garment.precio}</p>
                    <p className="text-gray-600">{garment.descripcion}</p>

                    {/* Botones */}
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-lg transition-all">
                            <FaShoppingCart size={20} />
                            Agregar al carrito
                        </button>
                        <a
                            href={`https://wa.me/1234567890?text=Me%20interesa%20este%20artículo:%20${garment.nombre}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-lg transition-all"
                        >
                            <FaWhatsapp size={20} />
                            Comprar
                        </a>
                    </div>
                </div>
            </div>
            {/* Botón de scroll al inicio */}
            <ScrollToTopButton />
            {/* Footer */}
            <Footer />
        </>
    );
}

export default ShowGarment;
