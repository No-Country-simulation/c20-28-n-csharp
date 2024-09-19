import InfoAccount from "../../Components/Targets/InfoAccount";
import AccountMoves from "../../Components/Targets/AccountMoves";
import SideBar from "../../Components/Side-bar/SideBar";
import { CardTransfer } from "../../Components/Targets/TargetTransf";
import { Header } from "../../Components/Header/Header";
import { useState, useEffect } from "react";
import { useFetchWithToken } from "../../assets/useFetch";


export function Account() {

     const token = localStorage.getItem("token");
     const url = "https://bankest.somee.com/api/Cliente/GetCuentas";

     const {data} = useFetchWithToken(url,token);

     console.log("saldo: ", data);
     
     return (
          <div className="container-fluid">
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
                         <div className="row me-5 px-5">
                              <div className="col-5">
                                   
                                   {data?.map((usuario, index) => (                                      
                                        <InfoAccount 
                                        key={index}
                                        saldo={usuario.saldo} 
                                        numeroCuenta={usuario.numeroCuenta}
                                        nombre={usuario.usuario.nombre}
                                        apellidoMaterno={usuario.usuario.apellidoMaterno}
                                        apellidoPaterno={usuario.usuario.apellidoPaterno} 
                                        id={usuario.usuario.id}                                   
                                        />
                                   ))}
                                   
                              </div>
                              <div className="col-7">
                                   <AccountMoves />
                              </div>
                         </div>
                    </div>
               </div>
          </div >


     );
}
