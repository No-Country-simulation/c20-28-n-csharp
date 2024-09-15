import React from "react";
import Logo from "../../Components/Logo";
import InputField from "../../Components/Inputs/Input-field";
import "../Login/Login.css";
import { Link, } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
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

          navigate('/User')

        } else {
          console.log("No se recibió token");
        }
      } else {
        console.error("Error al hacer login", res.status);
      }
    } 
    catch (error) {
      console.log("Error", error);
    }
};
  return (
    <div className="row login">
      <section className="d-flex flex-column align-items-center justify-content-center col-md-6">


      
        <div className="logo">
          <Logo />
        </div>

        <h2 className="fs-3 text-secondary">Inicio Sesión</h2>
        <form 
          action="" 
          className="row" 
          onSubmit={handleSubmit}
        >

          <InputField
            name="usuario"
            type="text"
            value={text.usuario}
            onChange={handleChange}
          />

          <InputField
            name="clave"
            type="password"
            value={text.clave}
            onChange={handleChange}
          />

          <div className="form-check mx-2">
            <input
              className="form-check-input bg-secondary-subtle"
              type="checkbox"
              value="recordar_usuario"
              id="recordar_usuario"
            />
            <label className="form-check-label" htmlFor="recordar_usuario">
              Recordar usuario
            </label>
          </div>

          <input
            type="submit"
            className="btn btn-secondary mt-4"
            value="INICIAR SESIÓN"
          />
        </form>

        <Link to="/Recuperar"
          className="link-underline link-underline-opacity-0 link-secondary mt-2"
        >
          Olvidaste o bloqueaste tu clave o usuario?
        </Link>

        <Link to="/Register" 
        className="text-secondary mt-2">
          No estas registrado?{" "}
          <span
            className="link-underline link-underline-opacity-0 link-dark"
          >
            Registrate
          </span>{" "}
        </Link>

      </section>

      <section className="col-md-6 bg-body-secondary d-none d-md-block">
        imagenes
      </section>
    </div>
  );
}

export default Login;