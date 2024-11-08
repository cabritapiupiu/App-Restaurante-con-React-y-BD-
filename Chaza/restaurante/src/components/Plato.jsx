// src/Plato.jsx
import React from 'react';

export default function Plato({ nombre, imagen, tiempo, precio, onClick }) {
    return (
        <button className="plato" onClick={onClick}>
            <div className="imagen-plato">
                <img src={imagen} alt={nombre} />
            </div>
            <h3 className="titulo">{nombre}</h3>
            <h3>TIEMPO DE TARDANZA: {tiempo}</h3>
            <h3>{precio}</h3>
        </button>
    );
}
