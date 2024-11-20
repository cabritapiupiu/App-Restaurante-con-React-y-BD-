// src/App.jsx (o donde tengas la configuración de rutas)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registro from './pages/Registro.jsx';
import Email from './pages/Email.jsx';
import Landing from './pages/Landing.jsx'; 
import Login from './pages/Login.jsx'; 
import Detalles from './pages/Detalles.jsx'; 
import Menu from './pages/Menu.jsx';
import Perfil from './pages/Perfil.jsx';
import Carrito from './pages/Carrito.jsx';
import AddPlato from './pages/AddPlato.jsx';


import ProtectedRoute from './components/ProtectedRoute';  // Importamos ProtectedRoute

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        {/* RUTA PREDETERMINADA */}
        <Route path='/' element={<Landing />} /> 

        {/* RUTAS SI NO ESTAS LOGUEADO */}
        <Route
          path="/Login"
          element={
            <ProtectedRoute restricted={true}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Registro"
          element={
            <ProtectedRoute restricted={true}>
              <Registro />
            </ProtectedRoute>
          }
        />


        {/* RUTAS SI ESTAS LOGUEADO */}
        <Route
          path="/Perfil"
          element={
            <ProtectedRoute restricted={false}>
              <Perfil />
            </ProtectedRoute>
          }
        />

        <Route
          path="/AddPlato"
          element={
            <ProtectedRoute restricted={false}>
              <AddPlato />
            </ProtectedRoute>
          }
        />

        <Route path="/Login" element={<Login />} />

        <Route path="/Detalles/:id" element={<Detalles />} />
        <Route path="/Email" element={<Email />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Carrito" element={<Carrito />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
