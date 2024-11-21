import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    // Manejador de scroll para mostrar/ocultar el botón
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Función para subir al inicio de la página
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all"
                    title="Subir al inicio"
                >
                    <FaArrowUp size={24} />
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
