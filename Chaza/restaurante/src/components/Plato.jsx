// src/Plato.jsx
import React from 'react';

export default function Plato({ 
    nombre, 
    imagen, 
    token, 
    precio, 
    onClick, 
    showImagen = true,
    showDescripcion = true,
    showTiempo = true,
}) {
    return (
        <button className="plato" onClick={onClick}>
            {showImagen && imagen && (
                <div className="imagen-plato">
                    <img src={imagen} alt={nombre} />
                </div>
            )}

            <h3 className="titulo">{nombre}</h3>

            <h3>${precio}</h3>
        </button>
    );
}
