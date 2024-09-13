import { Link } from "react-router-dom";
import SideBarLinks from "../Links/SideBarLinks";
import FotoPerfil from "../FotoPerfil";
import './SideBar.css';

export default function SideBar() {
    const links = [
        { to: '/', text: 'Inicio' },
        { to: '/cuenta', text: 'Cuenta' },
        { to: '/transferencias', text: 'Transferencias' },
        { to: '/pago_servicios', text: 'Pago de Servicios' },
        { to: '/gestion_datos', text: 'Gestión de Datos' },
        { to: '/ayuda', text: 'Ayuda' },
        { to: '/cerrar_sesion', text: 'Cerrar Sesión' },
        ];
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light side-bar">
            <FotoPerfil src="https://avatars.githubusercontent.com/u/98681?v=4" alt="perfil"/>
            <ul className="nav nav-pills flex-column mb-auto">
                {links.map((link, index) => ( 
                    <SideBarLinks key={index} url={link.to} text={link.text}/>
                ))}
            </ul>
        </div>
    );
}