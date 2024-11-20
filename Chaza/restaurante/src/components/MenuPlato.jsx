import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Plato from './Plato';
import '../styles/MenuPlato.css';

export default function MenuPlato({ searchTerm, categoryFilter }) {
    const navigate = useNavigate();
    const [platos, setPlatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Obtener el usuario desde localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // Función para obtener los platos desde la API
    const fetchPlatos = async (searchTerm = '', category = '') => {
        try {
            let url = 'http://localhost:3000/platillos';
            if (searchTerm) {
                url += `?search=${searchTerm}`;
            }
            if (category) {
                url += searchTerm ? `&category=${category}` : `?category=${category}`;
            }
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            setPlatos(data);
            setLoading(false);
        } catch (error) {
            console.error('Error al obtener los platos:', error);
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPlatos(searchTerm, categoryFilter);  // Pasar tanto searchTerm como categoryFilter
    }, [searchTerm, categoryFilter]);  // Depender de ambos, el término de búsqueda y el filtro de categoría

    if (loading) {
        return <div>Cargando platos...</div>;
    }

    if (error) {
        return <div>Error al cargar los platos: {error}</div>;
    }

    if (platos.length === 0) {
        return <div>No hay platos disponibles.</div>;
    }

    // Función para manejar el clic en un plato y navegar a su detalle
    const handlePlatoClick = (id) => {
        navigate(`/Detalles/${id}`);
    };

    return (
        <div className="menu-plato">
            {user && user.role === 'Administrador' && (
                <a className='add_plato' href='AddPlato'>+</a>
            )}

            {/* Mostrar los platos */}
            {platos.map((plato) => (
                <Plato
                    key={plato.id_menu}
                    nombre={plato.name}
                    imagen={plato.imagenes}
                    token={plato.token}
                    precio={plato.precio}
                    onClick={() => handlePlatoClick(plato.id_menu)}
                    showImagen={true}
                    showDescripcion={true}
                    showTiempo={true}
                />
            ))}
        </div>
    );
}
