import React from 'react';
import LoginForm from '../components/LoginForm';  // Importamos el formulario de login
import '../styles/inicioSesion.css';

export default function Login() {
  return (
    <div className="contenedor">
      <div className="card">
        <h1 id="card-titulo">INICIAR SESIÓN</h1>
        <LoginForm />  {/* Formulario de login */}
      </div>
    </div>
  );
}
