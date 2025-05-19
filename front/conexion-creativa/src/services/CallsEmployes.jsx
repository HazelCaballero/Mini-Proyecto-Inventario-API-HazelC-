// URL base de la API donde se hacen las peticiones
const BASE_URL = "http://127.0.0.1:8000/api/";

// Función para obtener todos los empleados de la API
async function GetEmployes() {
  try {
    // Realiza una petición GET a la ruta de empleados
    const response = await fetch(`${BASE_URL}empleados/`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error('Error fetching employes');
    // Devuelve los datos en formato JSON
    return await response.json();
  } catch (error) {
    // Muestra el error en consola y lo vuelve a lanzar
    console.error('Error fetching employes:', error);
    throw error;
  }
}

// Función para crear un nuevo empleado en la API
async function PostEmployes(objeto) {
  try {
    // Realiza una petición POST a la ruta de creación de empleados
    const response = await fetch(`${BASE_URL}empleados/create/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Convierte el objeto del empleado a JSON y lo envía en el cuerpo de la petición
      body: JSON.stringify(objeto)
    });
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error('Error posting employe');
    // Devuelve los datos en formato JSON
    return await response.json();
  } catch (error) {
    // Muestra el error en consola y lo vuelve a lanzar
    console.error('Error posting employe:', error);
    throw error;
  }
}

// Función para actualizar un empleado existente en la API
async function UpdateEmployes(id, objeto) {
  try {
    // Realiza una petición PUT a la ruta de actualización del empleado con el id proporcionado
    const response = await fetch(`${BASE_URL}empleados/update/${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      // Convierte el objeto actualizado a JSON y lo envía en el cuerpo de la petición
      body: JSON.stringify(objeto)
    });
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error(`Error updating employe with id ${id}`);
    // Devuelve los datos en formato JSON
    return await response.json();
  } catch (error) {
    // Muestra el error en consola y lo vuelve a lanzar
    console.error('Error updating employe:', error);
    throw error;
  }
}

// Función para eliminar un empleado de la API
async function DeleteEmploye(id) {
  try {
    // Realiza una petición DELETE a la ruta de eliminación del empleado con el id proporcionado
    const response = await fetch(`${BASE_URL}empleados/delete/${id}/`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    // Si la respuesta no es exitosa, lanza un error
    if (!response.ok) throw new Error(`Error deleting employe with id ${id}`);
    // Devuelve un mensaje de éxito
    return { message: `Employe with id ${id} deleted successfully` };
  } catch (error) {
    // Muestra el error en consola y lo vuelve a lanzar
    console.error('Error deleting employe:', error);
    throw error;
  }
}

// Exporta todas las funciones para que puedan ser usadas en otros archivos
export default { GetEmployes, PostEmployes, UpdateEmployes, DeleteEmploye };
