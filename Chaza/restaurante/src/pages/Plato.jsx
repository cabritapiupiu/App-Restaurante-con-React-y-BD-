// src/PlatoDetalles.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';  // Importamos useLocation

export default function PlatoDetalles() {
    const location = useLocation();  // Accedemos a la ubicación actual
    const plato = location.state;  // Aquí obtenemos los datos del plato del state

    if (!plato) {
        return <p>Plato no encontrado</p>;
    }

    return (
        <div className="plato-detalles">
            <h1>{plato.nombre}</h1>
            <img src={plato.imagen} alt={plato.nombre} />
            <p><strong>Tiempo:</strong> {plato.tiempo}</p>
            <p><strong>Precio:</strong> ${plato.precio}</p>
            <p><strong>Descripción:</strong> {plato.descripcion}</p>
        </div>
    );
}
