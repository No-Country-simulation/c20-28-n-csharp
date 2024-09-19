import React from "react";
import Saldo from "../Saldo/index";

function AccountMoves() {

    return (
        <div className="container mt-5">
            <h3 className="title d-flex justify-content-between">
                Movimientos de cuenta
                <i class="fa-solid fa-maximize"></i>
            </h3>
            <table className="table" 
                    style={{borderColor:"#F3F3F3"}}
            >
                <thead  style={{fontSize:"22px"}}>
                    <tr>
                        <th 
                            scope="col" 
                            style={{ backgroundColor: "#F3F3F3", color: "#2C3E50" }} 
                            className="text-center">
                            Detalle
                        </th>
                        <th 
                            scope="col" 
                            style={{ backgroundColor: "#F3F3F3" }}>
                        </th>
                        <th 
                            scope="col" 
                            style={{ backgroundColor: "#F3F3F3" }}>
                        </th>
                        <th 
                            scope="col" 
                            style={{ backgroundColor: "#F3F3F3" }}>
                        </th>
                        <th 
                            scope="col" 
                            style={{ backgroundColor: "#F3F3F3", color: "#2C3E50" }} 
                            className="text-center">
                            Filtrar por 
                        <i class="fa-solid fa-arrow-down"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th 
                            scope="row" 
                            className="text-center">
                            <i 
                            class="fa-solid fa-paper-plane">
                            </i>
                        </th>
                        <td>
                        <p 
                        style={{fontSize: "20px",fontWeight:"400", color:"#2C3E50"}}>
                            Fecha 
                        </p>
                        <h6 
                         style={{fontSize: "22px",fontWeight:"600", color:"#2C3E50"}}>
                         28/08/24
                        </h6>
                        </td>
                        <td>
                            <p 
                                style={{fontSize: "20px",fontWeight:"400", color:"#2C3E50"}}>
                                    Detalle 
                            </p>
                             <h6 
                                style={{fontSize: "22px",fontWeight:"600", color:"#2C3E50"}}>
                                    Transferencia
                            </h6>
                        </td>
                        <td>
                            <p 
                                style={{fontSize: "20px",fontWeight:"400", color:"#2C3E50"}}>
                                    Destino 
                            </p>
                             <h6 
                                style={{fontSize: "22px",fontWeight:"600", color:"#2C3E50"}}>
                                     Juan Perez
                            </h6>
                        </td>
                        <td 
                            className="text-center">
                            <p 
                            style={{fontSize: "20px",fontWeight:"400", color:"#2C3E50"}}>
                                Monto 
                            </p>
                            <h6 
                                style={{fontSize: "22px",fontWeight:"600", color:"#2C3E50"}}>
                                    $ 533
                            </h6>
                        </td>
                    </tr>
                    <tr>
                        <th 
                            scope="row" 
                            className="text-center"
                            ><i 
                            class="fa-solid fa-paper-plane">
                            </i>
                        </th>
                        <td>
                            <p 
                                style={{fontSize: "20px",fontWeight:"400", color:"#2C3E50"}}>
                                    Fecha 
                            </p>
                            <h6 
                                style={{fontSize: "22px",fontWeight:"600", color:"#2C3E50"}}>
                                    28/08/24
                            </h6>
                        </td>
                        <td>
                            <p 
                                style={{fontSize: "20px",fontWeight:"400", color:"#2C3E50"}}>
                                    Detalle 
                            </p>
                            <h6 
                                style={{fontSize: "22px",fontWeight:"600", color:"#2C3E50"}}>
                                    Transferencia
                            </h6>
                        </td>
                        <td>
                            <p 
                                style={{fontSize: "20px",fontWeight:"400", color:"#2C3E50"}}>
                                    Destino 
                            </p>
                            <h6 
                                style={{fontSize: "22px",fontWeight:"600", color:"#2C3E50"}}>
                                     Juan Perez
                            </h6>
                        </td>
                        <td 
                            className="text-center">
                                <p 
                                    style={{fontSize: "20px",fontWeight:"400", color:"#2C3E50"}}>
                                        Monto 
                                </p>
                                <h6 
                                    style={{fontSize: "22px",fontWeight:"600", color:"#2C3E50"}}>
                                        $ 533
                                </h6>
                        </td>
                    </tr>
                    <tr>
                        <th 
                            scope="row" 
                            className="text-center">
                                <i class="fa-solid fa-paper-plane"></i>
                        </th>
                        <td>
                            <p 
                                style={{fontSize: "20px",fontWeight:"400", color:"#2C3E50"}}>
                                    Fecha 
                            </p>
                            <h6 
                                style={{fontSize: "22px",fontWeight:"600", color:"#2C3E50"}}>
                                    28/08/24
                            </h6>
                        </td>
                        <td>
                            <p 
                                style={{fontSize: "20px",fontWeight:"400", color:"#2C3E50"}}>
                                    Detalle 
                            </p>
                            <h6 
                                style={{fontSize: "22px",fontWeight:"600", color:"#2C3E50"}}>
                                    Transferencia
                            </h6>
                        </td>
                        <td>
                            <p 
                                style={{fontSize: "20px",fontWeight:"400", color:"#2C3E50"}}>
                                    Destino 
                            </p>
                            <h6 
                                style={{fontSize: "22px",fontWeight:"600", color:"#2C3E50"}}>
                                     Juan Perez
                            </h6>
                        </td>
                        <td 
                            className="text-center">
                                <p 
                                    style={{fontSize: "20px",fontWeight:"400", color:"#2C3E50"}}>
                                        Monto 
                                </p>
                                <h6 
                                    style={{fontSize: "22px",fontWeight:"600", color:"#2C3E50"}}>$
                                         533
                                </h6>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 className="foot-text">DESCARGAR MOVIMIENTOS</h3>
        </div>
    );

}
export default AccountMoves;