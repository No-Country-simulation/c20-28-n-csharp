import React from "react";
import"../../styles/AccountMoves.css";
import { useEffect, useState } from "react";



function AccountMoves() {
  //estados de los movientos
  const [movimientos, setMovimientos] = useState([]);
  //verificamos que el usuario este autenticado
  const token = localStorage.getItem("token");

  //cunsumimos los datos del api
  useEffect(() => {
    // URL de la API de transferencias
    const apiUrl = `https://bankest.somee.com/api/Transacciones/historial`;

    //hacemos la solicitud get para obtener los datos
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
    })
      .then((Response) => Response.json())
      .then((data) => {
        setMovimientos(data); //se gurda el estado
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);
  return (
    <div className="container mt-2">
      <h3 className="title">
        Movimientos de cuenta
        <i className="fa-solid fa-maximize"></i>
      </h3>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              Detalle
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col" className="text-center">
              Filtrar por <i className="fa-solid fa-arrow-down"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {movimientos.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No hay movimientos disponibles
              </td>
            </tr>
          ) : (
            movimientos.map((movimientos, index) => (
              <tr key={index}>
                <th scope="row" className="text-center align-content-around">
                  <i className="fa-solid fa-paper-plane"></i>
                </th>
                <td>
                  <p>Fecha</p>
                  <h6>
                    {new Date(movimientos.fecha).toLocaleDateString()}
                  </h6>{" "}
                  {/* Convertir la fecha */}
                </td>
                <td>
                  <p>Detalle</p>
                  <h6>{movimientos.detalle}</h6> {/* Mostrar el detalle */}
                </td>
                <td>
                  <p>Destino</p>
                  <h6>{movimientos.destino}</h6> {/* Mostrar el destino */}
                </td>
                <td className="text-center">
                  <p>Monto</p>
                  <h6>${movimientos.monto}</h6> {/* Mostrar el monto */}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <h3 className="foot-text">DESCARGAR MOVIMIENTOS</h3>
    </div>
  );
}
export default AccountMoves;