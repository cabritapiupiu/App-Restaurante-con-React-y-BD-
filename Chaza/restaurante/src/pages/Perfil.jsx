import React, { useState, useEffect } from 'react';
import Headers from '../components/Headers';   // Verifica que estos componentes estén bien importados
import '../styles/perfil.css';  // Asegúrate de tener el CSS correctamente vinculado

export default function Perfil() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    if (loading) {
        return <div className="loading">Cargando...</div>;
    }

    if (!user) {
        window.location.pathname = "/login";  // Redirige si no hay usuario
        return null;
    }

    return (
        <>
            <Headers />  {/* El componente Header se mantiene consistente en toda la aplicación */}
            <div className="perfil-container">
                <div className="perfil-header">
                    <div className="perfil-avatar">
                        <img 
                            src="https://thumbs.dreamstime.com/b/perfil-de-usuario-vectorial-avatar-predeterminado-179376714.jpg" 
                            alt="Perfil" 
                            className="avatar-img"
                        />
                    </div>
                    <h1>Bienvenido, {user.name} {user.surname}!</h1>
                </div>

                <div className="perfil-info">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Nombre:</strong> {user.name}</p>
                    <p><strong>Apellido:</strong> {user.surname}</p>
                    <p><strong>Password:</strong> {user.pass}</p>
                    <p><strong>Id de usuario:</strong> {user.id_user}</p>
                </div>

                {/* Botón para cerrar sesión */}
                <button 
                    className="logout-btn"
                    onClick={() => {
                        localStorage.removeItem('user');  // Eliminar los datos del usuario
                        window.location.pathname = '/login';  // Redirigir al login
                    }}>
                    Cerrar sesión
                </button>
            </div>
        </>
    );
}
