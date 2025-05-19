// Importa React para poder usar JSX y componentes funcionales
import React from 'react'
// Importa el componente de encabezado personalizado
import HeaderByHazelCC from '../components/HeaderByHazelCC'
// Importa el componente de barra lateral (menú de navegación)
import AsideByHazelCC from '../components/AsideByHazelCC'
// Importa el componente Main, que sirve como contenedor principal del contenido central
import Main from '../components/Main'
// Importa el componente de pie de página personalizado
import FooterByHazelCC from '../components/FooterByHazelCC'
// Importa el componente que gestiona productos (formulario y lista)
import ProductosByHazelCC from '../components/ProductosByHazelCC'

// Define el componente principal de la página de productos del dashboard
export default function DashBoerByHazel() {
  // El componente retorna la estructura visual de la página de productos
  return (
    // Contenedor principal de toda la página
    <div>
        {/* Contenedor del encabezado */}
        <div className="header-container">
          {/* Renderiza el encabezado */}
          <HeaderByHazelCC /> 
        </div>

        {/* Contenedor de la barra lateral */}
        <div className="aside-container">
          {/* Renderiza la barra lateral de navegación */}
          <AsideByHazelCC />
        </div>

        {/* Contenedor principal donde se muestra el contenido central */}
        <div className="main-container">
          {/* Renderiza el componente Main, que a su vez contiene el componente de productos */}
          <Main>
            {/* Aquí se muestra el formulario y la lista de productos */}
            <ProductosByHazelCC />
          </Main>
        </div>

        {/* Contenedor del pie de página */}
        <div className="footer-container">
          {/* Renderiza el pie de página */}
          <FooterByHazelCC />
        </div>
   
   </div>
  )
}
