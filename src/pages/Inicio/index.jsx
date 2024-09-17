import React from 'react';
import SideBar from '../../Components/Side-bar/SideBar';
import { Header } from '../../Components/Header/Header';

function Inicio() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="aside col-2">
                    <SideBar />
                </div>
                <div className="col-10 px-5">
                    <div className="row">
                        <Header
                            tituloPagina="Inicio"
                        />
                    </div>
                    <div className="row me-5 px-5">
                        ................
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Inicio;