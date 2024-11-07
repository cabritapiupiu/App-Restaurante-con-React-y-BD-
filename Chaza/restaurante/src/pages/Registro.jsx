import React from 'react';
import RegisterForm from '../components/RegisterForm';  // Importamos el formulario de registro
import '../styles/inicioSesion.css';

export default function Registro() {
  return (
    <div className="contenedor">
      <div className="card">
        <h1 id='card-titulo'>Registro</h1>
        <RegisterForm />  {/* El formulario de registro */}
      </div>
    </div>
  );
}
