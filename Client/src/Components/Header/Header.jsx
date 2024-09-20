import React from "react";
import Logo from "../../Components/Logo/index"

export function  Header(props){
    return (
        <div className="header-container d-flex justify-content-between px-3 pt-2">
            <h1 className="page-title mt-5" style={{ color: "#2C3E50", fontSize: "34px", fontWeight: 700, paddingBottom: "2px",
                borderBottom: "3px solid #F39C12",alignContent:"flex-end"}}>{props.tituloPagina}</h1>
            <Logo />
        </div>
    )
}