import React from "react";
import Logo from "../Components/Logo";
import "../styles/Login.css";
import Input from "../Components/Input";

function Login() {

    return (
        <div className="row login">   
            <section className="d-flex flex-column align-items-center justify-content-center col-6">
                <Logo/>
                <form action="" className="row g-3">
                <Input name = "dni" type = "number" />
                <Input name = "usuario" type = "text" />
                <Input name = "password" type = "password" />
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="recordar_usuario" id="recordar_usuario"/>
                    <label class="form-check-label" for="recordar_usuario">
                        Recordar usuario
                    </label>
                </div>
                </form>
            </section>
            <section className="col-6 bg-body-secondary">
                imagenes
            </section>
        </div>
    );      

}

export default Login;