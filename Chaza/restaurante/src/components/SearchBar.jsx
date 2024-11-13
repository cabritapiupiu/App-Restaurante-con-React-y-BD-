import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const SearchBar = () => {
    return (
        <div className="search-container">
            <div className="search">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar plato..."
                />
                <button className="search-button">
                    <i><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
