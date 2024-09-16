import { InputFloat } from "../../Components/Inputs/Inputs";
import SideBar from "../../Components/Side-bar/SideBar";
import { Header } from "../../Components/Header/Header";

function FormularioTransferir(){
    return(
        <div className="row">
            <aside className="col-2">
                    <SideBar />
            </aside>
            <div className="col-10">

                <div className="row px-5">
                    <Header
                        tituloPagina="Transferencias"
                    />
                </div>
                <div className="row mt-5 justify-content-center pe-5 me-5">
                    <div className="col-4">
                        <InputFloat
                            label="Alias"
                        />
                    </div>
                </div>
                <div className="row mt-3 justify-content-center pe-5 me-5">
                    <div className="col-4">
                        <p className="text-center" style={{ fontFamily: "Inter", fontSize: "24px", fontWeight: 500, color: "#2C3E50" }}>ó</p>
                    </div>
                </div>
                <div className="row mt-3 justify-content-center pe-5 me-5">
                    <div className="col-4">
                        <InputFloat
                            label="CBU o CVU"
                        />
                    </div>
                </div>
                <div className="row mt-5 justify-content-center pe-5 me-5">
                    <div className="col-4 text-center">
                        <button className="btn btn-lg mt-5" style={{ backgroundColor: "#F39C12", width: "70%", borderRadius: "6px", color: "white", fontSize: "20px", fontWeight: "500" }}>
                            CONTINUAR
                        </button>
                    </div>
                </div>
            </div >
        </div>
    )
}
export default FormularioTransferir;