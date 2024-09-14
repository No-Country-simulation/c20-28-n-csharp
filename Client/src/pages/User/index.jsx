import React from "react";
import Navegacion from "../../Components/Navegacion/Navegacion";
import InfoAccount from "../../Components/InfoAccount/InfoAccount";
import AccountMoves from "../../Components/AccountMoves/AccountMoves";


function User(){
    //links de page user
    const links = [
      { to: "/", text: "Inicio" },
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
          <h1>Cuenta</h1>
          <Navegacion links={links} />
        </div>
        
        <div className="row">
          <section className="col-4">
            <InfoAccount />
          </section>
          <section className="col-7">
            <AccountMoves />
          </section>
        </div>
      </>
    );
}
export default User;