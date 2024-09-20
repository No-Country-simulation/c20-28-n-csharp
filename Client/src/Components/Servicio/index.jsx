import './servicio.css';
function Servicio({monto, fecha, fotoSrc, nombre}){ {
    return(
        <div className="row" style={{width:"35%"}}>
            <div className="col-4 img-servicio__container p-0">
                <img className="img-servicio" src={fotoSrc} alt={nombre} rounded />
            </div>
            <div className="col-8">
                <h3 className=" fw-light">Próximo vencimiento</h3>
                <p className="fw-bold fs-4">${monto}</p>
                <p>Fecha: {fecha}</p>
            </div>
        </div>
    )
}}

export default Servicio;