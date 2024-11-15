// src/Article.jsx
import React, { useState, useEffect } from 'react';
import Plato from './Plato';
import '../styles/Landing.css';

export default function Article() {
    const [platos, setPlatos] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchPlatos = async () => {
            try {
                const response = await fetch('http://localhost:3000/promociones');
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();
    
                const platosData = Array.isArray(data) ? data : [data];
    
                setPlatos(platosData);
                console.log(platosData);
    
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener los platos:", error);
                setLoading(false);
            }
        };
    
        fetchPlatos();
    }, []);
    

    if (loading) {
        return <div>Cargando platillos...</div>;
    }

    return (
        <article>
    <h2>PLATILLOS</h2>
    <div className="container-plato">
        {platos.map((plato, index) => (
            <Plato
                key={index}
                nombre={plato.name}
                imagen={plato.imagenes}
                precio={plato.precio || "No disponible"}
            />
        ))}
    </div>
</article>

    );
}
