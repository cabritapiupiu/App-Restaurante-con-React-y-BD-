// src/Main.js
import React from 'react';
import './Landing.css'; // Importa el archivo CSS del Main

export default function Main(){
    return (
        <main>  
            <div className="contenedor-main">
                <div className="descripcion">
                    <aside className="descripcion-texto">
                        <h1>BIENVENIDO A EDELGESCHMACK</h1>
                        <p>En Edelgeschmack, nos apasiona ofrecerte una experiencia gastronómica única...</p>
                    </aside>
                    <div className="logos">
                        <ul>
                            <li><a href="#"><i className="fa-solid fa-truck-fast"></i></a></li>
                            <li><a href="#"><i className="fa-solid fa-gauge-simple"></i></a></li>
                            <li><a href="#"><i className="fa-solid fa-music"></i></a></li>
                            <li><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i className="fa-solid fa-mug-hot"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="image-restaurante">
                    <img src="https://via.placeholder.com/600x400" alt="Imagen Restaurante" />
                    <ul className="indicadores">
                        <li className="active"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </main>
    );
}