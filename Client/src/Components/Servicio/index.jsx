function Servicio({monto, fecha, fotoSrc, nombre}){ {
    return(
        <div className="row">
            <div className="col-4">
                <img className="img" src={fotoSrc} alt={nombre} rounded />
            </div>
            <div className="col-8">
                <h3 className="text-secondary">Próximo vencimiento</h3>
                <p className="fw-bold">Monto: {monto}</p>
                <p>Fecha: {fecha}</p>
            </div>
        </div>
    )
}}

export default Servicio;