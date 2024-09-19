import { InputFloat, InputNumber, SelectFloat } from "../../Components/Inputs/Inputs";
import SideBar from "../../Components/Side-bar/SideBar";
import { CardTransfer } from "../../Components/Targets/TargetTransf";
import { Header } from "../../Components/Header/Header";
import { useNavigate } from "react-router-dom";

function FormularioTransferir2(){
    const navigate = useNavigate();
    return(
        <div className="row">
            <aside className="col-2">
                    <SideBar />
            </aside>
            <section className="col-10 px-5">
                <div className="row px-5 pb-5">
                    <Header
                        tituloPagina="Transferencias"
                    />
                </div>
               <div className="row mx-auto pb-5" style={{width:"80%", boxShadow: "0px -1px 8px 0px rgba(0, 0, 0, 0.06), 0px 4px 4px 0px #F7DC6F", borderRadius: "18px"}}>            
                <div className="row my-2 py-5 d-flex align-items-center justify-content-center">
                    <div className="col-3">
                        <CardTransfer
                            CBU="00340182791108"
                            alias="TENIS.HOLA.GARRA"
                            nombre="Daniel"
                            apellido="Perez"
                        />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4">
                        <InputNumber
                            label="Monto a transferir"
                        />
                    </div>
                </div>
                <div className="row my-2 py-2 d-flex align-items-center justify-content-center">
                    <div className="col-3">
                        <SelectFloat
                            label="Concepto"
                        />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4">
                        <InputFloat
                            label="Mensaje (OPCIONAL)"
                        />
                    </div>
                </div>
                </div>
                <div className="row pt-2 d-flex justify-content-center">                   
                        <div className="col-5">
                            <button className="btn btn-lg mt-5" onClick={()=>navigate('/ConfirmarTransferencia')} style={{ backgroundColor: "#F39C12", width: "60%", borderRadius: "6px", color: "white", fontSize: "20px", fontWeight: "500" }}>
                                CONTINUAR
                            </button>
                        </div>                 
                </div>
            </section>
        </div>
    )
}
export default FormularioTransferir2;