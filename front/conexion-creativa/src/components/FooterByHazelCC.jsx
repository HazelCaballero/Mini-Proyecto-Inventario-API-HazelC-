// Importa React para poder usar JSX y componentes funcionales
import React from 'react';
// Importa el hook useNavigate de react-router-dom, aunque en este componente no se utiliza
import { useNavigate } from 'react-router-dom';

// Define el componente funcional FooterByHazelCC
function FooterByHazelCC() {
  // Inicializa el hook useNavigate para navegación programática (no se usa aquí)
  const navigate = useNavigate();

  // Retorna el JSX que representa el pie de página
  return (
    // Contenedor principal con clase para estilos
    <div className="FooterContainer">
      <footer>
        {/* Texto del pie de página, con clase para estilos */}
        <h6 className='FooterText'>Mini proyecto: Inventario By Hazel Caballero</h6>
      </footer>
    </div>
  );
}

// Exporta el componente para que pueda ser usado en otras partes de la aplicación
export default FooterByHazelCC;
