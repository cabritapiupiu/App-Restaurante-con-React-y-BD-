import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registro from './pages/Registro.jsx';
import Email from './pages/Email.jsx';
import Landing from './pages/Landing.jsx'; 
import Login from './pages/Login.jsx'; 
import Detalles from './pages/Detalles.jsx'; 
import Menu from './pages/Menu.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} /> 
        <Route path='/Login' element={<Login/>} />
        <Route path='/Landing' element={<Landing/>} />
        <Route path='/Registro' element={<Registro />} />
        <Route path="/Detalles/:id" element={<Detalles />} />
        <Route path='/Email' element={<Email />} />
        <Route path='/Menu' element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);