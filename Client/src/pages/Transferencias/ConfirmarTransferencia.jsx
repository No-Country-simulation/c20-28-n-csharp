import SideBar from "../../Components/Side-bar/SideBar"; 
import { Header } from "../../Components/Header/Header";
import { CardTransfer } from "../../Components/Targets/TargetTransf";
import { ModalWindow } from "../../Components/ModalWindow/ModalWindow";
import React ,{ useState } from "react";

function ConfirmarTransferencia(){
    const [estateModal,setEstateModal] = useState(false);
    return(
        <div className="row">
            <aside className="col-2">
                    <SideBar />
            </aside>
            <div className="col-10">

                {estateModal &&
                    <ModalWindow
                        titulo="TRANSFERENCIA REALIZADA"
                        estadoModal={estateModal}
                    />
                }

                <div className="row px-5">
                    <Header
                        tituloPagina="Transferencias"
                    />
                </div>
                <div className="row mt-5 justify-content-center pe-5 me-5">
                    <div className="col-4 d-flex justify-content-around" style={{boxShadow: "0px -1px 8px 0px rgba(0, 0, 0, 0.06), 0px 4px 4px 0px #F7DC6F",
                                                                                 padding: "20px", borderRadius: "18px"}}>
                        <CardTransfer
                            CBU="00340182791108"
                            alias="TENIS.HOLA.GARRA"
                            nombre="Daniel"
                            apellido="Perez"
                            MontoATransferir="20000"
                        />
                    </div>
                </div>
                <div className="row mt-2 justify-content-center pe-5 me-5">
                    <div className="col-4 text-center">
                        <button className="btn btn-lg mt-5" onClick={()=>setEstateModal(!estateModal)} style={{ backgroundColor: "#F39C12", width: "70%", borderRadius: "6px", color: "white", fontSize: "20px", fontWeight: "500" }}>
                            TRANSFERIR
                        </button>
                    </div>
                </div>
            </div >
        </div>
    )

}
export default ConfirmarTransferencia;