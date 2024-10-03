import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './inicioSesion.css';

export default function Logueo(){
  return (
    <>
      <div className="contenedor">
        <div className="card">
          <h1 id='card-titulo'>Login</h1>
          <div className="box-input">
            <input type="email" id="email" required placeholder=" " />
            <label htmlFor="email">Email</label>
            <button className='icono'>
              <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
          <div className="box-input">
            <input type="password" id="password" required placeholder=" " />
            <label htmlFor="password">Password</label>
            <button className='icono'>
              <FontAwesomeIcon icon={faLock} />
            </button>
          </div>
          <div className='password-text'>
            ¿Te olvidaste la contraseña? <a href="Email">Click aquí</a>
          </div>
          <div className="box-btn">
            <button>LOGUEARSE</button>
          </div>
          <div className='register-text'>
            ¿Ya tienes una cuenta? <a href="Registrarse">Registrarse Aqui</a>
          </div>
        </div>
      </div>
    </>
  );
}
