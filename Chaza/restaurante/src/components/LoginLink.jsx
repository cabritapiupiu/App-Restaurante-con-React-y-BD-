import React from 'react';
import { Link } from 'react-router-dom';  // Usamos Link de react-router-dom

export default function LoginLink() {
  return (
    <div className="register-text">
      <p>¿Ya tienes cuenta? <Link to="/Login">Loguearse aquí</Link></p>
    </div>
  );
}
