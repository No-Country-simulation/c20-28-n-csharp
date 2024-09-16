import React from "react";
import { useState } from "react";

function Table({ titulo, columnas, datos }) {

    const [showTable, setShowTable] = useState(true);
    return (
        <div className="container mt-5">
            <h3 className="title d-flex align-items-center justify-content-between" style={{fontFamily: "Roboto ,sans-serif",fontStyle: "normal",fontWeight : "500"}}>{titulo}{showTable ? <p style={{
                color: " #F39C12", fontSize: "18px", fontWeight: 700, fontFamily: "Inter",
                fontStyle: "normal"
            }}>OCULTAR HISTORIAL <i style={{ color: "gray", fontSize: "25px", }} className="fa-solid fa-eye-slash" onClick={() => setShowTable(!showTable)}></i></p>
                : <p style={{
                    color: " #F39C12", fontSize: "18px", fontWeight: 700, fontFamily: "Inter", fontStyle: "normal"
                }}>MOSTRAR HISTORIAL <i style={{ color: "gray", fontSize: "25px", }} className="fa-solid fa-eye" onClick={() => setShowTable(true)}></i></p>
            }</h3>
            {showTable ? 
            <table className="table" style={{ borderColor: "#F3F3F3" }}>
                <thead style={{ fontSize: "22px" }}>
                        <tr>
                            {columnas.map((columna, index) => (<th key={index} scope="col" style={{
                                backgroundColor: "#F3F3F3", color: "#2C3E50", fontFamily: "Inter, sans-serif", fontWeight: "500",
                                fontStyle: "normal"
                            }} className="text-center">{columna}</th>))}
                        </tr>
                </thead>
                    <tbody>
                        {datos.map((fila, rowIndex) => (<tr key={rowIndex}>
                            {columnas.map((columna, colIndex) => (
                                <td key={colIndex}><p style={{
                                    fontSize: "20px", fontWeight: "500", color: "#2C3E50", fontFamily: "Inter, sans-serif",
                                    fontStyle: "normal"
                                }}></p><h6 className="text-center" style={{
                                    fontSize: "22px", fontWeight: "600", color: "#2C3E50", fontFamily: "Inter, sans-serif",
                                    fontStyle: "normal"
                                }}>{fila[columna]}</h6></td>

                            ))}
                        </tr>
                        ))}
                    </tbody>
            </table>

            :

            <table className="table" style={{ borderColor: "#F3F3F3" }}>
                <thead style={{ fontSize: "22px" }}>
                    <tr>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>                       
                        <td>
                            <p style={{ fontSize: "20px", fontWeight: "400", color: "#2C3E50" }}></p>
                            <h6 className="text-center" style={{ fontSize: "22px", fontWeight: "600", color: "#2C3E50" }}></h6>
                        </td>                     
                    </tr>
                </tbody>
            </table>                  
        }

        </div>
    );

}
export default Table;