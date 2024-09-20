import SideBar from "../../Components/Side-bar/SideBar";
import { Header } from '../../Components/Header/Header';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import AcountMoves from '../../Components/Targets/AccountMoves.jsx';

export default function GestionGastos() {
    return (
        <div className="row">
            <div className="col-2">
                <SideBar />
            </div>
            <div className="col-10">
                <div className="row">
                    <Header tituloPagina="Gestión de Gastos"/>
                    <h4 className="fw-light">Organiza y gestiona tus gastos mes a mes.</h4>

                    <h4 className="mt-5 mb-3">Cuenta Ahorro en Pesos</h4>
                    <p>Gasto total por mes: <span className="fw-bold">$ 340.000</span> </p>

                    <section className="d-flex justify-content-center">
                        <ul className="d-flex justify-content-around w-50" >
                            <li className="dropwdown btn btn-outline-secondary">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mes
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Enero</a></li>
                                    <li><a class="dropdown-item" href="#">Febrero</a></li>
                                    <li><a class="dropdown-item" href="#">Marzo</a></li>
                                    <li><a class="dropdown-item" href="#">Abril</a></li>
                                    <li><a class="dropdown-item" href="#">Mayo</a></li>
                                    <li><a class="dropdown-item" href="#">Junio</a></li>
                                    <li><a class="dropdown-item" href="#">Julio</a></li>
                                    <li><a class="dropdown-item" href="#">Agosto</a></li>
                                    <li><a class="dropdown-item" href="#">Septiembre</a></li>
                                    <li><a class="dropdown-item" href="#">Octubre</a></li>
                                    <li><a class="dropdown-item" href="#">Noviembre</a></li>
                                    <li><a class="dropdown-item" href="#">Diciembre</a></li>
                                </ul>
                            </li>
                            <li className="dropwdown btn btn-outline-secondary">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sección
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Todos</a></li>
                                    <li><a class="dropdown-item" href="#">Alimentación</a></li>
                                    <li><a class="dropdown-item" href="#">Salud</a></li>
                                    <li><a class="dropdown-item" href="#">Educación</a></li>
                                    <li><a class="dropdown-item" href="#">Vivienda</a></li>
                                    <li><a class="dropdown-item" href="#">Transporte</a></li>
                                    <li><a class="dropdown-item" href="#">Entretenimiento</a></li>
                                    <li><a class="dropdown-item" href="#">Otros</a></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section className="nivel-gastos w-50 m-auto">
                        <div className="row align-items-center">
                            <div className="fs col-3">$130.000 Supermercado</div>
                            <div className="progress col-9 p-0">
                                <div className="progress-bar" role="progressbar" style={{width:"38%"}} aria-valuenow="38" aria-valuemin="0" aria-valuemax="50"></div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="fs col-3">$100.000 Expensas</div>
                            <div className="progress col-9 p-0">
                                <div className="progress-bar" role="progressbar" style={{width:"29%"}} aria-valuenow="29" aria-valuemin="0" aria-valuemax="50"></div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="fs col-3">$80.000 Entretenimiento</div>
                            <div className="progress col-9 p-0">
                                <div className="progress-bar" role="progressbar" style={{width:"23%"}} aria-valuenow="23" aria-valuemin="0" aria-valuemax="50"></div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="fs col-3">$30.000 Servicios</div>
                            <div className="progress col-9 p-0">
                                <div className="progress-bar" role="progressbar" style={{width:"8%"}} aria-valuenow="8" aria-valuemin="0" aria-valuemax="50"></div>
                            </div>
                        </div>
                        <hr class="hr" />
                        <div className=" d-flex justify-content-between  gap-4">
                            <p className="fw-bold">340.000 Total</p>
                            <p>Dinero disponible en cuenta al 31/8/2024: $60.000</p>
                            
                        </div>
                    </section>
                    <AcountMoves/>
                </div>
            </div>
        </div>
    )
}