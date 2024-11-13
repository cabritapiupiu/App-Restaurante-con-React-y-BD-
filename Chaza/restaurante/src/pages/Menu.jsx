import React from 'react';
import Headers from '../components/Headers';
import SearchBar from '../components/SearchBar';
import MenuPlato from '../components/MenuPlato';
import Filtros from '../components/Filtros';
import '../styles/SearchBar.css';

const Menu = () => {
    return (
        <div className="App">
            <Headers />
            <span></span>
            <div className="Menu-navegador">
                <div className="search-bar-container">
                    <SearchBar />
                </div>
                <Filtros className="filtros" />
            </div>
            <MenuPlato />
        </div>
    );
}

export default Menu;
