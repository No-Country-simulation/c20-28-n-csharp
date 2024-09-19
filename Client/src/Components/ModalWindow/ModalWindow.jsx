import React, { useState } from "react";
import "../../styles/ModalWindow.css";
import { TransferenciaRealizadaCard } from "../Targets/TargetTransf";
import "../../assets/opendoc.png";

export function ModalWindow(props,estadoModal) {
    const [_estadoModal,_setEstadoModal] = useState(estadoModal);
    
    return (
        <>
            {_estadoModal &&
                <div className="overlay">
                    <div className="container-modal">
                        <div className="encabezado-modal">
                            <i class="fa-solid fa-circle-xmark close" onClick={() => _setEstadoModal(!_estadoModal)}></i>
                        </div>
                        <div className="icono-principal">
                            <i class="fa-solid fa-paper-plane"></i>
                        </div>
                        <p className="titulo-modal text-center mt-3 mb-2">{props.titulo}</p>
                        <div className="contenido-modal text-center">
                            <TransferenciaRealizadaCard
                                valorTransferencia="2.300,88."
                                destinatario="Daniel Perez"
                                remitente="Juana Terra"
                                CBU="00340182791108."
                            />
                        </div>
                        <div className="modal-pie">
                            <h6 className="pie-modal d-flex">DESCARGAR COMPROBANTE&nbsp;<img src="../../src/assets/opendoc.png" style={{ width: "20px", height: "20px" }}></img></h6>
                            <h6 className="pie-modal">COMPARTIR COMPROBANTE <i class="fa-sharp fa-solid fa-share-nodes"></i></h6>
                        </div>
                    </div>
                </div>
            }

        </>
    );
} 