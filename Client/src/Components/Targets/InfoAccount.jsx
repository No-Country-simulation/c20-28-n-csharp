import React from "react";
import { useState } from "react";
import "../../styles/infoAccount.css";
import "./Targets.css";

function InfoAccount(props) {
    const [show, setShow] = useState(true);
    const [showDataTarget, setShowDataTarget] = useState(true);
    return (
        <div className="container mt-1 ms-2">
            <div className="account-balance">
                <h3 className="title">Cuenta Ahorro en pesos</h3>
                <div className="balance">
                    {show ?

                        <div className="icono">
                            <i className="fa-solid fa-eye-slash" onClick={() => setShow(!show)}></i>
                        </div>
                        :
                        <div className="icono">
                            <i className="fa-solid fa-eye" onClick={() => setShow(true)}></i>
                        </div>

                    }
                    {show ? <div className="value-b"> $&nbsp;{new Intl.NumberFormat().format(props.saldo)}</div> : <div className="value-b"> $&nbsp;*****<sup>***</sup> </div>}
                </div>
            </div>
        

            <div className="Account-data">
                <h3 className="title">Datos de la cuenta&nbsp;&nbsp;<i class="fa-regular fa-copy"></i></h3>
                <span>CBU: {props.numeroCuenta}</span>
                <span>Alias: SILLA.PLATO.TELE</span>
                <span>Titular de cuenta: {props.nombre} {props.apellidoPaterno} {props.apellidoMaterno}</span>
            </div>

            
            <div className="Tarjeta mt-5">
            <h3>Tarjeta</h3>
            {showDataTarget ? <>
                <div className="tarjeta-carton bg-black d-flex justify-content-center align-content-center flex-column p-5">
                    <i className="fa-regular fa-eye-slash" onClick={() => setShowDataTarget(!showDataTarget)}></i>
                    <img className='pajarito_logo img img-fluid ' src="/src/assets/pajarito_logo.png" alt="pajarito" />
                    <h3 className='mb-4 mt-4'>{props.nombre} {props.apellidoPaterno} {props.apellidoMaterno}</h3>
                    <p>Vto: {props.fecha_venc}</p>
                    <p>{props.nro}</p>
                </div>
            </>
                :
                <>
                    <div className="tarjeta-carton bg-black d-flex justify-content-center align-content-center flex-column p-5">
                        <i className="fa-regular fa-eye" onClick={() => setShowDataTarget(true)} style={{color:"white",alignSelf:"end",marginTop:"20px"}}></i>
                        <img className='pajarito_logo img img-fluid ' src="/src/assets/pajarito_logo.png" alt="pajarito" />
                        <h3 className='mb-4 mt-4'>******* ******</h3>
                        <p>Vto: *********</p>
                        <p>*******</p>
                    </div>

                </>
            }
            </div>

        </div>

    );
}

export default InfoAccount;