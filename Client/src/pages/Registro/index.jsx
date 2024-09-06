import InputField from "../../Components/Inputs/Input-field";
import React from "react";
export function Register() {
    const [text, setText] = React.useState({
        dni: "",
        telefono: "",
        nombreCompleto: "",
        clave: "",
        correo: "",
        validarClave:""

    });
    const handleChange = (e) => {
        setText({
            ...text,
            [e.target.name]: e.target.value
        });
    }
    return (
        <>
            <header>
            <nav className="navbar navbar-light bg-secondary-subtle">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <div className="circle mx-2 bg-light text-body-tertiary"></div>
                    </a>
                    <a className="nav-link ms-auto " href="/login">&lt; Login</a>
                </div>
            </nav>



            </header>
            <main className="container mt-5 register" >
                
                <form action="" className="bg-secondary-subtle"  style={{ padding: '50px', boxSizing: 'border-box' }}>
                <section className="row">
                    <div className="col-6">
                        <InputField name="DNI" value={text.dni} type="number" onChange={setText}/>
                    </div>
                    <div className="col-6">
                        <InputField name="Numero de Teléfono" value={text.telefono} type="number" onChange={setText}/>
                    </div>
                    <div className="col-6">
                        <InputField name="Nombre Completo" value={text.nombreCompleto} type="text" onChange={setText}/>
                    </div>
                    <div className="col-6">
                        <InputField name="Contraseña" value={text.clave} type="password" onChange={setText}/>
                    </div>
                    <div className="col-6">
                        <InputField name="Correo electrónico" value={text.correo} type="text" onChange={setText}/>
                    </div>
                    <div className="col-6">
                        <InputField name="Repetir contraseña" value={text.validarClave} type="password" onChange={setText}/>
                    </div>
                </section>
                <section className="d-flex flex-column align-items-center justify-content-center">
                    <div className="form-check mx-2">
                        <input className="form-check-input" type="checkbox" value="terminos_condiciones" id="terminos_condiciones"/>
                        <label className="form-check-label text-secondary" htmlFor="terminos_condiciones">
                            Aceptar <b>Términos y condiciones</b>
                        </label>
                    </div>
                    <input type="submit" className="btn btn-secondary mt-4" value="Registrarse"/>
                </section>
                
                </form>
            </main>
        </>
    )
}