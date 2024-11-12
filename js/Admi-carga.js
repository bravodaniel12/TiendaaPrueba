// admin.js

// Función para manejar la conversión de la imagen a base64
function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
  // Manejo del formulario
  document.getElementById('productForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productCategory = document.getElementById('productCategory').value;
    const productImageFile = document.getElementById('productImage').files[0];
  
    if (productImageFile) {
      try {
        // Convertir la imagen a base64
        const productImage = await getBase64(productImageFile);
  
        // Crear objeto producto
        const newProduct = {
          id: Date.now(),
          name: productName,
          price: productPrice,
          category: productCategory,
          image: productImage // URL en base64
        };
  
        // Obtener productos existentes de LocalStorage o crear uno vacío
        const products = JSON.parse(localStorage.getItem('products')) || [];
  
        // Agregar nuevo producto al array
        products.push(newProduct);
  
        // Guardar el array actualizado en LocalStorage
        localStorage.setItem('products', JSON.stringify(products));
  
        // Limpiar el formulario y mostrar mensaje de éxito
        document.getElementById('productForm').reset();
        alert('Producto guardado exitosamente en LocalStorage');
      } catch (error) {
        console.error('Error al subir la imagen:', error);
      }
    } else {
      alert('Por favor selecciona una imagen');
    }
  });
  