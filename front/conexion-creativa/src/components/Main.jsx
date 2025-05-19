import React from 'react'; // Importa la librería React para poder usar JSX y componentes


// Componente funcional llamado Main que recibe 'children' como prop
function Main({ children }) {
  return (
    // Renderiza un elemento <main> con la clase CSS 'main-container'
    <main className="main-container">
      {children} {/* Renderiza los componentes hijos que se pasen a Main */}
    </main>
  );
}

// Exporta el componente Main para que pueda ser usado en otros archivos
export default Main;
