import React from "react";
import Logo from "../Components/Logo/Logo";
import InputField from "../Components/Inputs/Input-field";
import "../styles/Login.css";

function Login() {
    const [text, setText] = React.useState({
        dni: "",
        usuario: "",
        clave: ""
    });
    const handleChange = (e) => {
        setText({
            ...text,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
             const res = await fetch("api_url/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(text)
            });
            const data = await res.json();
            if (res.ok) {
                // manejar esto (como ni idea xd)
                console.log("login exitoso", data);
            } 
            else {
                console.log("login fallido", data);
            }
        }
        catch (error) {
            console.log("error", error);
        }
    }
    return (
        <div className="row login">   
            <section className="d-flex flex-column align-items-center justify-content-center col-md-6">
                <div className="logo">
                    <Logo/>
                </div>
                <h2 className="fs-3 text-secondary">Inicio Sesión</h2>
                <form action="" className="row" onSubmit={handleSubmit}>
                <InputField name = "dni" type = "number" value={text.dni} onChange={handleChange}/>
                <InputField name = "usuario" type = "text" value={text.usuario} onChange={handleChange} />
                <InputField name = "clave" type = "password" value={text.clave} onChange={handleChange}/>
                <div className="form-check mx-2">
                    <input className="form-check-input bg-secondary-subtle" type="checkbox" value="recordar_usuario" id="recordar_usuario"/>
                    <label className="form-check-label" htmlFor="recordar_usuario">
                        Recordar usuario
                    </label>
                </div>
                <input type="submit" className="btn btn-secondary mt-4" value="INICIAR SESIÓN"/>
                </form>
                <a href="#" className="link-underline link-underline-opacity-0 link-secondary mt-2" >Olvidaste o bloqueaste tu clave o usuario?</a>
                <p href="#" className="text-secondary mt-2">No estas registrado? <a href="#" className="link-underline link-underline-opacity-0 link-dark">Registrate</a> </p>
            </section>
            <section className="col-md-6 bg-body-secondary d-none d-md-block">
                imagenes
            </section>
        </div>
    );      

}

export default Login;