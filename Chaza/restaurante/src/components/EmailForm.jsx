import React, { useState } from 'react';
import EmailInput from './EmailInput'; // Componente para el campo de usuario
import Button from './Button'; // Componente para el botón de login
import LoginLink from './LoginLink'; // Enlace para registrarse

export default function EmailForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login enviado:', username, password);
        // Aquí iría la lógica para el inicio de sesión, como una llamada a la APIs
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='alert-text'>
                <p>Escribe el correo electronico que usaste para registrarte. Te enviaremos un correo electronico con instrucciones sobre como restablecer tu contraseña</p>
            </div>
            <EmailInput value={username} onChange={(e) => setUsername(e.target.value)} />

            {/* Botón de login */}
            <Button text="RECUPERAR" type="submit" className="login-button" />

            {/* Enlace para registrarse */}
            <LoginLink />
        </form>
    );
}
