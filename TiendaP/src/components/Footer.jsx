import React from 'react'

function Footer() {
  return (
    <>

      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-6 md:px-16">
          {/* Grid principal del footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sección: Acerca de */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Acerca de Nosotros</h3>
              <p className="text-sm">
                Somos una tienda enfocada en ofrecerte lo mejor de la moda al mejor precio.
                ¡Visítanos y descubre estilos únicos que encantarán a todos!
              </p>
            </div>

            {/* Sección: Contacto */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contáctanos</h3>
              <ul className="space-y-2 text-sm">
                <li>📞 Teléfono: +57 123 456 7890</li>
                <li>📧 Email: contacto@tienda.com</li>
                <li>📍 Dirección: Calle 123, Isnos - Huila, Colombia</li>
              </ul>
            </div>

            {/* Sección: Mensaje para contactar */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">¿Te gustó nuestra página?</h3>
              <p className="text-sm mb-4">
                ¡Estamos encantados de saber que te interesó! Si quieres saber más o tienes preguntas, no dudes en contactarnos al:
              </p>
              <p className="text-lg font-semibold text-green-500">
                📞 +57 123 456 7890
              </p>
              <p className="text-sm mt-2">
                ¡Esperamos tu llamada o mensaje! 😊
              </p>
            </div>
          </div>

          {/* Barra de derechos reservados */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            © 2024 Tu Tienda. Todos los derechos reservados.
          </div>
        </div>
      </footer>


    </>
  )
}

export default Footer
