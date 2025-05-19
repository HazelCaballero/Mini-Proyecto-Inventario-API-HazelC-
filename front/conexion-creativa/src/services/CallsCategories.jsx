// URL base para las peticiones a la API
const BASE_URL = "http://127.0.0.1:8000/api/";

// Obtener todas las categorías desde la API
async function GetCategories() {
  try {
    // Realiza una petición GET a la ruta de categorías
    const response = await fetch(`${BASE_URL}categorias/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error('Error fetching categories');
    // Devuelve los datos en formato JSON
    return await response.json();
  } catch (error) {
    // Muestra el error en consola y lo lanza para manejarlo externamente
    console.error('Error fetching categories:', error);
    throw error;
  }
}

// Crear una nueva categoría en la API
async function PostCategory(nombre, descripcion) {
  try {
    // Crea el objeto con los datos de la nueva categoría
    const data = { nombre, descripcion };
    // Realiza una petición POST a la ruta de creación de categorías
    const response = await fetch(`${BASE_URL}categorias/create/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error('Error posting category');
    // Devuelve los datos en formato JSON
    return await response.json();
  } catch (error) {
    // Muestra el error en consola y lo lanza para manejarlo externamente
    console.error('Error posting category:', error);
    throw error;
  }
}

// Actualizar una categoría existente en la API
async function UpdateCategory(id, nombre, descripcion) {
  try {
    // Crea el objeto con los datos actualizados de la categoría
    const data = { nombre, descripcion };
    // Realiza una petición PUT a la ruta de actualización de categorías
    const response = await fetch(`${BASE_URL}categorias/update/${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error(`Error updating category with id ${id}`);
    // Devuelve los datos en formato JSON
    return await response.json();
  } catch (error) {
    // Muestra el error en consola y lo lanza para manejarlo externamente
    console.error('Error updating category:', error);
    throw error;
  }
}

// Eliminar una categoría de la API
async function DeleteCategory(id) {
  try {
    // Realiza una petición DELETE a la ruta de eliminación de categorías
    const response = await fetch(`${BASE_URL}categorias/delete/${id}/`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error(`Error deleting category with id ${id}`);
    // Devuelve un mensaje de éxito
    return { message: `Category with id ${id} deleted successfully` };
  } catch (error) {
    // Muestra el error en consola y lo lanza para manejarlo externamente
    console.error('Error deleting category:', error);
    throw error;
  }
}

// Actualizar un producto existente en la API
async function UpdateProduct(id, producto) {
  try {
    // Realiza una petición PUT a la ruta de actualización de productos
    const response = await fetch(`${BASE_URL}productos/update/${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto)
    });
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error(`Error updating product with id ${id}`);
    // Devuelve los datos en formato JSON
    return await response.json();
  } catch (error) {
    // Muestra el error en consola y lo lanza para manejarlo externamente
    console.error('Error updating product:', error);
    throw error;
  }
}

// Eliminar un producto de la API
async function DeleteProduct(id) {
  try {
    // Realiza una petición DELETE a la ruta de eliminación de productos
    const response = await fetch(`${BASE_URL}productos/delete/${id}/`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error(`Error deleting product with id ${id}`);
    // Devuelve un mensaje de éxito
    return { message: `Product with id ${id} deleted successfully` };
  } catch (error) {
    // Muestra el error en consola y lo lanza para manejarlo externamente
    console.error('Error deleting product:', error);
    throw error;
  }
}

// Exporta todas las funciones para que puedan ser usadas en otros archivos
export default { GetCategories, PostCategory, UpdateCategory, DeleteCategory, UpdateProduct, DeleteProduct };