import React, { useState } from 'react';
import Headers from '../components/Headers';
import SearchBar from '../components/SearchBar';
import MenuPlato from '../components/MenuPlato';
import Filtros from '../components/Filtros';
import '../styles/SearchBar.css';

const Menu = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');  // Estado para el filtro de categoría

    // Función para manejar el término de búsqueda
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);  // Actualiza el término de búsqueda
    };

    // Función para manejar el filtro por categoría
    const handleFilter = (categoria) => {
        setCategoryFilter(categoria);  // Actualiza el filtro de categoría
    };

    return (
        <div className="App">
            <Headers />
            <span></span>
            <div className="Menu-navegador">
                <div className="search-bar-container">
                    <SearchBar onSearch={handleSearch} />
                </div>
                {/* Pasar la función handleFilter a Filtros como prop */}
                <Filtros onFilter={handleFilter} />
            </div>
            {/* Pasar el término de búsqueda y el filtro de categoría a MenuPlato */}
            <MenuPlato searchTerm={searchTerm} categoryFilter={categoryFilter} />
        </div>
    );
}

export default Menu;
