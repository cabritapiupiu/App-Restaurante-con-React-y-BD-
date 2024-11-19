

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import '../styles/Landing.css';

export default function Header() {
  const [user, setUser] = useState(null);  // Estado para almacenar los datos del usuario

  useEffect(() => {
    // Verificar si ya hay un usuario logueado en localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));  // Convertir la cadena en objeto y guardar en el estado
    }
  }, []);  // Solo se ejecuta una vez cuando el componente se monta

  // Si el usuario está logueado, mostrar el botón de "Cerrar sesión" y "Perfil"
  const renderLoggedInLinks = () => (
    <>

      <li><a href="Carrito"><FontAwesomeIcon icon={faCartShopping} /></a></li>
      <li><a href="Menu"><FontAwesomeIcon icon={faBagShopping} /></a></li>
      <li className='perfil'>
        <a href="Perfil">
          <img src="https://thumbs.dreamstime.com/b/perfil-de-usuario-vectorial-avatar-predeterminado-179376714.jpg" alt="Perfil" />
        </a>
      </li>
    </>
  );

  // Si el usuario no está logueado, mostrar los botones de "Login" y "Registro"
  const renderLoggedOutLinks = () => (
    <>
      <li><a href="Login">Login</a></li>
      <li><a href="Registro">Registro</a></li>

      
    </>
  );

  return (
    <>
    <header>
      <div className="contenedor-logo">
        <a href="/Landing" className="logo"></a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="Menu">Menu</a>
          </li>
          {user ? renderLoggedInLinks() : renderLoggedOutLinks()}  {/* Renderiza según si el usuario está logueado */}
        </ul>
      </nav>
    </header>
    <span></span>
    </>
  );
}
