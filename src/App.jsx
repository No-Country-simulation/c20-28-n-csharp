import Login from "./pages/Login/index";
import PageMain from "./pages/pageMain"
import Recuperar from "./pages/Recuperar";
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Register } from "./pages/Registro";
import NotFound from "./pages/ErrorPage";
import Inicio from "./pages/Inicio";
import Transferencia from "./pages/Transferencias/Transferencia";
import Cuenta from "./pages/Account/Account";
import FormularioTransferir from "./pages/Transferencias/FormularioTransferir";
import FormularioTransferir2 from "./pages/Transferencias/FormularioTransferir2";
import ProtectedRoute from "./Components/ProtecRoute/routeAccount";

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageMain />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Register',
    element: <Register />,
  },
  {
    path: '/Recuperar',
    element: <Recuperar />,
  },
  {
    path: '/Inicio',
    element: <Inicio />,
  },
  {
    path: '*',
    element: <NotFound/>,
  },
  {
    path: '/Cuenta',
    element: <ProtectedRoute element={<Cuenta />} />
  },
  {
    path: '/Transferencia',
    element: <Transferencia/>,
  },
  {
    path: '/FormularioTransferir',
    element: <FormularioTransferir/>,
  },
  {
    path: '/FormularioTransferir2',
    element: <FormularioTransferir2/>,
  },
  
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
