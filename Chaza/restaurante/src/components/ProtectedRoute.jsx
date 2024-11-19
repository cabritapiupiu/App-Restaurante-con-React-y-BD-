// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, restricted }) => {
  const user = localStorage.getItem('user');  // Verifica si hay un usuario logueado
  
  // Si la ruta es restringida (Login/Registro) y el usuario está logueado, redirige al perfil
  if (restricted && user) {
    return <Navigate to="/Perfil" />;  // Redirige al perfil si ya está logueado
  }

  // Si no está logueado y la ruta no está protegida, redirige a Login
  if (!user && !restricted) {
    return <Navigate to="/Login" />;  // Redirige a Login si no hay usuario logueado
  }

  // Si todo está bien, renderiza los componentes hijos
  return children;
};

export default ProtectedRoute;
