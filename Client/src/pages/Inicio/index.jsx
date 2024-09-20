import React from 'react';
import SideBar from '../../Components/Side-bar/SideBar';
import { Header } from '../../Components/Header/Header';
import Saldo from '../../Components/Saldo';
import { BtnSearch, CardContactos, Target } from "../../Components/Targets/TargetTransf";
import Servicio from '../../Components/Servicio';
import AccountMoves from '../../Components/Targets/AccountMoves';
import { useFetchWithToken } from "../../assets/useFetch";

function Inicio() {

    const token = localStorage.getItem("token");
    const url = "https://bankest.somee.com/api/Cliente/GetCuentas";
    const {data} = useFetchWithToken(url,token);


    return (
        <div>
            <div className="row">
                <div className="aside col-2">
                    <SideBar/>
                </div>
                <div className="col-10">
                    <Header
                        tituloPagina="Inicio"
                    />
                    <div className="row mx-5">
                        <div className="col-6">
                            {data?.map((usuario, index)=>(
                            <Saldo
                                key={index}
                                saldo={usuario.saldo}
                            />))}
                            
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-end">
                        <Target texto="Transferir a un Alias, CBU o CVU" 
                            enlace='/FormularioTransferir'
                        />
                        </div>
                    </div>
                    <div className="row mx-5 mt-5">
                        <h3>Pago de Servicios</h3>
                        <div className="d-flex">
                            <Servicio nombre="eden" fecha="20/10/24" fotoSrc="https://th.bing.com/th/id/OIP.GhWVoF8Yn_2AgIy71YH_ZgAAAA?rs=1&pid=ImgDetMain" monto="23.400"></Servicio>

                            <Servicio nombre="flow" fecha="23/10/24" fotoSrc="https://th.bing.com/th/id/OIP.wQYokTVsQJeV0wYolq8sbAAAAA?rs=1&pid=ImgDetMain" monto="21.800"></Servicio>
                        </div>
                        <AccountMoves></AccountMoves>
                    </div>
                </div>
            </div>
            
        </div>
    )
    
}
export default Inicio;