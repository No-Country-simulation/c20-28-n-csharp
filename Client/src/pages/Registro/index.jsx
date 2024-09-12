import InputCheck from "../../Components/Inputs/Input-check"
import React from "react";
import { Link } from "react-router-dom";

export function Register() {
  //se encarga de los estados de Registro
  const [text, setText] = React.useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    telefono: "",
    clave: "",
    correo: "",
    validarClave: "",
  });

  // Estado para los errores
  const [errors, setErrors] = React.useState({
    claveNoCoincide: false,
    emailInvalido: false,
  });

  // Función para manejar los cambios en los campos
  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
    setErrors({ claveNoCoincide: false, emailInvalido: false }); // Resetear errores al cambiar
  };

 
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Iniciando solicitud de registro...");

      // Consumimos la API
      const res = await fetch("https://bankest.somee.com/api/User/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: text.correo, // El API requiere 'userName'
          nombre: text.nombre,
          apellidoPaterno: text.apellidoPaterno,
          apellidoMaterno: text.apellidoMaterno,
          password: text.clave,
          telefono: text.telefono,
        }),
      });

      console.log("Solicitud enviada, esperando respuesta...");

      // Obtener el tipo de contenido de la respuesta
      const contentType = res.headers.get("content-type");

      // Manejar respuesta exitosa
      if (res.ok) {
        if (contentType && contentType.includes("application/json")) {
          const data = await res.json();
          console.log("Registro exitoso", data);

          if (data.token) {
            localStorage.setItem("token", data.token);
          } else {
            console.log("No se recibió token en la respuesta");
          }
        } else {
          const textResponse = await res.text();
          console.log("Respuesta no JSON recibida:", textResponse);
        }
      } else {
        const errorText = await res.text();
        console.error("Error en el registro:", res.status, errorText);
      }
    } catch (error) {
      console.error("Error en la solicitud de registro:", error);
    }
  };


  return (
    <>
      <header>
        <nav className="navbar navbar-light bg-secondary-subtle">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <div className="circle mx-2 bg-light text-body-tertiary"></div>
            </Link>
            <h1>Registro</h1>
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
          onSubmit={handleSubmit}
          style={{ padding: "50px", boxSizing: "border-box" }}
        >
          <section className="row">
            <div className="col-6">
              <InputCheck
                name="nombre"
                value={text.nombre}
                type="text"
                onChange={handleChange}
              />
            </div>

            <div className="col-6">
              <InputCheck
                name="apellidoPaterno"
                value={text.apellidoPaterno}
                type="text"
                onChange={handleChange}
              />
            </div>

            <div className="col-6">
              <InputCheck
                name="apellidoMaterno"
                value={text.apellidoMaterno}
                type="text"
                onChange={handleChange}
              />
            </div>

            <div className="col-6">
              <InputCheck
                name="telefono"
                value={text.telefono}
                type="number"
                onChange={handleChange}
              />
            </div>

            <div className="col-6">
              <InputCheck
                name="correo"
                value={text.correo}
                type="text"
                onChange={handleChange}
              />
            </div>

            <div className="col-6">
              <InputCheck
                name="clave"
                value={text.clave}
                type="password"
                onChange={handleChange}
              />
            </div>

            <div className="col-6">
              <InputCheck
                name="validarClave"
                value={text.validarClave}
                type="password"
                onChange={handleChange}
              />
            </div>
          </section>
          <section className="d-flex flex-column align-items-center justify-content-center">
            <div className="form-check mx-2">
              <input
                className="form-check-input"
                type="checkbox"
                value="terminos_condiciones"
                id="terminos_condiciones"
              />
              <label
                className="form-check-label text-secondary"
                htmlFor="terminos_condiciones"
              >
                Aceptar <b>Términos y condiciones</b>
              </label>
            </div>
            <input
              type="submit"
              className="btn btn-secondary mt-4"
              value="Registrarse"
            />
          </section>
        </form>
      </main>
    </>
  );
}

