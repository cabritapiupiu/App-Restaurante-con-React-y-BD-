// src/Header.js
import React from 'react';
import './Landing.css'; // Importa el archivo CSS del Header

export default function Header(){
    return (
        <header>
            <div className="contenedor-logo">
                <div className="logo"></div>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Registro</a></li>
                    <li><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
                    <li><a href="#"><i className="fa-solid fa-bag-shopping"></i></a></li>
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
