import React, { useState } from 'react';
import '../styles/AddPlato.css';

const AddPlato = () => {
  // Estados para cada campo del formulario
  const [categoria, setCategoria] = useState('entrada');
  const [name, setName] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');

  // Estados para manejar el proceso de carga y errores
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
  e.preventDefault();

  // Verificar que name es una cadena y no es vacío
  if (typeof name !== 'string' || !name.trim()) {
    setError("El name del platillo es requerido.");
    return;
  }

  // Crear el objeto del nuevo platillo
  const nuevoPlatillo = {
    categoria,
    name,
    descripcion,
    precio: parseFloat(precio),
    imagen,
  };

  console.log(nuevoPlatillo)

  setLoading(true);
  setError(null);

  try {
    const response = await fetch('http://localhost:3000/menu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoPlatillo),
    });

    const result = await response.json();

    if (!response.ok) {
      setError(result.message || 'Hubo un problema al agregar el platillo');
    } else {
      console.log('Platillo agregado exitosamente:', result);
      alert('Platillo agregado exitosamente');
      setCategoria('entrada');
      setName('');
      setDescripcion('');
      setPrecio('');
      setImagen('');
    }
  } catch (err) {
    setError('Error de conexión. Por favor, intenta más tarde.');
    console.error(err);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className='container__Add_plato'>
      <div className='addPlato'>
        <h1>Agregar Nuevo Platillo</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className='Add_input'
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder='name del Platillo'
            />
          </div>
          
          <div>
            <input
              className='Add_input'
              type="text"
              id="imagen"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              required
              placeholder='Ingresar URL de imagen'
            />
          </div>

          <div>
            <textarea
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              rows="4"
              required
              placeholder='Descripción'
            />
          </div>

          <div>
            <input
              className='Add_input'
              type="number"
              id="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              min="0"
              step="0.01"
              required
              placeholder='Precio'
            />
          </div>

          <div>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            >
              <option value="entrada">Entrada</option>
              <option value="plato_principal">Plato Principal</option>
              <option value="postre">Postre</option>
              <option value="bebida">Bebida</option>
            </select>
          </div>

          {error && <div className="error-message">{error}</div>}
          <button className='Add_button' type="submit" disabled={loading}>
            {loading ? "Cargando..." : "Agregar Platillo"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPlato;
