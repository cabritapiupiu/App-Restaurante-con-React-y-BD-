import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Manejar el cambio del input
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Manejar el evento de búsqueda (cuando presionan Enter o el botón)
    const handleSearch = () => {
        if (typeof onSearch === 'function') {
            onSearch(searchTerm);  // Pasar el término de búsqueda al componente padre
        } else {
            console.error("onSearch no es una función");
        }
    };

    return (
            <div className="search">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar plato..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type='submit' className="search-button" onClick={handleSearch}>
                    <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                </button>
            </div>
    );
};

export default SearchBar;
