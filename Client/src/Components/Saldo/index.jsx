import { useState } from "react";

export default function Saldo({ saldo }) {
    const [show, setShow] = useState(true);
    return (

        <div className="account-balance">
            <h3 className="title">Cuenta Ahorro en pesos</h3>
            <div className="balance">
                {show ?
                    <div className="icono"><i class="fa-solid fa-eye-slash" onClick={() => setShow(!show)}></i>
                    </div> :
                    <div className="icono"><i class="fa-solid fa-eye" onClick={() => setShow(true)}></i>
                    </div>
                }
                {show ? <div className="value-b">

                    $&nbsp;{saldo}<sup>
                        00
                    </sup>
                </div> :
                    <div className="value-b">

                        $&nbsp;****<sup>
                            **
                        </sup>
                </div>}

            </div>
        </div>
    )
}