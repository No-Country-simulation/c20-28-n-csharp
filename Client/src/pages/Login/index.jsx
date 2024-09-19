import React, { useEffect } from "react";
import Logo from "../../Components/Logo";
import InputField from "../../Components/Inputs/Input-field";
import "./Login.css";
import { Link, } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [error, setError] = React.useState(false);
  //hook para  manejar la redireccion de User
  const navigate = useNavigate();
  //se encarga de los estados de login
  const [text, setText] = React.useState({
    usuario: "",
    clave: "",
  });
  //se encarga de validad el login
  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //consumimos la API
      const res = await fetch("https://bankest.somee.com/api/User/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: text.usuario, // Mapeamos correctamente "usuario"
          password: text.clave, // Mapeamos correctamente "clave"
        }),
      });

      // Si la respuesta es exitosa
      if (res.ok) {
        const data = await res.json();
        console.log("Login exitoso", data);

        // Guardamos el token si existe
        if (data.token) {
          localStorage.setItem("token", data.token);
          const token = localStorage.getItem("token");
          navigate('/Cuenta')

        } else {
          console.log("No se recibió token");
        }
      } else {
        console.error("Error al hacer login", res.status);
        setError(true);
      }
    }
    catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="row login">
      <section className="d-flex flex-column align-items-center justify-content-center col-md-8 position-relative">
        <div className="logo">
          <Logo />
        </div>

        <h2 className="fs-1 pb-5">Inicio Sesión</h2>
        <form
          action=""
          className="row"
          onSubmit={handleSubmit}
        >
          <InputField name="usuario" type="text" value={text.usuario} placeholder="usuario" onChange={handleChange} />
          <InputField name="clave" type="password" value={text.clave} placeholder="clave" onChange={handleChange} />


          <div className="form-check mx-2">
            <input className="form-check-input" type="checkbox" value="recordar_usuario" id="recordar_usuario" />
            <label className="form-check-label fw-light" htmlFor="recordar_usuario">
              Recordar usuario
            </label>
          </div>
          <input
            type="submit"
            className="btn btn-naranja fw-bold mt-4"
            value="iniciar sesión"
          />
        </form>

        <Link to="/Recuperar"
          className="link-underline link-underline-opacity-0 mt-2 link-recuperar fw-bold"
        >
          ¿Olvidaste o bloqueaste tu clave o usuario?
        </Link>

        <Link to="/Register"
          className="text-secondary mt-2 link-underline link-underline-opacity-0">
          No estas registrado?{" "}
          <span
            className="fw-bold text-warning"
          >
            Registrate
          </span>{" "}
        </Link>

      </section>

      <section className="col-md-4 bg-body-secondary d-none d-md-block h-100 p-0">
        <img className="img-fluid w-100 object-fit-cover h-100" src="/src/assets/Login.png" alt="Login banner" />
      </section>

      {error &&
        <div class="alert alert-secondary" role="alert">
          <p>Los datos que ingresaste tienen algún error.</p>
          <p class="mb-0">Por favor revísalos antes de volver a intentarlo, ya que tu usuario y clave pueden bloquearse.</p>
          <p>12365487987456</p>
          <button className="btn btn-warning position-absolute" onClick={() => setError(false)}>Aceptar</button>
        </div>
      }
    </div>
  );
}

export default Login;