import React from 'react'; // Importa la librería React para poder usar JSX y crear componentes funcionales
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate de react-router-dom para navegación entre rutas

// Define el componente funcional AsideByHazelCC
function AsideByHazelCC() {
  // Inicializa la función navigate usando el hook useNavigate, que permite cambiar de ruta desde código
  const navigate = useNavigate();

  // Define una función que recibe una ruta y navega a ella usando navigate
  const handleNavigation = (route) => {
    // Llama a navigate con la ruta recibida como argumento para cambiar la página actual
    navigate(route); // 'route' es la ruta a la que se quiere navegar
  };

  // El componente retorna JSX que representa el menú lateral (aside)
  return (
    <div> {/* Contenedor principal del aside */}
      <aside className="aside-container"> {/* Aside con clase para estilos */}
        <ul className="aside-list"> {/* Lista de opciones del menú */}
          {/* Cada elemento <li> es una opción del menú que navega a una ruta diferente al hacer clic */}
          <li onClick={() => handleNavigation('/productos')}>
            {/* Al hacer clic, navega a la ruta '/productos' */}
            Productos
          </li>
          <li onClick={() => handleNavigation('/categorias')}>
            {/* Al hacer clic, navega a la ruta '/categorias' */}
            Categorias
          </li>
          <li onClick={() => handleNavigation('/empleados')}>
            {/* Al hacer clic, navega a la ruta '/empleados' */}
            Empleados
          </li>
        </ul>
      </aside>
    </div>
  );
}

// Exporta el componente para que pueda ser usado en otros archivos
export default AsideByHazelCC;
