import React from "react";
import { useState } from "react";
import "../../styles/infoAccount.css";

function InfoAccount() {
    const [show, setShow] = useState(true);
    const [showDataTarget, setShowDataTarget] = useState(true);
    return (
        <div className="container mt-1 ms-2">
            <div className="account-balance">
                <h3 className="title">Cuenta Ahorro en pesos</h3>
                <div className="balance">
                    {show ?

                        <div className="icono">
                            <i className="fa-solid fa-eye-slash" onClick={() => setShow(!show)}></i>
                        </div>
                        :
                        <div className="icono">
                            <i className="fa-solid fa-eye" onClick={() => setShow(true)}></i>
                        </div>

                    }
                    {show ? <div className="value-b"> $&nbsp;1.000<sup>60</sup></div> : <div className="value-b"> $&nbsp;*****<sup>***</sup> </div>}
                </div>
            </div>
        

            <div className="Account-data">
                <h3 className="title">Datos de la cuenta&nbsp;&nbsp;<i className="icon fa-solid fa-clone"></i></h3>
                <span>CBU: 00340182795346</span>
                <span>Alias: SILLA.PLATO.TELE</span>
                <span>Titular de cuenta: Juana Terra</span>
            </div>
            <div className="Target-data">
                <h3 className="title">Tarjeta</h3>
                <div className="square-target">
                    {showDataTarget ? <div className="icono">
                        <i className="fa-solid fa-eye-slash" onClick={()=>setShowDataTarget(!showDataTarget)}></i>
                        </div> 
                        :
                        <div className="icono">
                            <i className="fa-solid fa-eye" onClick={()=>setShowDataTarget(true)}></i>
                        </div>
                    }

                    {showDataTarget? <div className="target-v">
                        
                        <span>Juana&nbsp;Terra</span>
                        <span>08/26</span>
                        <span>0000 8061 3401 8279</span>
                    </div>
                    :
                    <div className="target-v">
                        
                        <span>*****&nbsp;*****</span>
                        <span>*****</span>
                        <span>**** **** **** ****</span>
                    </div>
                }
                                     
                    
                </div>
                <h3 className="foot-text">VER DORSO</h3>
            </div>

        </div>

    );
}

export default InfoAccount;