import Login from "./pages/Login"
import PageMain from "./pages/pageMain"
import Recuperar from "./pages/Recuperar";
import Info from "./pages/Informacion";
import User from "./pages/User";
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Register } from "./pages/Registro";
import NotFound from "./pages/ErrorPage";
import Inicio from "./pages/Inicio";

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
])
function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App
