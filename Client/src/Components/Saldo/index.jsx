export default function Saldo({saldo}) {
    return(
        <div className="account-balance">
                <h3 className="title">Cuenta Ahorro en pesos</h3>
                <div className="balance">
                    <div className="icono"><i class="fa-solid fa-eye-slash"></i>
                                           
                    </div>
                    <div className="value-b">
                        $&nbsp;{saldo}<sup>
                            00
                        </sup>
                    </div>
                </div>
        </div>
    )
}