import InfoAccount from "../../Components/Targets/InfoAccount";
import AccountMoves from "../../Components/Targets/AccountMoves";
import SideBar from "../../Components/Side-bar/SideBar";
import { CardTransfer, Target } from "../../Components/Targets/TargetTransf";
import { Header } from "../../Components/Header/Header";
import { useState, useEffect } from "react";
import { useFetchWithToken } from "../../assets/useFetch";
import Saldo from "../../Components/Saldo";


export function Account() {

     const token = localStorage.getItem("token");
     const url = "https://bankest.somee.com/api/Cliente/GetCuentas";

     const {data} = useFetchWithToken(url,token);

     console.log("saldo: ", data);
     
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
                                   
                                   <Saldo/>
                              </div>
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
                                        />
                                   ))}
                                   <AccountMoves />

                              </div>
                         </div>
                    </div>
               </div>
          </div >


     );
}
