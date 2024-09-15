import { InputFloat, InputNumber, SelectFloat } from "../../Components/Inputs/Inputs";
import SideBar from "../../Components/Side-bar/SideBar";
import { CardTransfer } from "../../Components/Targets/TargetTransf";

function FormularioTransferir2(){
    return(
        <div className="row">
            <aside className="col-2">
                    <SideBar />
            </aside>
            <section className="col-8">
            
                <div className="row my-5 py-5 d-flex align-items-center justify-content-around">
                    <div className="col-4">
                        <CardTransfer
                            CBU="00340182791108"
                            alias="TENIS.HOLA.GARRA"
                            nombre="Daniel"
                            apellido="Perez"
                        />
                    </div>
                    <div className="col-5">
                        <InputNumber
                            label="Monto a transferir"
                        />
                    </div>
                </div>
                <div className="row my-5 py-5 d-flex align-items-center justify-content-around">
                    <div className="col-4">
                        <SelectFloat
                            label="Concepto"
                        />
                    </div>
                    <div className="col-5">
                        <InputFloat
                            label="Mensaje (OPCIONAL)"
                        />
                    </div>
                </div>
                <div className="row pt-3">                   
                        <div className="col-5 mx-auto">
                            <button className="btn btn-lg mt-5" style={{ backgroundColor: "#F39C12", width: "60%", borderRadius: "6px", color: "white", fontSize: "20px", fontWeight: "500" }}>
                                CONTINUAR
                            </button>
                        </div>                 
                </div>
            </section>
        </div>
    )
}
export default FormularioTransferir2;