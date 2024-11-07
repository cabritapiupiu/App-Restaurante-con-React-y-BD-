import React from 'react';
import './Landing.css';  // Asegúrate de que este archivo CSS esté en la misma carpeta o ajusta la ruta si es necesario
import Headers from './Headers';   // Verifica que estos componentes estén bien importados
import Mains from './Mains';
import Articles from './Articles';

export default function Landing() {
  return (
    <div className="App">
      <Headers />
      <Mains />
      <Articles />
    </div>
  );
}
