import React from 'react'
// Importa el componente de encabezado personalizado
import HeaderByHazelCC from '../components/HeaderByHazelCC'
// Importa el componente principal (contenedor principal de la página)
import Main from '../components/Main'
// Importa el componente de barra lateral
import AsideByHazelCC from '../components/AsideByHazelCC'
// Importa el componente de pie de página
import FooterByHazelCC from '../components/FooterByHazelCC'
// Importa el componente de categorías
import CategoriasByHazelCC from '../components/CategoriasByHazelCC';


// Componente principal de la página de categorías del dashboard
export default function DashCategories() {
  return (
    // Contenedor principal de toda la página
    <div>
        {/* Contenedor del encabezado */}
        <div className="header-container">
        <HeaderByHazelCC /> 
        </div>

        {/* Contenedor de la barra lateral */}
        <div className="aside-container">
        <AsideByHazelCC />
        </div>

        {/* Contenedor principal donde se muestra el contenido central */}
        <div className="main-container">
        <Main>
          {/* Aquí se muestra el componente de categorías */}
          <CategoriasByHazelCC />
        </Main>
        </div>

        {/* Contenedor del pie de página */}
        <div className="footer-container">
        <FooterByHazelCC />
        </div> 
    </div>
  )
}
