import React from 'react';
import Navegacion from '../../Components/Navegacion/Navegacion';

//funcion de pageMani
function PageMani(){
  //links de navegacion
    const links = [
      { to: "/login", text: "Iniciar sesión" },
      { to: "/register", text: "Registro" },
      { to: "/transferencia", text: "transferencia" },
      { to: "/cuenta", text: "cuenta" },
    ]; 

    return (
      <>
        <div>
          <h1>Página de Inicio</h1>
          <Navegacion links={links}/>
        </div>
      </>
    );
}

export default PageMani;