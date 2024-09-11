import React from "react";
import Navegacion from "../../Components/Navegacion/Navegacion";

function User(){
    //links de page user
    const links = [
      { to: "#", text: "Inicio" },
      { to: "#", text: "Cuenta" },
      { to: "#", text: "Transferencias" },
      { to: "#", text: "Gestion de Gastos" },
      { to: "#", text: "Pago de Servicios" },
      { to: "#", text: "Ayuda" },
      { to: "#", text: "Cerrar Sesion" },
    ];
    return (
      <>
        <div>
          <h1>Inicio</h1>
          <Navegacion links={links} />
        </div>
      </>
    );
}
export default User;