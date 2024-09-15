import React from "react";

function AccountMoves() {

    return (
        <div className="container mt-5">
            <h3 className="title d-flex justify-content-between" >Movimientos de cuenta<i className="fa-solid fa-maximize"></i></h3>
            <table className="table table-responsive" style={{borderColor:"#F3F3F3"}}>
                <thead  style={{fontSize:"22px", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>
                    <tr>
                        <th scope="col" style={{ backgroundColor: "#F3F3F3", color: "#2C3E50" }} className="text-center">Detalle</th>
                        <th scope="col" style={{ backgroundColor: "#F3F3F3" }}></th>
                        <th scope="col" style={{ backgroundColor: "#F3F3F3" }}></th>
                        <th scope="col" style={{ backgroundColor: "#F3F3F3" }}></th>
                        <th scope="col" style={{ backgroundColor: "#F3F3F3", color: "#2C3E50" }} className="text-center">Filtrar por <i className="fa-solid fa-arrow-down"></i></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="text-center align-content-around"><i className="fa-solid fa-paper-plane"></i></th>
                        <td><p style={{fontSize: "18px",fontWeight:"400", fontFamily: "Roboto ,sans-serif",fontStyle: "normal", color:"#2C3E50"}}>Fecha </p><h6 style={{fontFamily: "Roboto ,sans-serif",fontStyle: "normal",fontSize: "20px",fontWeight:"600", color:"#2C3E50"}}>28/08/24</h6></td>
                        <td><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Detalle </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50",fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Transferencia</h6></td>
                        <td><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Destino </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}> Juan Perez</h6></td>
                        <td className="text-center"><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Monto </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>$ 533</h6></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center align-content-around"><i className="fa-solid fa-paper-plane"></i></th>
                        <td><p style={{fontSize: "18px",fontWeight:"400", fontFamily: "Roboto ,sans-serif",fontStyle: "normal", color:"#2C3E50"}}>Fecha </p><h6 style={{fontFamily: "Roboto ,sans-serif",fontStyle: "normal",fontSize: "20px",fontWeight:"600", color:"#2C3E50"}}>28/08/24</h6></td>
                        <td><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Detalle </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50",fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Transferencia</h6></td>
                        <td><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Destino </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}> Juan Perez</h6></td>
                        <td className="text-center"><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Monto </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>$ 533</h6></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center align-content-around"><i className="fa-solid fa-paper-plane"></i></th>
                        <td><p style={{fontSize: "18px",fontWeight:"400", fontFamily: "Roboto ,sans-serif",fontStyle: "normal", color:"#2C3E50"}}>Fecha </p><h6 style={{fontFamily: "Roboto ,sans-serif",fontStyle: "normal",fontSize: "20px",fontWeight:"600", color:"#2C3E50"}}>28/08/24</h6></td>
                        <td><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Detalle </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50",fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Transferencia</h6></td>
                        <td><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Destino </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}> Juan Perez</h6></td>
                        <td className="text-center"><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Monto </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>$ 533</h6></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center align-content-around"><i className="fa-solid fa-paper-plane"></i></th>
                        <td><p style={{fontSize: "18px",fontWeight:"400", fontFamily: "Roboto ,sans-serif",fontStyle: "normal", color:"#2C3E50"}}>Fecha </p><h6 style={{fontFamily: "Roboto ,sans-serif",fontStyle: "normal",fontSize: "20px",fontWeight:"600", color:"#2C3E50"}}>28/08/24</h6></td>
                        <td><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Detalle </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50",fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Transferencia</h6></td>
                        <td><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Destino </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}> Juan Perez</h6></td>
                        <td className="text-center"><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Monto </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>$ 533</h6></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center align-content-around"><i className="fa-solid fa-paper-plane"></i></th>
                        <td><p style={{fontSize: "18px",fontWeight:"400", fontFamily: "Roboto ,sans-serif",fontStyle: "normal", color:"#2C3E50"}}>Fecha </p><h6 style={{fontFamily: "Roboto ,sans-serif",fontStyle: "normal",fontSize: "20px",fontWeight:"600", color:"#2C3E50"}}>28/08/24</h6></td>
                        <td><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Detalle </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50",fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Transferencia</h6></td>
                        <td><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Destino </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}> Juan Perez</h6></td>
                        <td className="text-center"><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Monto </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>$ 533</h6></td>
                    </tr>
                    <tr>
                        <th scope="row" className="text-center align-content-around"><i className="fa-solid fa-paper-plane"></i></th>
                        <td><p style={{fontSize: "18px",fontWeight:"400", fontFamily: "Roboto ,sans-serif",fontStyle: "normal", color:"#2C3E50"}}>Fecha </p><h6 style={{fontFamily: "Roboto ,sans-serif",fontStyle: "normal",fontSize: "20px",fontWeight:"600", color:"#2C3E50"}}>28/08/24</h6></td>
                        <td><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Detalle </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50",fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Transferencia</h6></td>
                        <td><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Destino </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}> Juan Perez</h6></td>
                        <td className="text-center"><p style={{fontSize: "18px",fontWeight:"400", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>Monto </p><h6 style={{fontSize: "20px",fontWeight:"600", color:"#2C3E50", fontFamily: "Roboto ,sans-serif",fontStyle: "normal"}}>$ 533</h6></td>
                    </tr>
                </tbody>
            </table>
            <h3 className="foot-text">DESCARGAR MOVIMIENTOS</h3>
        </div>
    );

}
export default AccountMoves;