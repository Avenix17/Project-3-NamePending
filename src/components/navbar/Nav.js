// Imports
import React from 'react';
import Searchbar from './Searchbar';
import './nav.css';

const Navbar = () => {
    return (
        <nav className = 'nav'>
            <div className = 'nav-items'>
                
                {/* Saved Events */}
                <button id = 'savedEvents'>
                        Saved Events
                </button>

                {/* Search Bar */}
                <div id = 'searchBar'>
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