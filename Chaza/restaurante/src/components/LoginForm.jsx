import React, { useState } from 'react';
import EmailInput from './EmailInput'; // Componente para el campo de usuario
import PasswordInput from './PasswordInput'; // Componente para el campo de contraseña
import Button from './Button'; // Componente para el botón de login
import RegisterLink from './RegisterLink'; // Enlace para registrarse

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login enviado:', username, password);
    // Aquí iría la lógica para el inicio de sesión, como una llamada a la API
  };

  return (
    <form onSubmit={handleSubmit}>
      <EmailInput value={username} onChange={(e) => setUsername(e.target.value)} />
      <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
      
      {/* Botón de login */}
      <Button text="INICIAR SESIÓN" type="submit" className="login-button" />

      {/* Enlace para registrarse */}
      <RegisterLink />
    </form>
  );
}
