import { Link } from "react-router-dom";
import SideBarLinks from "../Links/SideBarLinks";
import FotoPerfil from "../FotoPerfil";
import './SideBar.css';

export default function SideBar() {
    const links = [
        { to: '/inicio', text: 'Inicio' },
        { to: '/cuenta', text: 'Cuenta' },
        { to: '/transferencia', text: 'Transferencias' },
        { to: '/pago_servicios', text: 'Pago de Servicios' },
        { to: '/gestion_gastos', text: 'Gestión de Gastos' },
        { to: '/ayuda', text: 'Ayuda' },
        { to: '/', text: 'Cerrar Sesión' },
        ];
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 side-bar">
            <FotoPerfil src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg" alt="perfil"/>
            <ul className="nav nav-pills flex-column mb-auto">
                {links.map((link, index) => ( 
                    <SideBarLinks key={index} url={link.to} text={link.text}/>
                ))}
            </ul>
        </div>
    );
}