// src/Main.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faGaugeSimple, faMusic, faCartShopping, faMugHot } from '@fortawesome/free-solid-svg-icons';
import '../styles/Landing.css';

export default function Main(){
    return (
        <main>  
            <div className="contenedor-main">
                <div className="descripcion">
                    <aside className="descripcion-texto">
                        <h1>BIENVENIDO A EDELGESCHMACK</h1>
                        <p>En Edelgeschmack, nos apasiona ofrecerte una experiencia gastronómica única que deleite todos tus sentidos. Nuestro restaurante es el lugar perfecto para disfrutar de platos elaborados con ingredientes frescos y de la más alta calidad, preparados con un toque de innovación que respeta la tradición culinaria. Cada uno de nuestros platillos es una obra maestra que combina sabor, textura y presentación, creando una experiencia memorable en cada bocado.</p>
                    </aside>
                    <div className="logos">
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faTruckFast} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faGaugeSimple} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faMusic} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faCartShopping} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faMugHot} /></a></li>
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
