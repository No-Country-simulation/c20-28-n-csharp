import "../../pages/Login/Login.css";
import { Link } from "react-router-dom";


function Logo() {
    
        return (
          <div className="d-flex">
            <Link
              to="/"
              className="circle mx-2  bg-secondary-subtle text-body-tertiary"
            >
              Logo
            </Link>
            <span className="fs-4 text-uppercase text-body-tertiary">
              Bankster
              <sub className="d-block">Online Banking</sub>
            </span>
          </div>
        );      
    
    }

export default Logo;