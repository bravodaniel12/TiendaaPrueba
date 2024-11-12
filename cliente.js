// cliente.js

// Función para cargar y mostrar productos desde LocalStorage
function loadProducts() {
    // Obtener los productos almacenados en LocalStorage
    const products = JSON.parse(localStorage.getItem('products')) || [];
  
    // Seleccionar el contenedor de la galería de productos
    const productGallery = document.getElementById('productGallery');
  
    // Limpiar el contenedor antes de agregar productos
    productGallery.innerHTML = '';
  
    // Iterar sobre cada producto y crear su tarjeta
    products.forEach(product => {
      // Crear contenedor para la tarjeta del producto
      const productCard = document.createElement('div');
      productCard.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-lg');
  
      // Crear imagen del producto
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
      productImage.classList.add('w-full', 'h-48', 'object-cover', 'rounded-md', 'mb-4');
  
      // Crear título del producto
      const productName = document.createElement('h3');
      productName.textContent = product.name;
      productName.classList.add('text-lg', 'font-semibold', 'mb-2');
  
      // Crear precio del producto
      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.price}`;
      productPrice.classList.add('text-gray-700', 'mb-2');
  
      // Crear categoría del producto
      const productCategory = document.createElement('p');
      productCategory.textContent = `Categoría: ${product.category}`;
      productCategory.classList.add('text-gray-500', 'text-sm');
  
      // Añadir elementos a la tarjeta del producto
      productCard.appendChild(productImage);
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
      productCard.appendChild(productCategory);
  
      // Añadir la tarjeta al contenedor de la galería
      productGallery.appendChild(productCard);
    });
  }
  
  // Llamar a la función para cargar los productos cuando la página cargue
  document.addEventListener('DOMContentLoaded', loadProducts);
  