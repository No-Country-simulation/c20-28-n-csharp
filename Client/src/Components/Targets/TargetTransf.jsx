import React from "react";
import "../../styles/TargetTransf.css";
import { useNavigate } from "react-router-dom";

export function Target(props) {
    const navigate = useNavigate();

    return (

        <>
        <p className="fw-bold fs-3">Tranferencias</p>
        <div className="card-container d-flex align-items-center my-2 mx-2" onClick={() => navigate(props.enlace)}>
            <div className="cuadro me-3">
            </div>
            <div className="text">{props.texto}</div>
        </div>
        </>
        

    );

}

export function BtnSearch() {
    return (
        <div className="btnbuscar d-flex">
            <i className="fa-solid fa-magnifying-glass"></i>
            <div className="textBuscar ms-4">Buscar contactos</div>
        </div>
    )
}

export function CardContactos(props) {
    if (props.nuevoContacto == true) {
        return (
            <div className="card-contacto d-flex my-2 mx-2">
                <div className="circulo mb-3">
                    <i className="fa-solid fa-plus"></i>
                </div>
                <div className="nombre">{props.nombre} {props.apellido}</div>
            </div>

        );
    }
    else {
        return (
            <div className="card-contacto d-flex my-2 mx-2">
                <div className="circulo mb-3">
                </div>
                <div className="nombre">{props.nombre} {props.apellido}</div>
            </div>

        );
    }

}

export function CardTransfer(props) {
    if (props.MontoATransferir == null || props.MontoATransferir == "" || props.MontoATransferir == 0) {
        return (
            <div className="Data-transfer">
                <h3 className="titulo">Cuenta a transferir</h3>
                <span>Cuenta Galicia</span>
                <span>CBU: {props.CBU}</span>
                <span>Alias: {props.alias}</span>
                <span>Titular de cuenta: {props.nombre} {props.apellido}</span>
            </div>
        );
    }
    else{
        return (
            <div className="Data-transfer">
                <h3 className="titulo mt-4">Cuenta a transferir</h3>
                <span>Cuenta Galicia</span>
                <span>CBU: {props.CBU}</span>
                <span>Alias: {props.alias}</span>
                <span>Titular de cuenta: {props.nombre} {props.apellido}</span>
                <h3 className="titulo my-4">Monto a transferir: $ {props.MontoATransferir}</h3>
                <h3 className="titulo mb-3">Concepto: {props.concepto}</h3>
            </div>
        );
    }
}

export function TransferenciaRealizadaCard(props){
        return (
            <div className="Data-transfer my-5">
                <span>Se han transferido ${props.valorTransferencia}</span>
                <span>Destinatario: {props.destinatario}</span>
                <span>Remitente: {props.remitente}</span>
                <span>CBU {props.CBU}</span>
            </div>
        );
    
}

