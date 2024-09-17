//imports
import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({element}){
  const token = localStorage.getItem('token');
  console.log("Token:", token); // Añadir para depurar
  //si no hya toque mantener en login
  if (!token) {
    return <Navigate to="/Login" />;
  }

  //si hay toquen renderizar el componete hijo
  return element;
}

export default ProtectedRoute;