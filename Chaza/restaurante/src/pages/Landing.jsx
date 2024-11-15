import React from 'react';
import Headers from '../components/Headers';   // Verifica que estos componentes estén bien importados
import Mains from '../components/Mains';
import Articles from '../components/Articles';

const Landing = () => {
  return (
    <div className="App">
      <Headers />
      <Mains />
      <Articles />
    </div>
  );
}

export default Landing;
