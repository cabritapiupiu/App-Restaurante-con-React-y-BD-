import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CarritoItem from '../components/CarritoItem'; // Componente para mostrar cada ítem del carrito
import '../styles/Carrito.css'; // CSS de estilos

export default function Carrito() {
    const navigate = useNavigate();
    const [carrito, setCarrito] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [fetched, setFetched] = useState(false); // Flag para evitar múltiples peticiones

    // Obtén el usuario logueado desde localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // UseEffect para obtener los datos del carrito del usuario
    useEffect(() => {
        const fetchCarrito = async () => {
            // Verifica si el usuario está logueado
            if (!user) {
                setError("Por favor, inicia sesión para ver tu carrito.");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://localhost:3000/carrito?userId=${user.token}`); // Usamos el userId en la query
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const data = await response.json();
                console.log(data);

                setCarrito(data[0]);
                setLoading(false);
                setFetched(true); // Indica que ya se hizo la petición
            } catch (error) {
                console.error("Error al obtener el carrito:", error);
                setError(error.message);
                setLoading(false);
            }
        };

        if (!fetched) {
            fetchCarrito();
        }
    }, [user, fetched]);

    if (loading) {
        return <div>Cargando carrito...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (carrito.length === 0) {
        return <div>No hay productos en el carrito.</div>;
    }

    const handleItemClick = (id) => {
        navigate(`/Producto/${id}`);
    };

    return (
        <div className="carrito-container">
            <h1>Mi Carrito</h1>
            <div className="carrito-items">
                {carrito.map((item) => (
                    <CarritoItem
                        key={item.token} 
                        nombre={item.name}
                        imagen={item.imagenes}
                        precio={item.precio}
                        cantidad={item.cantidad}
                        onClick={() => handleItemClick(item.token)}
                    />
                ))}
            </div>
        </div>
    );
}
