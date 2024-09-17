import {InputCheck} from "../../Components/Inputs/Inputs"
import React from "react";
import { Link } from "react-router-dom";
import "../Registro/registro.css"
import Logo from "../../Components/Logo";


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
    claveInvalida: false,
  });
  //Estado para los mensajes de registro
  const [mensaje, setMensaje] = React.useState('');

  // Expresión regular para validar el formato de correo
  const esEmailValido = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  };

  // Función para manejar los cambios en los campos
  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
    setErrors({ claveNoCoincide: false, emailInvalido: false }); // Resetear errores al cambiar
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    let emailInvalido = false;
    let claveNoCoincide = false;

    // Validar el formato del correo
    if (!esEmailValido(text.correo)) {
      emailInvalido = true;
    }

    // Validar que las contraseñas coincidan
    if (text.clave !== text.validarClave) {
      claveNoCoincide = true;
    }

    // Si hay errores, actualizamos el estado de errores y no procedemos
    if (emailInvalido || claveNoCoincide) {
      setErrors({ claveNoCoincide, emailInvalido });
      return;
    }

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
          setMensaje("Registro exitoso", data);

          if (data.token) {
            localStorage.setItem("token", data.token);
          } else {
            console.log("No se recibió token en la respuesta");
          }
        } else {
          const textResponse = await res.text();
          setMensaje("Exito en registro", textResponse);
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
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <Logo/>
            <Link to="/" className="nav-link ms-auto txt-lima fw-bold fs-4 text-uppercase">
              &lt; Volver
            </Link>
          </div>
        </nav>
      </header>

      <main className="container-md mt-5 register">
        <form
          action=""
          className="p-2 p-md-4 p-lg-5"
          onSubmit={handleSubmit}
        >
          <section className="row">
            <div className="col-lg-6">
              <InputCheck
                name="nombre"
                value={text.nombre}
                type="text"
                onChange={handleChange}
              />
            </div>

            <div className="col-lg-6">
              <InputCheck
                name="apellidoPaterno"
                value={text.apellidoPaterno}
                type="text"
                onChange={handleChange}
              />
            </div>

            <div className="col-lg-6">
              <InputCheck
                name="apellidoMaterno"
                value={text.apellidoMaterno}
                type="text"
                onChange={handleChange}
              />
            </div>

            <div className="col-lg-6">
              <InputCheck
                name="telefono"
                value={text.telefono}
                type="number"
                onChange={handleChange}
              />
            </div>

            <div className="col-lg-6">
              <InputCheck
                name="correo"
                value={text.correo}
                type="text"
                onChange={handleChange}
              />
              {errors.emailInvalido && (
                <p className="text-danger">* El correo no es válido.</p>
              )}
            </div>

            <div className="col-lg-6">
              <InputCheck
                name="clave"
                value={text.clave}
                type="password"
                onChange={handleChange}
              />

              {errors.claveInvalida && (
                <p className="text-danger">
                  * La contraseña debe tener al menos 8 caracteres, una mayúscula,
                  un número y un carácter especial.
                </p>
              )}
            </div>

            <div className="col-lg-6">
              <InputCheck
                name="validarClave"
                value={text.validarClave}
                type="password"
                onChange={handleChange}
              />
              {errors.claveNoCoincide && (
                <p className="text-danger">* La contraseña no coincide.</p>
              )}
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
                Aceptar <b className="txt-lima">Términos y condiciones</b>
              </label>
            </div>
            <div>
              <input
                type="submit"
                className="btn btn-naranja mt-4"
                value="Registrarse"
              />
              {mensaje && <p className="message">{mensaje}</p>}
            </div>
          </section>
        </form>
      </main>
    </>
  );
}

