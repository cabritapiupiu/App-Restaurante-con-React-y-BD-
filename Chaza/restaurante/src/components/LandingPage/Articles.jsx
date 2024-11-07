// src/Article.js
import React from 'react';
import './Landing.css'; // Importa el archivo CSS del Article

export default function Article(){
    return (
        <article>
            <h2>PLATILLOS</h2>
            <div className="container-plato">
                <div className="plato">
                    <div className="imagen-plato">
                        <img src="https://via.placeholder.com/600x400?text=Platillo+1" alt="Platillo 1" />
                    </div>
                    <h3 className="titulo">LOREM, IPSUM DOLOR.</h3>
                    <h3>TIEMPO DE TARDANZA: 00:00</h3>
                </div>
                {/* Añadir más platillos de la misma forma */}
            </div>
        </article>
    );
}