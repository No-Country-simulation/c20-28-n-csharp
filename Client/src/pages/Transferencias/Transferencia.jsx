import Table from "../../Components/Table/Table";
import { BtnSearch, CardContactos, Target } from "../../Components/Targets/TargetTransf";
import SideBar from "../../Components/Side-bar/SideBar";
import { Header } from "../../Components/Header/Header";

function Transferencia() {

    

    const columnas = ['Fecha', 'Destinatario', 'Monto', 'Estado'];
    const datos = [
        { Fecha: '13/08/24', Destinatario: 'Alberta Flores', Monto: '$150.000,00', Estado: 'Realizada' },
        { Fecha: '13/08/24', Destinatario: 'Alberta Flores', Monto: '$150.000,00', Estado: 'Realizada' },
    ];

    return (
        <div className="row">
            <aside className="col-2">
                <SideBar />
            </aside>
            <section className="col-10 mx-auto">
                <div className="row px-5">
                    <Header
                        tituloPagina="Transferencias"
                    />
                </div>
                <div className="row mt-5 ps-5">
                    <div className="col-5">
                        <Target texto="Transferir a un Alias, CBU o CVU" 
                            enlace='/FormularioTransferir'
                        />
                    </div>
                    <div className="col-5">
                        <Target texto="Programar transferencia" />
                    </div>
                </div>

                <div className="row my-5 ps-5">
                    <div className="col-4 ms-2">
                        <BtnSearch />
                    </div>
                </div>

                <div className="row mx-5 my-3 d-flex justify-center">
                    <div className="col ms-2">
                        <CardContactos
                            nuevoContacto={true}
                            nombre="nuevo"
                            apellido="contacto"
                        />
                    </div>
                    <div className="col">
                        <CardContactos
                            nombre="Alberta"
                            apellido="Flórez"
                        />
                    </div>
                    <div className="col">
                        <CardContactos
                            nombre="Alberta"
                            apellido="Flórez"
                        />
                    </div>
                    <div className="col">
                        <CardContactos
                            nombre="Alberta"
                            apellido="Flórez"
                        />
                    </div>
                    <div className="col">
                        <CardContactos
                            nombre="Alberta"
                            apellido="Flórez"
                        />
                    </div>
                    <div className="row">
                        <Table
                            titulo='Historial de transferencias'
                            columnas={columnas}
                            datos={datos}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Transferencia;