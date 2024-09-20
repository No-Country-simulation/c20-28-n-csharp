import './Targets.css';

export default function Target({nombre, nro, cvv, fecha_venc}){
    return(
        <>
        <div className="tarjeta-carton bg-black d-flex justify-content-center align-content-center flex-column p-5">
            <i class="fa-regular fa-eye-slash"></i>
            <img className='pajarito_logo img img-fluid '  src="/src/assets/pajarito_logo.png" alt="pajarito" />
            <h3 className='mb-4 mt-4'>{nombre}</h3>
            <p>Vto: {fecha_venc}</p>
            <p>{nro}</p>
        </div>
        
        </>
    )
}