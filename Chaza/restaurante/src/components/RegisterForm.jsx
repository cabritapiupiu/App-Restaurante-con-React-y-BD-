import React, { useState } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import ConfirmPasswordInput from './ConfirmPasswordInput';
import Button from './Button';
import PasswordRecoveryLink from './PasswordRecoveryLink';
import LoginLink from './LoginLink';

export default function RegisterForm() {
  const [nick, setNick] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nick, name, surname, email, pass: password }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || 'Hubo un problema al registrar el usuario');
      } else {
        console.log('Usuario registrado exitosamente:', result);
        alert('¡Registro exitoso! Puedes iniciar sesión ahora.');
        window.location.pathname = "/login";
      }
    } catch (err) {
      setError('Error de conexión. Por favor, intenta más tarde.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
        <form onSubmit={handleSubmit}>
          <div className="box-input">
            <input
              type="text"
              id="nick"
              required
              value={nick}
              onChange={(e) => setNick(e.target.value)}
              placeholder=" "
            />
            <label htmlFor="nick">Nick</label>
          </div>

          <div className="box-input">
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" "
            />
            <label htmlFor="name">Nombre</label>
          </div>

          <div className="box-input">
            <input
              type="text"
              id="surname"
              required
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder=" "
            />
            <label htmlFor="surname">Apellido</label>
          </div>

          <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" />
          
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />

          <ConfirmPasswordInput value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          {error && <div className="error-message">{error}</div>}

          <Button text={loading ? "Cargando..." : "REGISTRARSE"} onClick={handleSubmit} className="register-button" />

          <PasswordRecoveryLink />
          
          <LoginLink />
        </form>
  );
}
