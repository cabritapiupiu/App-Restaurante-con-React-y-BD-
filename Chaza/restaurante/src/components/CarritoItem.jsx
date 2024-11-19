import React from 'react';
import PropTypes from 'prop-types';  // Opcional para validación de props

// Función para convertir el precio en string a un número
const convertirPrecio = (precioString) => {
    const precioLimpio = precioString.replace(/[^\d.-]/g, '');
    return parseFloat(precioLimpio);
};

export default function CarritoItem({ nombre, imagen, precio, cantidad, onClick }) {
    const precioNumerico = convertirPrecio(precio);
    const total = precioNumerico * cantidad;

    return (
        <div className="carrito-item" onClick={onClick}>
            <img src={imagen} alt={nombre} className="carrito-item-imagen" />
            <div className="carrito-item-info">
                <h3>{nombre}</h3>
                <p>Precio: ${precioNumerico.toFixed(2)}</p>
                <p>Cantidad: {cantidad}</p>
                <p>Total: ${total.toFixed(2)}</p>
            </div>
        </div>
    );
}

CarritoItem.propTypes = {
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
    cantidad: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};
