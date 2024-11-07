import React from 'react';
import EmailForm from '../components/EmailForm';  // Importamos el formulario de login
import '../styles/inicioSesion.css';

export default function Email() {
  return (
    <div className="contenedor">
      <div className="card">
        <h1 id="card-titulo">RECUPERAR CONTRASEÑA</h1>
        <EmailForm />  {/* Formulario de login */}
      </div>
    </div>
  );
}
