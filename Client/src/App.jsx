import Login from "./pages/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
            <div>
              <Routes>
                <Route path="/" element={<Login/>} />
              </Routes>
            </div>
          </Router>
    </>
  )
}

export default App
