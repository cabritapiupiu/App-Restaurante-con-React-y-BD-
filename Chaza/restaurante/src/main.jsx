import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logueo from "./components/inicioSesion/Logueo.jsx";
import Registrarse from './components/inicioSesion/Registrarse.jsx';
import Email from './components/inicioSesion/Email.jsx';
import App from './components/Landing/App.jsx';  // Este es el componente App
import Landing from './components/LandingPage/Landing.jsx';  // Asegúrate de que este sea el archivo correcto

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />  {/* Ruta de inicio */}
        <Route path='Landing' element={<Landing />} />  {/* Ruta para Landing */}
        <Route path='/Logueo' element={<Logueo />} />
        <Route path='/Registrarse' element={<Registrarse />} />
        <Route path='/Email' element={<Email />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
