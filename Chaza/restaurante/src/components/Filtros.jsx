import React from 'react';
import '../styles/Filtros.css';

export default function Filtros({ onFilter }) {
    // Función para manejar el clic en los filtros
    const handleFilter = (categoria) => {
        if (typeof onFilter === 'function') {
            onFilter(categoria); // Llamamos a la función onFilter que viene de Menu.jsx
        }
    };

    return (
        <div className="filtros">
            <button onClick={() => handleFilter('1')}>ENTRADAS</button>
            <button onClick={() => handleFilter('2')}>PLATOS PRINCIPALES</button>
            <button onClick={() => handleFilter('3')}>POSTRES</button>
            <button onClick={() => handleFilter('4')}>BEBIDAS</button>
        </div>
    );
}
