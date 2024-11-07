import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registro from './pages/Registro.jsx';  // Asegúrate de que este sea el archivo correcto
import Email from './pages/Email.jsx';
import Landing from './pages/Landing.jsx';  // Asegúrate de que este sea el archivo correcto
import Login from './pages/Login.jsx';  // Asegúrate de que este sea el archivo correcto
import Menu from './pages/Menu.jsx';  // Asegúrate de que este sea el archivo correcto


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />  {/* Ruta para Landing */}
        <Route path='/Login' element={<Login />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Registro' element={<Registro />} />
        <Route path='/Email' element={<Email />} />
        <Route path='/Menu' element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);