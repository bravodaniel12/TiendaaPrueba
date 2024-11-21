import { useParams } from "react-router-dom";
import { shops } from "../mocks/MockIndex";
import Footer from "../Footer";

function ShowGarment() {
    const { id } = useParams(); // Obtén el ID desde la URL
    const garment = shops.find((item) => item.id === parseInt(id));

    if (!garment) {
        return <p>Prenda no encontrada</p>;
    }

    return (
        <>
            <div className="bg-black text-white fixed top-0 w-full z-50">
                <marquee className="py-2" scrollamount="8">
                    - Ropa nueva todas las semanas🔥   - Estilos y tendencias😲😮   - Lo Mejor en calzado 👟  - ¡Descubre nuestras ofertas exclusivas!♥️   - Promociones imperdibles🤑💸
                </marquee>
            </div>
            <div className="p-10">
                <h1 className="text-4xl font-bold text-center">{garment.nombre}</h1>
                <div className="flex flex-col md:flex-row items-center justify-center mt-10">
                    <img
                        src={garment.img}
                        alt={garment.nombre}
                        className="w-80 h-80 object-cover rounded-lg shadow-lg"
                    />
                    <div className="ml-10">
                        <p className="text-xl font-semibold">Precio: ${garment.precio}</p>
                        <p className="mt-4">{garment.descripcion}</p>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <a
                        href={`https://wa.me/1234567890?text=Me%20interesa%20este%20articulo%20${garment.nombre}`}
                        target="_blank"
                        className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm"
                    >
                        Comprar
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ShowGarment;
