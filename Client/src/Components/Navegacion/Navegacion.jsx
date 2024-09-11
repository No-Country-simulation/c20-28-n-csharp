import React from 'react';
import { Link } from 'react-router-dom';

//funcion principal de navegacion
function Navegacion({ links }){
    return (
      <main className="row">
        {links.map((link, index) => (
          <Link key={index} to={link.to} className="btn btn-link btn-info">
            {link.text}
          </Link>
        ))}
      </main>
    );
}

export default Navegacion;