import React from "react";
import "../../styles/TargetTransf.css"

export function Target(props) {

    return(

        <div className="card-container d-flex align-items-center my-2 mx-2">
            <div className="cuadro me-3">
            </div>
            <div className="text">{props.texto}</div>
        </div>

    );
    
}

export function BtnSearch(){
    return(
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