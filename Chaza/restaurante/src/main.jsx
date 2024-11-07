import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logueo from "./components/inicioSesion/Logueo.jsx";
import Registrarse from './components/inicioSesion/Registrarse.jsx';
import Email from './components/inicioSesion/Email.jsx';
import App from './components/Landing/App.jsx';

const ENDPOINTS = {
  LOGIN: "http://localhost:3000/user",
  REGISTER: "http://localhost:3000/register"
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='Logueo' element={<Logueo endpoint={ENDPOINTS.LOGIN}/>} />
        <Route path='Registrarse' element={<Registrarse />} />
        <Route path='Email' element={<Email/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)