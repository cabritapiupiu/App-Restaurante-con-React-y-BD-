// src/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import '../styles/Landing.css';

export default function Header() {
  return (
    <header>
      <div className="contenedor-logo">
        <a href="Landing" className="logo"></a>
      </div>
      <nav>
        <ul>
          <li><a href="Login">Login</a></li>
          <li><a href="Registro">Registro</a></li>
          <li><a href="Menu"><FontAwesomeIcon icon={faCartShopping} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faBagShopping} /></a></li>
          <li className="perfil">
            <a href="#">
              <img src="https://thumbs.dreamstime.com/b/perfil-de-usuario-vectorial-avatar-predeterminado-179376714.jpg" alt="Perfil" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
