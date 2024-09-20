export default function Saldo({saldo=0}) {
    return(
        <div className="account-balance">
                <h3 className="title">Cuenta Ahorro en pesos</h3>
                <div className="balance">
                    <div className="icono"><i class="fa-solid fa-eye-slash"></i>
                                           <i class="fa-solid fa-eye"></i>
                    </div>
                    <div className="value-b">
                        $&nbsp;1.000<sup>
                            60
                        </sup>
                    </div>
                </div>
        </div>
    )
}