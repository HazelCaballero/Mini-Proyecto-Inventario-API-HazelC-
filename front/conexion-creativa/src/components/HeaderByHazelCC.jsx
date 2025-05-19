// Importamos React para poder crear componentes funcionales en React
import React from 'react';
// Importamos el hook useNavigate de react-router-dom para poder navegar entre diferentes rutas de la aplicación
import { useNavigate } from 'react-router-dom';

// Definimos el componente funcional HeaderByHazelCC
function HeaderByHazelCC() {
  // Inicializamos el hook useNavigate y lo guardamos en la constante 'navigate'
  // Esto nos permite redirigir al usuario a diferentes rutas 
  const navigate = useNavigate();

  // Definimos una función llamada handleNavigation que recibe una ruta como parámetro
  // Cuando se llama a esta función, redirige al usuario a la ruta especificada usando navigate
  const handleNavigation = (route) => {
    navigate(route); // Redirige a la ruta indicada
  };

  // El componente retorna JSX que representa la estructura visual del encabezado
  return (
    // Contenedor principal con la clase CSS 'HeaderContainer'
    <div className="HeaderContainer">
      <header>
        {/* Título principal del panel de control con la clase CSS 'HeaderText' */}
        <h1 className='HeaderText'>Panel de control</h1>
      </header>
    </div>
  );
}

// Exportamos el componente HeaderByHazelCC para que pueda ser utilizado en otras partes de la aplicación
export default HeaderByHazelCC;
