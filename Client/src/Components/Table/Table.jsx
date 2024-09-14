import React from "react";

function Table({titulo,columnas,datos}) {

    return (
        <div className="container mt-5">
            <h3 className="title d-flex align-items-center justify-content-between">{titulo}<p style={{color: " #F39C12", fontSize: "18px", fontWeight: 700}}>OCULTAR HISTORIAL <i style={{color:"gray", fontSize: "25px",}} className="fa-solid fa-eye-slash"></i></p></h3>
            <table className="table" style={{borderColor:"#F3F3F3"}}>
                <thead  style={{fontSize:"22px"}}>
                    <tr>
                        {columnas.map((columna, index) => (<th key={index} scope="col" style={{ backgroundColor: "#F3F3F3", color: "#2C3E50" }} className="text-center">{columna}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {datos.map((fila, rowIndex) => (<tr key={rowIndex}>
                        {columnas.map((columna, colIndex) => (
                            <td key={colIndex}><p style={{ fontSize: "20px", fontWeight: "400", color: "#2C3E50" }}></p><h6 className="text-center" style={{ fontSize: "22px", fontWeight: "600", color: "#2C3E50" }}>{fila[columna]}</h6></td>

                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
            <h3 className="foot-text">DESCARGAR MOVIMIENTOS</h3>
        </div>
    );

}
export default Table;