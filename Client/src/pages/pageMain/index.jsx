import React from 'react';
import NavMain from '../../Components/Navegacion/NavMain';

//funcion de pageMani
function PageMani(){
  //links de navegacion
    const links = [
      { to: "/login", text: "Iniciar sesión" },
      { to: "/register", text: "Quiero una cuenta" },
      { to: "/info", text: "Quiero más información" },
    ];

    return (
      <>
        <div>
          <h1>Página de Inicio</h1>
          <NavMain links={links}/>
        </div>
      </>
    );
}

export default PageMani;