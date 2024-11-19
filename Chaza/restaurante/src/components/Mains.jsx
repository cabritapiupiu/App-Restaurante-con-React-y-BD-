import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast, faGaugeSimple, faMusic, faCartShopping, faMugHot } from '@fortawesome/free-solid-svg-icons';
import '../styles/Landing.css';

export default function Main() {
    const [imagenes, setImagenes] = useState([]);  // Estado para las imágenes
    const [loading, setLoading] = useState(true);  // Estado de carga
    const [currentImageIndex, setCurrentImageIndex] = useState(0);  // Estado para la imagen actual

    // useEffect para hacer la solicitud de imágenes a la API
    useEffect(() => {
        const fetchImagenes = async () => {
            try {
                const response = await fetch('http://localhost:3000/fotos');  // La URL de tu API
                const data = await response.json();

                if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0])) {
                    setImagenes(data[0]);  // Suponiendo que las imágenes están en el primer array
                } else {
                    console.error("Formato de datos inesperado:", data);
                    setImagenes([]);  // Si no se reciben las imágenes correctamente
                }
                setLoading(false);  // Cambiar el estado a false cuando la carga termine
            } catch (error) {
                console.error("Error al obtener las fotos:", error);
                setLoading(false);
            }
        };

        fetchImagenes();
    }, []);  // Solo se ejecuta una vez cuando el componente se monta

    // Si estamos cargando, mostramos un mensaje
    if (loading) {
        return <div>Cargando imágenes...</div>;
    }

    // Función para manejar el cambio de imagen al hacer clic en los indicadores
    const handleIndicatorClick = (index) => {
        if (index >= 0 && index < imagenes.length) {
            setCurrentImageIndex(index);
        }
    };

    return (
        <main>  
            <div className="contenedor-main">
                <div className="descripcion">
                    <aside className="descripcion-texto">
                        <h1>BIENVENIDO A EDELGESCHMACK</h1>
                        <p>En Edelgeschmack, nos apasiona ofrecerte una experiencia gastronómica única que deleite todos tus sentidos. Nuestro restaurante es el lugar perfecto para disfrutar de platos elaborados con ingredientes frescos y de la más alta calidad, preparados con un toque de innovación que respeta la tradición culinaria. Cada uno de nuestros platillos es una obra maestra que combina sabor, textura y presentación, creando una experiencia memorable en cada bocado.</p>
                    </aside>
                    <div className="logos">
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faTruckFast} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faGaugeSimple} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faMusic} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faCartShopping} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faMugHot} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="image-restaurante">
                    {/* Mostrar la imagen actual */}
                    <img 
                        src={imagenes[currentImageIndex]?.imagenes} 
                        alt={`Imagen Restaurante ${currentImageIndex}`} 
                        className="restaurant-image" 
                    />

                    {/* Indicadores (círculos) */}
                    <ul className="indicadores">
                        {imagenes.map((imagen, index) => (
                            <li
                                key={index}
                                className={index === currentImageIndex ? "active" : ""}
                                onClick={() => handleIndicatorClick(index)}  // Cambiar imagen al hacer clic
                            ></li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}
