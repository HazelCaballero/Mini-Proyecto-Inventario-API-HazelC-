// URL base de la API donde se hacen las peticiones
const BASE_URL = "http://127.0.0.1:8000/api/";

// Obtener todos los productos
// Hace una petición GET para traer todos los productos desde la API
async function GetProducts() {
  try {
    const response = await fetch(`${BASE_URL}productos/`, {
      method: 'GET', // Método HTTP GET
      headers: { 'Content-Type': 'application/json' } // Especifica que se espera JSON
    });
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error('Error fetching products');
    // Devuelve los datos en formato JSON
    return await response.json();
  } catch (error) {
    // Muestra el error en consola y lo vuelve a lanzar
    console.error('Error fetching products:', error);
    throw error;
  }
}

// Crear un nuevo producto
// Hace una petición POST para crear un producto nuevo en la API
async function PostProduct(objeto) {
  try {
    const response = await fetch(`${BASE_URL}productos/create/`, {
      method: 'POST', // Método HTTP POST
      headers: { 'Content-Type': 'application/json' }, // Especifica que se envía JSON
      body: JSON.stringify(objeto) // Convierte el objeto a JSON
    });
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error('Error posting product');
    // Devuelve los datos del producto creado
    return await response.json();
  } catch (error) {
    // Muestra el error en consola y lo vuelve a lanzar
    console.error('Error posting product:', error);
    throw error;
  }
}

// Actualizar un producto
// Hace una petición PUT para actualizar un producto existente en la API
async function UpdateProduct(id, objeto) {
  try {
    const response = await fetch(`${BASE_URL}productos/update/${id}/`, {
      method: 'PUT', // Método HTTP PUT
      headers: { 'Content-Type': 'application/json' }, // Especifica que se envía JSON
      body: JSON.stringify(objeto) // Convierte el objeto a JSON
    });
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error(`Error updating product with id ${id}`);
    // Devuelve los datos del producto actualizado
    return await response.json();
  } catch (error) {
    // Muestra el error en consola y lo vuelve a lanzar
    console.error('Error updating product:', error);
    throw error;
  }
}

// Eliminar un producto
// Hace una petición DELETE para eliminar un producto de la API
async function DeleteProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}productos/delete/${id}/`, {
      method: 'DELETE', // Método HTTP DELETE
      headers: { 'Content-Type': 'application/json' } // Especifica que se espera JSON
    });
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error(`Error deleting product with id ${id}`);
    // Devuelve un mensaje de éxito
    return { message: `Product with id ${id} deleted successfully` };
  } catch (error) {
    // Muestra el error en consola y lo vuelve a lanzar
    console.error('Error deleting product:', error);
    throw error;
  }
}

// Exporta todas las funciones para que puedan ser usadas en otros archivos
export default { GetProducts, PostProduct, UpdateProduct, DeleteProduct };