import Login from "./pages/Login"
import PageMani from "./pages/pageMain"
import Recuperar from "./pages/Recuperar";
import Info from "./pages/Informacion";
import User from "./pages/User";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register } from "./pages/Registro";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<PageMani />} />
            <Route path="/login" element={<Login />} />
            <Route path="/User" element={<User />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Recuperar" element={<Recuperar />} />
            <Route path="/Info" element = {<Info />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App
