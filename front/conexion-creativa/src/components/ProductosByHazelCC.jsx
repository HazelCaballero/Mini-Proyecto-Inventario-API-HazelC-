import React, { useState, useEffect } from 'react' // Importa React y hooks para estado y efectos secundarios
import Swal from 'sweetalert2' // Importa SweetAlert2 para mostrar alertas bonitas
import CallsProducts from '../services/CallsProducts' // Importa funciones para llamadas a la API de productos

export default function ProductosByHazelCC() {
  // Estados para manejar categorías, productos y los campos del formulario
  const [categorias, setCategorias] = useState([]) // Lista de categorías
  const [productos, setProductos] = useState([]) // Lista de productos
  const [nombre, setNombre] = useState('') // Nombre del producto
  const [descripcion, setDescripcion] = useState('') // Descripción del producto
  const [precio, setPrecio] = useState('') // Precio del producto
  const [stock, setStock] = useState('') // Stock del producto
  const [categoriaId, setCategoriaId] = useState('') // ID de la categoría seleccionada
  const [editId, setEditId] = useState(null) // ID del producto a editar (null si es nuevo)

  // useEffect se ejecuta al montar el componente para cargar categorías y productos
  useEffect(() => {
    getCategorias() // Carga las categorías desde la API
    fetchProductos() // Carga los productos desde la API
  }, [])

  // Función para obtener categorías desde la API
  const getCategorias = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/categorias/`) // Llama a la API de categorías
    const data = await response.json() // Convierte la respuesta a JSON
    setCategorias(data) // Actualiza el estado con las categorías
  }

  // Función para obtener productos usando el servicio CallsProducts
  const fetchProductos = async () => {
    const data = await CallsProducts.GetProducts() // Llama a la función para obtener productos
    setProductos(data) // Actualiza el estado con los productos
  }

  // Maneja el envío del formulario para agregar o actualizar un producto
  const handleSubmit = async (e) => {
    e.preventDefault() // Previene el comportamiento por defecto del formulario
    try {
      // Crea un objeto producto con los datos del formulario
      const producto = {
        nombre,
        descripcion,
        precio,
        stock,
        categoria: categoriaId
      }
      if (editId) {
        // Si hay un editId, actualiza el producto existente
        await CallsProducts.UpdateProduct(editId, producto)
        Swal.fire('Actualizado', 'Producto actualizado', 'success') // Muestra alerta de éxito
      } else {
        // Si no hay editId, agrega un nuevo producto
        await CallsProducts.PostProduct(producto)
        Swal.fire('Agregado', 'Producto agregado', 'success') // Muestra alerta de éxito
      }
      // Limpia los campos del formulario y el estado de edición
      setNombre('')
      setDescripcion('')
      setPrecio('')
      setStock('')
      setCategoriaId('')
      setEditId(null)
      fetchProductos() // Recarga la lista de productos
    } catch (error) {
      Swal.fire('Error', 'Hubo un error al guardar el producto.', 'error') // Muestra alerta de error
    }
  }

  // Llena el formulario con los datos del producto a editar
  const handleEdit = (prod) => {
    setEditId(prod.id) // Establece el ID del producto a editar
    setNombre(prod.nombre)
    setDescripcion(prod.descripcion)
    setPrecio(prod.precio)
    setStock(prod.stock)
    setCategoriaId(prod.categoria)
  }

  // Elimina un producto después de confirmar con el usuario
  const handleDelete = async (id) => {
    if (window.confirm('¿Eliminar este producto?')) { // Pregunta al usuario antes de eliminar
      await CallsProducts.DeleteProduct(id) // Llama a la función para eliminar el producto
      fetchProductos() // Recarga la lista de productos
    }
  }

  // Renderiza el formulario y la lista de productos
  return (
    <div className='productosByHazelCC'>
      <div className='addProductosByHazelCC'>
        <h2>Productos</h2>
        {/* Formulario para agregar o editar productos */}
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" placeholder='Nombre del producto' />
          <label>Descripción</label>
          <input value={descripcion} onChange={e => setDescripcion(e.target.value)} type="text" placeholder='Descripción del producto' />
          <label>Precio</label>
          <input value={precio} onChange={e => setPrecio(e.target.value)} type="number" placeholder='Precio del producto' />
          <label>Stock</label>
          <input value={stock} onChange={e => setStock(e.target.value)} type="number" placeholder='Stock del producto' />
          <label>Categoria</label>
          {/* Selector de categoría */}
          <select value={categoriaId} onChange={e => setCategoriaId(e.target.value)}>
            <option value="">Selecciona una categoría</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nombre}
              </option>
            ))}
          </select>
          {/* Botón para agregar o actualizar producto */}
          <button type="submit">{editId ? 'Actualizar' : 'Agregar'} Producto</button>
        </form>
      </div>
      {/* Lista de productos */}
      <ul>
        {productos.map(prod => (
          <li key={prod.id}>
            {prod.nombre} - {prod.descripcion} - ${prod.precio}
            {/* Botón para editar */}
            <button onClick={() => handleEdit(prod)}>Editar</button>
            {/* Botón para eliminar */}
            <button onClick={() => handleDelete(prod.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}