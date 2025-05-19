import React, { useEffect, useState } from 'react' // Importa React y hooks para estado y efectos
import CallsEmployes from '../services/CallsEmployes' // Importa el servicio para llamadas a la API de empleados
import Swal from 'sweetalert2' // Importa SweetAlert2 para mostrar alertas bonitas

// Componente principal para gestionar empleados
export default function EmployeByHazelCC() {
  // Estados para los campos del formulario de empleado
  const [nombre, setNombre] = useState('') // Nombre del empleado
  const [apellido, setApellido] = useState('') // Apellido del empleado
  const [email, setEmail] = useState('') // Email del empleado
  const [telefono, setTelefono] = useState('') // Teléfono del empleado
  const [fechaContrat, setFechaContrat] = useState('') // Fecha de contratación
  const [cedula, setCedula] = useState('') // Cédula del empleado
  const [empleados, setEmpleados] = useState([]) // Lista de empleados obtenidos de la API
  const [editId, setEditId] = useState(null) // Id del empleado a editar (si se está editando)

  // useEffect se ejecuta una vez al montar el componente para cargar los empleados
  useEffect(() => {
    fetchEmpleados() // Llama a la función para obtener empleados
  }, [])

  // Función para obtener empleados desde la API y actualizar el estado
  const fetchEmpleados = async () => {
    const data = await CallsEmployes.GetEmployes() // Llama al servicio para obtener empleados
    setEmpleados(data) // Actualiza el estado con la lista de empleados
  }

  // Maneja el envío del formulario para agregar o actualizar un empleado
  const handleSubmit = async (e) => {
    e.preventDefault() // Previene el comportamiento por defecto del formulario
    try {
      // Crea el objeto empleado con los datos del formulario
      const empleado = {
        nombre,
        apellido,
        email,
        telefono,
        fecha_contratacion: fechaContrat, // Recordar que el campo debe coincidir con el backend
        cedula
      }
      if (editId) {
        // Si hay un id de edición, actualiza el empleado existente
        await CallsEmployes.UpdateEmployes(editId, empleado)
        Swal.fire('Actualizado', 'Empleado actualizado', 'success')
      } else {
        // Si no, crea un nuevo empleado
        await CallsEmployes.PostEmployes(empleado)
        Swal.fire('Agregado', 'Empleado agregado', 'success')
      }
      // Limpia los campos y recarga la lista
      setNombre('')
      setApellido('')
      setEmail('')
      setTelefono('')
      setFechaContrat('')
      setCedula('')
      setEditId(null)
      fetchEmpleados()
    } catch (error) {
      // Muestra un error si algo falla
      Swal.fire('Error', 'Hubo un error al guardar el empleado.', 'error')
    }
  }

  // Cuando se presiona "Editar", llena los campos con los datos del empleado seleccionado
  const handleEdit = (emp) => {
    setEditId(emp.id)
    setNombre(emp.nombre)
    setApellido(emp.apellido)
    setEmail(emp.email)
    setTelefono(emp.telefono)
    setFechaContrat(emp.fecha_contratacion)
    setCedula(emp.cedula)
  }

  // Maneja la eliminación de un empleado con confirmación
  const handleDelete = async (id) => {
    if (window.confirm('¿Eliminar este empleado?')) {
      await CallsEmployes.DeleteEmploye(id)
      fetchEmpleados()
    }
  }

  // Renderiza el formulario y la lista de empleados
  return (
    <div>
      {/* Formulario para agregar o editar empleados */}
      <form onSubmit={handleSubmit}>
        <h2>Empleados</h2>
        <label>Nombre</label>
        {/* Input para el nombre */}
        <input value={nombre} onChange={e => setNombre(e.target.value)} type="text" placeholder='Nombre del empleado' />
        <label>Apellido</label>
        {/* Input para el apellido */}
        <input value={apellido} onChange={e => setApellido(e.target.value)} type="text" placeholder='Apellido del empleado' />
        <label>Email</label>
        {/* Input para el email */}
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email del empleado' />
        <label>Teléfono</label>
        {/* Input para el teléfono */}
        <input value={telefono} onChange={e => setTelefono(e.target.value)} type="text" placeholder='Teléfono del empleado' />
        <label>Fecha de contratación</label>
        {/* Input para la fecha de contratación */}
        <input value={fechaContrat} onChange={e => setFechaContrat(e.target.value)} type="date" placeholder='Fecha de contratación' />
        <label>Cédula de identidad</label>
        {/* Input para la cédula */}
        <input value={cedula} onChange={e => setCedula(e.target.value)} type="text" placeholder='Cédula de identidad' />
        {/* Botón cambia de texto según si se edita o agrega */}
        <button type="submit">{editId ? 'Actualizar' : 'Agregar'} Empleado</button>
      </form>
      {/* Lista de empleados */}
      <ul>
        {empleados.map(emp => (
          <li key={emp.id}>
            {/* Muestra nombre, apellido y email */}
            {emp.nombre} {emp.apellido} - {emp.email}
            {/* Botón para editar el empleado */}
            <button onClick={() => handleEdit(emp)}>Editar</button>
            {/* Botón para eliminar el empleado */}
            <button onClick={() => handleDelete(emp.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
