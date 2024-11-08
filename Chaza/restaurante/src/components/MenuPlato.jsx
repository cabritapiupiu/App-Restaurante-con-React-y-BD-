// src/MenuPlato.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Plato from './Plato';  // Asegúrate de importar el componente Plato
import '../styles/MenuPlato.css';

export default function MenuPlato() {
    const navigate = useNavigate();  // Este hook permite navegar a otras rutas

    const platos = [
        {
            id: 1,
            nombre: 'LOREM, IPSUM DOLOR.',
            imagen: 'https://via.placeholder.com/600x400?text=Platillo+1',
            tiempo: '00:00',
            precio: '25.00',
        },
        {
            id: 2,
            nombre: 'DOLOR SIT AMET.',
            imagen: 'https://via.placeholder.com/600x400?text=Platillo+2',
            tiempo: '10:00',
            precio: '25.00',
        },
        {
            id: 3,
            nombre: 'DOLOR SIT AMET.',
            imagen: 'https://via.placeholder.com/600x400?text=Platillo+2',
            tiempo: '10:00',
            precio: '25.00',
        },
        {
            id: 4,
            nombre: 'DOLOR SIT AMET.',
            imagen: 'https://via.placeholder.com/600x400?text=Platillo+2',
            tiempo: '10:00',
            precio: '25.00',
        },
        {
            id: 5,
            nombre: 'CONSECTETUR.',
            imagen: 'https://via.placeholder.com/600x400?text=Platillo+3',
            tiempo: '05:00',
            precio: '25.00',
        },
        {
            id: 6,
            nombre: 'SUSCIPIT LOREM.',
            imagen: 'https://via.placeholder.com/600x400?text=Platillo+4',
            tiempo: '15:00',
            precio: '25.00',
        },
        {
            id: 7,
            nombre: 'EXEMPLAR DOLOREMQUE.',
            imagen: 'https://via.placeholder.com/600x400?text=Platillo+5',
            tiempo: '12:00',
            precio: '25.00',
        }
    ];

    const handlePlatoClick = (plato) => {
        // Redirige a la misma página, pasando los datos en el state
        navigate('/plato', { state: plato });
    };

    return (
        <div className='container-menu'>
            {platos.map((plato) => (
                <Plato
                    key={plato.id}
                    nombre={plato.nombre}
                    imagen={plato.imagen}
                    tiempo={plato.tiempo}
                    precio={plato.precio}
                    onClick={() => handlePlatoClick(plato)}
                />
            ))}
        </div>
    );
}
