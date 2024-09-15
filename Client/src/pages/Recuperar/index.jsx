import {InputField} from "../../Components/Inputs/Inputs";
import React from "react";
import { Link } from "react-router-dom";


function Recuperar() {
  //se encarga de los estados 
  const [text, setText] = React.useState({
    telefono: "",
    nombreCompleto: "",
    correo: "",
  });

  //se encarga de validar los campos 
  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-light bg-secondary-subtle">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <div className="circle mx-2 bg-light text-body-tertiary"></div>
            </Link>
                <h1>Recupera cuenta</h1>
            <Link to="/login" className="nav-link ms-auto ">
              &lt; Login
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mt-5 register">
        <form
          action=""
          className="bg-secondary-subtle"
          style={{ padding: "50px", boxSizing: "border-box" }}
        >
          <section className="row">
            <div className="col-6">
              <InputField
                name="Numero de Teléfono"
                value={text.telefono}
                type="number"
                onChange={handleChange}
              />
            </div>

            <div className="col-6">
              <InputField
                name="Nombre Completo"
                value={text.nombreCompleto}
                type="text"
                onChange={handleChange}
              />
            </div>

            <div className="col-6">
              <InputField
                name="Correo electrónico"
                value={text.correo}
                type="text"
                onChange={handleChange}
              />
            </div>
          </section>

          <section className="d-flex flex-column align-items-center justify-content-center">
            <input
              type="submit"
              className="btn btn-secondary mt-4"
              value="Recuperar"
            />
          </section>
        </form>
      </main>
    </>
  );
}
export default Recuperar;
