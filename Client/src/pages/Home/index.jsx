import './home.css';
import Logo from '../../components/Logo';
export default function Home() {
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div div class="container-fluid d-flex justify-content-around">
                <a class="navbar-brand" href="#"><Logo></Logo></a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav gap-4">
                        <li class="nav-item">
                        <a class="nav-link" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Caracteristicas</a>
                        </li>
                        
                        <li class="nav-item">
                        <a class="nav-link" href="#">Como funciona</a>
                        </li>
                        
                        <li class="nav-item">
                        <a class="nav-link" href="#">Seguridad</a>
                        </li>

                        
                        <li class="nav-item">
                        <a class="nav-link" href="#">FAQ</a>
                        </li>

                        
                        <li class="nav-item">
                        <a class="nav-link" href="#">Ayuda</a>
                        </li>
                    </ul>
                </div>
                <div className="ingresar">
                    <a className='btn' href="/login">Iniciar Sesión</a>
                    <a className='btn btn-naranja' href="/Register">Registrarse</a>
                </div>
            </div>
        </nav>
        <main className='container d-flex flex-column justify-content-center align-items-center'>
            <section className='text-center w-50'>
                    <h1 className='titulo mt-5'>Nuestra plataforma permite gestionar tu dinero con simplicidad, rapidez y seguridad.</h1>
                    <sub className='subtitulo'>Todo lo que necesitás al alcance de un click.</sub>
            </section>
            <section ection className='row w-100 justify-content-center mt-5'>
                <div className="col-4 text-center">
                    <h3 className='texto_gradiente'>Transformar las finanzas es facil</h3>
                    <div className="card tarjeta">
                        <div className="card-body">
                            <h5 className="card-title">Usuarios Activos</h5>
                            <p className='fs-1 fw-bold'>+20M</p>
                            <p className="card-text">Únete a nuestra comunidad de 20M+ 
                            usuarios activos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 img-chica">
                </div>
                <div className="col-4">
                <div className="card tarjeta">
                        <div className="card-body">
                            <h5 className="card-title">Alcance Global</h5>
                            <p className='fs-1 fw-bold'>+175</p>
                            <p className="card-text">Únete a nuestra comunidad de 20M+ 
                            usuarios activos.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='d-flex mt-5 px-5'>
                <div>
                    <h3 className='texto_gradiente'>Nuestro  método integral 
                    de gestión financiera.</h3>
                </div>
                <div className='w-75 px-5'>
                    <p>Nuestro método integral de gestión financiera en Bankster combina simplicidad, control y seguridad en cada paso.
                    Ofrecemos una plataforma que te permite administrar todas tus finanzas en un solo lugar, con herramientas diseñadas para facilitar la planificación, seguimiento y optimización de tus recursos.</p>
                </div>
            </section>
            <section className='row w-100 g-5 mt-5'>
                <div className="card tarjeta col-4 h-25">
                    <div className="card-body">
                        <p className='fs-1 fw-bold'>+260M</p>
                        <p className="card-text">Nuestro paso a paso para simplificar tu
                        gestión financiera.</p>
                        <div className="circle-container">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="img-chicos">
                    </div>
                </div>
            </section>
        </main>
            
        </>
    )
}