import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';



export default function LoginForm() {
  //Login
  let [data, setData] = useState([])
  let [loading, setLoading] = useState(false)
  let [error, setError] = useState(false)

  //Inputs
  let [{ email, password }, setLogin] = useState({ email: "", password: "" })


  let HandleEmail = ({ target }) => {
    console.log(target.value);
    setLogin((prevState) => ({ ...prevState, email: target.value }));
  };

  let HandlePassword = ({ target }) => {
    setLogin((prevState) => ({ ...prevState, password: target.value }));
  };
  const loginFetch = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, pass: password })
      });
      let result = response.JSON();
      setData(result);
    } catch (err) {
      setError(true)
      console.error(err);
      console.error("ggggggg");

    } finally {
      setLoading(false);
        console.log(result.err);
      localStorage.setItem('app_resto__user', data.id)
      localStorage.setItem('app_resto__user', data.email)
      window.location.pathname = "/"

    }
  }



  return (
    loading ? <>"loading"</> :
      error ? <>"hubo un error"</> :
        <>
          <div className="contenedor">
            <div className="card">
              <h1 id='card-titulo'>Login</h1>

              <form method='POST'>
                <div className="box-input">
                  <input type="text" id="email" required placeholder=" " onChange={HandleEmail} />
                  <label htmlFor="email">Email</label>
                  <button className='icono'>
                    <FontAwesomeIcon icon={faUser} />
                  </button>
                </div>
                <div className="box-input">
                  <input type="password" id="password" required placeholder=" " onChange={HandlePassword} />
                  <label htmlFor="password">Password</label>
                  <button className='icono'>
                    <FontAwesomeIcon icon={faLock} />
                  </button>
                </div>

              </form>

              <div className='password-text'>
                ¿Te olvidaste la contraseña? <a href="Email">Click aquí</a>
              </div>
              <div className="box-btn">
                <button onClick={() => loginFetch()}>LOGUEARSE</button>
              </div>
              <div className='register-text'>
                ¿Ya tienes una cuenta? <a href="Registrarse">Registrarse Aqui</a>
              </div>
            </div>
          </div>
        </>
  );
}