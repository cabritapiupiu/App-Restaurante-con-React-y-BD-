import React from 'react';
import { Link } from 'react-router-dom';  // Usamos Link de react-router-dom

export default function RegisterLink() {
  return (
    <div className="register-text">
      ¿No tienes una cuenta? <Link to="/Registro">Regístrate</Link>
    </div>
  );
}
