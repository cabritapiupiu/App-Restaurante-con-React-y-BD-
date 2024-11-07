import React from 'react';
import Headers from '../components/Headers';   // Verifica que estos componentes estén bien importados
import SearchBar from '../components/SearchBar';   // Verifica que estos componentes estén bien importados
import '../styles/SearchBar.css';

const Menu = () => {
    return (
        <div className="App">
            <Headers />
            <span></span>
            <SearchBar />
        </div>
    );
}

export default Menu;
