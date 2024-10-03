import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './inicioSesion.css';

export default function Email(){
  return (
    <>
      <div className="contenedor">
        <div className="card">
          <h1 id='card-titulo'>RECUPERAR CONTRASEÑA</h1>
          <div className='alert-text'>
            <p>Escribe el correo electronico que usaste para registrarte. Te enviaremos un correo electronico con instrucciones sobre como restablecer tu contraseña</p>
          </div>
          <div className="box-input">
            <input type="email" id="email" required placeholder=" " />
            <label htmlFor="email">Ingresar Email</label>
            <button className='icono'>
              <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
    
          <div className="box-btn">
            <button>RECUPERAR</button>
          </div>
          <div className='register-text'>
            ¿Ya tienes una cuenta? <a href="Registrarse">Registrarse</a>
          </div>
        </div>
      </div>
    </>
  );
}
