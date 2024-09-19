import React from 'react';
import SideBar from '../../Components/Side-bar/SideBar';
import { Header } from '../../Components/Header/Header';
import Saldo from '../../Components/Saldo';
import { BtnSearch, CardContactos, Target } from "../../Components/Targets/TargetTransf";
import Servicio from '../../Components/Servicio';

function Inicio() {
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
                            <Saldo/>
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-end">
                        <Target texto="Transferir a un Alias, CBU o CVU" 
                            enlace='/FormularioTransferir'
                        />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <h3>Pago de Servicios</h3>
                <Servicio></Servicio>
            </div>
        </div>
    )
    
}
export default Inicio;