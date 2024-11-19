import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

export default function LoginForm() {
  // Estado de la aplicación
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  // Inputs
  let [{ email, password }, setLogin] = useState({ email: "", password: "" });

  let HandleEmail = ({ target }) => {
    setLogin((prevState) => ({ ...prevState, email: target.value }));
  };

  let HandlePassword = ({ target }) => {
    setLogin((prevState) => ({ ...prevState, password: target.value }));
  };

const loginFetch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");  // Limpiar el error previo

    try {
        const response = await fetch('http://localhost:3000/user', {
          method: 'POST',
          body: JSON.stringify({ email, pass: password }),
          headers: { 'Content-Type': 'application/json' },
      });
    

        const data = await response.json();

        if (response.ok) {
            // Si el login fue exitoso, mostramos los datos del usuario
            console.log('Login exitoso', data.user);

            // Aquí puedes hacer lo que quieras con los datos del usuario, como redirigir
            window.location.pathname = "/landing"; // Redirigir a una página de perfil, por ejemplo
        } else {
            // Si hay un error (usuario o contraseña incorrectos), mostramos el mensaje
            setError(data.message);
        }
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};





  return (
    loading ? <>"Cargando..."</> :
    <>
      <div className="contenedor">
        <div className="card">
          <h1 id="card-titulo">Login</h1>

          <form method="POST" onSubmit={loginFetch}>
            <div className="box-input">
              <input
                type="text"
                id="email"
                required
                placeholder=" "
                value={email}
                onChange={HandleEmail}
              />
              <label htmlFor="email">Email</label>
              <button className="icono">
                <FontAwesomeIcon icon={faUser} />
              </button>
            </div>
            <div className="box-input">
              <input
                type="password"
                id="password"
                required
                placeholder=" "
                value={password}
                onChange={HandlePassword}
              />
              <label htmlFor="password">Password</label>
              <button className="icono">
                <FontAwesomeIcon icon={faLock} />
              </button>
            </div>

            <div className="password-text">
              ¿Te olvidaste la contraseña? <a href="Email">Click aquí</a>
            </div>
            {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>} {/* Mostrar el error aquí */}

            <div className="box-btn">
              <button type="submit">LOGUEARSE</button>
            </div>
            <div className="register-text">
              ¿No tienes una cuenta? <a href="Registro">Registrarse Aquí</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}