import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/detalles.css';
import Headers from '../components/Headers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function Detalles() {
    const { id } = useParams();
    const [plato, setPlato] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [popupVisible, setPopupVisible] = useState(false);
    const [cantidad, setCantidad] = useState(1);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlato = async () => {
            try {
                const response = await fetch(`http://localhost:3000/detalles/${id}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const data = await response.json();
                if (data.length > 0) {
                    const platoData = data[0];
                    setPlato(platoData);
                    setLoading(false);
                } else {
                    setError("No se encontró el plato.");
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error al obtener los detalles del plato:", error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchPlato();
    }, [id]);

    if (loading) {
        return <div>Cargando detalles...</div>;
    }

    if (error) {
        return <div>Error al cargar los detalles del plato: {error}</div>;
    }

    if (!plato) {
        return <div>No se encontraron detalles para este plato.</div>;
    }

    const handleAgregarAlCarrito = () => {
        setPopupVisible(true);
    };

    const handleRedirigirLanding = () => {
        navigate('/');
    };

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const disminuirCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <>
            <Headers />
            <div className="detalle-plato">
                <div className="container-img">
                    <img className='prime' src={plato.imagenes} alt={plato.name} />
                    <img className='after' src={plato.imagenes} alt={plato.name} />
                </div>
                <div className="container-tittle">
                    <h1>{plato.name}</h1>
                    <p className='precio'>{plato.precio}$</p>
                </div>
                <div className="container-details">
                    <p>Disfruta del crujido perfecto con este delicioso platillo, que ha sido cuidadosamente frito hasta alcanzar una textura dorada y uniforme que te invita a probarlo. Cada pieza tiene una capa exterior crocante que, al morderla, revela un interior tierno y jugoso, creando una experiencia contrastante que es irresistible al paladar. La combinación de lo crujiente por fuera y lo suave por dentro hace que cada bocado sea una explosión de sabor y textura, una verdadera delicia en cada instante.</p>
                </div>
                <div className="buttons">
                    <div className="cant">
                        <button onClick={disminuirCantidad}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <div className="user">
                            {cantidad}
                        </div>
                        <button onClick={aumentarCantidad}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                    <div className="compra">
                        <button onClick={handleAgregarAlCarrito}>Guardar en Carrito</button>
                    </div>
                </div>
            </div>

            {popupVisible && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>¡Gracias por tu compra!</h2>
                        <p>Tu platillo se ha agregado al carrito.</p>
                        <button onClick={handleRedirigirLanding}>Volver a la Landing</button>
                    </div>
                </div>
            )}
        </>
    );
}
