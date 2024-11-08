// src/Plato.jsx
import React from 'react';

export default function Plato({ nombre, imagen, tiempo }) {
    return (
        <div className="plato">
            <div className="imagen-plato">
                <img src={imagen} alt={nombre} />
            </div>
            <h3 className="titulo">{nombre}</h3>
            <h3>TIEMPO DE TARDANZA: {tiempo}</h3>
        </div>
    );
}
