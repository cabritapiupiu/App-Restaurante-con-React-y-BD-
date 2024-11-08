// src/MenuPlato.jsx
import React from 'react';
import Plato from './Plato';  // Asegúrate de importar el componente Plato
import '../styles/Landing.css';
import '../styles/MenuPlato.css';

export default function MenuPlato() {
    const platos = [
        {
            nombre: 'LOREM, IPSUM DOLOR.',
            imagen: 'https://via.placeholder.com/600x400?text=Platillo+1',
            tiempo: '00:00',
        },
        {
            nombre: 'DOLOR SIT AMET.',
            imagen: 'https://via.placeholder.com/600x400?text=Platillo+2',
            tiempo: '10:00',
        },
        {
            nombre: 'DOLOR SIT AMET.',
            imagen: 'https://via.placeholder.com/600x400?text=Platillo+2',
            tiempo: '10:00',
        },
        {
            nombre: 'DOLOR SIT AMET.',
            imagen: 'https://via.placeholder.com/600x400?text=Platillo+2',
            tiempo: '10:00',
        },
        {
            nombre: 'CONSECTETUR.',
            imagen: 'https://via.placeholder.com/600x400?text=Platillo+3',
            tiempo: '05:00',
        },
        {
            nombre: 'SUSCIPIT LOREM.',
            imagen: 'https://via.placeholder.com/600x400?text=Platillo+4',
            tiempo: '15:00',
        },
        {
            nombre: 'EXEMPLAR DOLOREMQUE.',
            imagen: 'https://via.placeholder.com/600x400?text=Platillo+5',
            tiempo: '12:00',
        }
    ];

    return (
        <div className='container-menu'>
            {platos.map((plato, index) => (
                <Plato
                    key={index}
                    nombre={plato.nombre}
                    imagen={plato.imagen}
                    tiempo={plato.tiempo}
                />
            ))}
        </div>
    );
}
