// Imports
import React from 'react';
import Searchbar from './Searchbar';
import './nav.css';

const Navbar = () => {
    return (
        <nav className = 'nav'>
            <div className = 'nav-items'>
                
                {/* Saved Events */}
                <a href = '#SavedEvents'>
                        Saved Events
                </a>

                {/* Search Bar */}
                <div id = 'searchBar'>
                    This will be the Search Bar
                    <Searchbar />
                </div>

                {/* Logout */}
                <button id = 'logout'>
                    Logout Button
                </button>
            </div>
        </nav> 
    )
};

// Export
export default Navbar;