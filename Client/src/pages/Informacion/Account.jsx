import InfoAccount from "../../Components/Targets/InfoAccount";
import AccountMoves from "../../Components/Targets/AccountMoves";
import SideBar from "../../Components/Side-bar/SideBar";
import Target from "../../Components/Targets/Target";
import { Header } from "../../Components/Header/Header";
import { useState, useEffect } from "react";
import { useFetchWithToken } from "../../assets/useFetch";


export function Account() {

     const token = localStorage.getItem("token");
     const url = "https://bankest.somee.com/api/Cliente/GetCuentas";
     const urlMovimientos = "https://bankest.somee.com/api/Transacciones/historial/";

     /*?CuentaId=a0f4248d-5df4-480f-a019-4b33298249f0&FechaInicio=2024-08-07 00:00:00&FechaFin=2024-09-30 00:00:00*/

     const {data} = useFetchWithToken(url,token);
     localStorage.setItem( "user", JSON.stringify(data));
     const user = localStorage.getItem("user");
     
     console.log("id: ", user);    
         

     const {dataMovements} = useFetchWithToken(urlMovimientos+'?CuentaId='+ user[0].id +'&FechaInicio=2024-08-07 00:00:00&FechaFin=2024-09-30 00:00:00',token);
     const lista = JSON.stringify(dataMovements)
     console.log(lista);
     
     
     return (
          <div>
               <div className="row">
                    <div className="aside col-2">
                         <SideBar />
                    </div>
                    <div className="col-10 px-5">
                         <div className="row">
                              <Header
                                        tituloPagina="Cuenta"
                              />
                         </div>
                         <div className="row">
                              <div className="col-6">
                                   {data?.map((usuario, index) => (                                      
                                        <InfoAccount 
                                        key={index}
                                        saldo={usuario.saldo} 
                                        numeroCuenta={usuario.numeroCuenta}
                                        nombre={usuario.usuario.nombre}
                                        apellidoMaterno={usuario.usuario.apellidoMaterno}
                                        apellidoPaterno={usuario.usuario.apellidoPaterno} 
                                        id={usuario.usuario.id} 
                                        fecha_venc="18/26"  
                                        nro="0000 8061 3401 8279"                                
                                        />
                                   ))}
                              
                              </div>
                              <div className="col-6">
                              <AccountMoves />
                              </div>
                         </div>
                    </div>
               </div>
          </div >


     );
}
