// Importa la librería principal de React, necesaria para crear componentes y usar JSX
import React from 'react';
// Importa el componente de rutas personalizado, que se encargará de mostrar las diferentes páginas según la URL
import RoutingByHazel from '../src/routes/RoutingByHazel';

// Define el componente principal de la aplicación
function App() {

  // El componente retorna JSX, que describe la interfaz de usuario
  return (
    <>
      {/* Contenedor principal de la aplicación */}
      <div>
        {/* Renderiza el componente de rutas, que mostrará la página correspondiente */}
        <RoutingByHazel />
      </div>
    </>
  )
}

// Exporta el componente App para que pueda ser usado en otros archivos (por ejemplo, en index.js)
export default App
