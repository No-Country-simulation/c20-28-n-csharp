import Login from "./pages/Login"
import PageMain from "./pages/pageMain"
import Recuperar from "./pages/Recuperar";
import Info from "./pages/Informacion";
import User from "./pages/User";
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Register } from "./pages/Registro";
import NotFound from "./pages/ErrorPage";
import Inicio from "./pages/Inicio";
import Transferencia from "./pages/Transferencias/Transferencia";
import Account from "./pages/Informacion/Account";
import FormularioTransferir from "./pages/Transferencias/FormularioTransferir";
import FormularioTransferir2 from "./pages/Transferencias/FormularioTransferir2";

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageMain />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/User',
    element: <User />,
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
    path: '/Info',
    element: <Info />,
  },
  {
    path: '*',
    element: <NotFound/>,
  },
  {
    path: '/Cuenta',
    element: <Account/>,
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
