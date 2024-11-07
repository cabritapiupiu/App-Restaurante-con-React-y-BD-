import React from 'react';
import { Link } from 'react-router-dom';  // Usamos Link de react-router-dom

export default function PasswordRecoveryLink() {
  return (
    <div className="password-text">
      ¿Te olvidaste la contraseña? <Link to="/Email">Click aquí</Link>
    </div>
  );
}
