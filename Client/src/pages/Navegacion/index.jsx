import { Link } from "react-router-dom";

function Navegacion(){
    return (
      <>
        <main className="row">
          <Link to="/login" className="btn btn-link btn-info">
            Iniciar sesion
          </Link>

          <Link to="/register" className="btn btn-link btn-info">
            Quiero una cuenta
          </Link>

          <Link to="/Info" className="btn btn-link btn-info">
            Quiero mas informacion
          </Link>
        </main>
      </>
    );
}

export default Navegacion;