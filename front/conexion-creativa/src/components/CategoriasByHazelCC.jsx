import React, { useState, useEffect } from 'react'
// Importa SweetAlert2 para mostrar alertas bonitas
import Swal from 'sweetalert2'
// Importa el servicio que maneja las llamadas a la API de categorías
import CallsCategories from '../services/CallsCategories'

// Componente principal para gestionar categorías
export default function CategoriasByHazelCC() {
  // Estado para el nombre de la categoría
  const [nombre, setNombre] = useState('')
  // Estado para la descripción de la categoría
  const [descripcion, setDescripcion] = useState('')
  // Estado para la lista de categorías obtenidas de la API
  const [categorias, setCategorias] = useState([])
  // Estado para saber si se está editando una categoría (guarda el id)
  const [editId, setEditId] = useState(null)

  // useEffect se ejecuta una vez al montar el componente para cargar las categorías
  useEffect(() => {
    fetchCategorias()
  }, [])

  // Función para obtener las categorías desde la API y actualizar el estado
  const fetchCategorias = async () => {
    const data = await CallsCategories.GetCategories()
    setCategorias(data)
  }

  // Maneja el envío del formulario para agregar o actualizar una categoría
  const handleSubmit = async (e) => {
    e.preventDefault() // Previene el comportamiento por defecto del formulario
    try {
      if (editId) {
        // Si hay un id de edición, actualiza la categoría existente
        await CallsCategories.UpdateCategory(editId, nombre, descripcion)
        Swal.fire('Actualizado', 'Categoría actualizada', 'success')
      } else {
        // Si no, crea una nueva categoría
        await CallsCategories.PostCategory(nombre, descripcion)
        Swal.fire('Agregado', 'Categoría agregada', 'success')
      }
      // Limpia los campos y recarga la lista
      setNombre('')
      setDescripcion('')
      setEditId(null)
      fetchCategorias()
    } catch (error) {
      // Muestra un error si algo falla
      Swal.fire('Error', 'No se pudo guardar la categoría', 'error')
    }
  }

  // Cuando se presiona "Editar", llena los campos con los datos de la categoría seleccionada
  const handleEdit = (cat) => {
    setEditId(cat.id)
    setNombre(cat.nombre)
    setDescripcion(cat.descripcion)
  }

  // Maneja la eliminación de una categoría con confirmación
  const handleDelete = async (id) => {
    if (window.confirm('¿Eliminar esta categoría?')) {
      await CallsCategories.DeleteCategory(id)
      fetchCategorias()
    }
  }

  // Renderiza el formulario y la lista de categorías
  return (
    <div>
      {/* Formulario para agregar o editar categorías */}
      <form onSubmit={handleSubmit}>
        <h2>Categorías</h2>
        <label>Nombre</label>
        {/* Input para el nombre */}
        <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" required />
        <label>Descripción</label>
        {/* Input para la descripción */}
        <input value={descripcion} onChange={e => setDescripcion(e.target.value)} type="text" />
        {/* Botón cambia de texto según si se edita o agrega */}
        <button type="submit">{editId ? 'Actualizar' : 'Agregar'}</button>
      </form>
      {/* Lista de categorías */}
      <ul>
        {categorias.map(cat => (
          <li key={cat.id}>
            {/* Muestra nombre y descripción */}
            {cat.nombre} - {cat.descripcion}
            {/* Botón para editar la categoría */}
            <button onClick={() => handleEdit(cat)}>Editar</button>
            {/* Botón para eliminar la categoría */}
            <button onClick={() => handleDelete(cat.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
