import React, { useState } from 'react';
import EmailInput from './EmailInput';      // Componente para el email
import PasswordInput from './PasswordInput'; // Componente para la contraseña
import ConfirmPasswordInput from './ConfirmPasswordInput'; // Componente para la confirmación de contraseña
import Button from './Button'; // Componente para el botón de registro
import PasswordRecoveryLink from './PasswordRecoveryLink'; // Enlace para recuperar contraseña
import LoginLink from './LoginLink';  // Enlace a la página de login

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log('Registro exitoso:', email, password);
    // Aquí iría la lógica para el registro, como una llamada a la API
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo para el email */}
      <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />

      {/* Campo para la contraseña */}
      <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />

      {/* Campo para la confirmación de contraseña */}
      <ConfirmPasswordInput value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

      {/* Botón de registro */}
      <Button text="REGISTRARSE" type="submit" className="login-button" />

      {/* Enlace para recuperar la contraseña */}
      <PasswordRecoveryLink />

      {/* Enlace para el login */}
      <LoginLink />
    </form>
  );
}
