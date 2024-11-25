import { useState } from "react";
import { useParams } from "react-router-dom";
import { shops } from "../mocks/MockIndex";
import { FaShoppingCart, FaWhatsapp } from "react-icons/fa";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useCart } from "../context/CartContext";
import Footer from "../Footer";
import ScrollToTopButton from "../mocks/ScrollToTopButton"; // Importa el componente
import Header from "../Header";

function ShowGarment() {
    const { id } = useParams(); // Obtén el ID desde la URL
    const { addToCart, cart } = useCart();
    const garment = shops.find((item) => item.id === parseInt(id));

    // Manejo de la imagen seleccionada
    const [selectedImage, setSelectedImage] = useState(garment?.img);

    if (!garment) {
        return <p>Prenda no encontrada</p>;
    }

    const handleAddToCart = () => {
        // Verifica si el artículo ya está en el carrito
        const isInCart = cart.some((item) => item.id === garment.id);

        if (isInCart) {
            console.log(`${garment.nombre} ya está en el carrito. No se puede agregar nuevamente.`);
        } else {
            addToCart(garment);  // Agrega la prenda al carrito si no está presente
            console.log(`${garment.nombre} ha sido agregado al carrito`);
        }
    };

    return (
        <>
            {/* Marquee */}
            <div className="bg-burdeos text-white fixed top-0 w-full z-50">
                <marquee className="py-2" scrollamount="8">
                    - Ropa nueva todas las semanas🔥 - Estilos y tendencias😲😮 - Lo Mejor en calzado 👟 - ¡Descubre nuestras ofertas exclusivas!♥️ - Promociones imperdibles🤑💸
                </marquee>
            </div>

            <Header />

            {/* Contenido principal */}
            <div className="flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 md:px-16 lg:px-40 xl:px-60 p-10 xs:p-2 md:mt-14 gap-10">
                {/* Subimágenes */}
                {garment.subImages && garment.subImages.length > 0 && (
                    <div className="flex flex-row lg:flex-col items-center gap-4 lg:gap-6">
                        {garment.subImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Subimagen ${index + 1}`}
                                className={`xl:w-40 w-24 h-20 object-cover rounded-lg shadow-lg cursor-pointer transition-all ${selectedImage === img ? "border-2 border-azul-marino scale-105" : ""}`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                )}

                {/* Imagen seleccionada con zoom */}
                <div className="flex justify-center w-full">
                    <Zoom>
                        <img
                            src={selectedImage}
                            alt={garment.nombre}
                            className="w-80 h-80 lg:w-[400px] lg:h-[400px] object-cover rounded-lg shadow-lg cursor-pointer"
                        />
                    </Zoom>
                </div>

                {/* Información del producto */}
                <div className="flex flex-col gap-6 max-w-lg mx-auto">
                    <h1 className="text-4xl font-bold text-azul-marino">{garment.nombre}</h1>
                    <p className="text-xl font-semibold text-dorado">Precio: ${garment.precio}</p>
                    <p className="text-gray-600">{garment.descripcion}</p>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 xs:gap-2">
                        <button
                            onClick={handleAddToCart}
                            className="flex items-center gap-2 bg-burdeos hover:bg-burdeos-claro text-white px-4 py-2 rounded-lg text-lg transition-all w-full sm:w-auto"
                        >
                            <FaShoppingCart size={20} />
                            Agregar al carrito
                        </button>
                        <a
                            href={`https://wa.me/1234567890?text=Me%20interesa%20este%20artículo:%20${garment.nombre}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-lg transition-all w-full sm:w-auto"
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
