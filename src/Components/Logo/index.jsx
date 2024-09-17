import "../../pages/Login/Login.css";
import { Link } from "react-router-dom";
import './logo.css';

function Logo() {
    
        return (
          <Link to="/"><img className="logo" src="/src/assets/logo.png" alt="logo" /> </Link>
          
        );      
    
    }

export default Logo;