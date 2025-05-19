// Importamos los componentes necesarios de react-router-dom para el enrutamiento
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 
// Importamos las páginas que se mostrarán según la ruta
import DashProducts from '../pages/DashProducts';
import DashCategories from '../pages/DashCategories';
import DashEmployes from '../pages/DashEmployes';

// Definimos el componente principal de enrutamiento
function RoutingByHazel() {
  return (
    // Usamos un div como contenedor principal
    <div>
      {/* Router envuelve toda la aplicación para habilitar el enrutamiento */}
      <Router>
        {/* Routes contiene todas las rutas de la aplicación */}
        <Routes>
          {/* Redirige la ruta raíz "/" a "/productos" */}
          <Route path="/" element={<Navigate to="/productos" />} />
          {/* Muestra DashProducts cuando la ruta es "/productos" */}
          <Route path="/productos" element={<DashProducts />} />
          {/* Muestra DashCategories cuando la ruta es "/categorias" */}
          <Route path="/categorias" element={<DashCategories />} />
          {/* Muestra DashEmployes cuando la ruta es "/empleados" */}
          <Route path="/empleados" element={<DashEmployes />} />
        </Routes>
      </Router>
    </div>
  );
}

// Exportamos el componente RountigByHazel para que pueda ser utilizado en otros archivos
export default RoutingByHazel;
