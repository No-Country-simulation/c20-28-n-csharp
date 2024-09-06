import Login from "./pages/Login"
import Navegación from "./pages/Navegacion"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Router>
            <div>
              <Routes>
                <Route path="/" element={<Navegación/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
              </Routes>
            </div>
          </Router>
    </>
  )
}

export default App
