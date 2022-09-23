// Imports
import React from 'react';
import Searchbar from './Searchbar';
import './nav.css';

const Navbar = () => {
    return (
        <nav className = 'nav'>
            <div className = 'nav-content'>
                <a className = "nav-items">
                    
                    {/* Saved Events */}
                    <a href = 'SavedEvents'>
                            Saved Events
                    </a>

                    {/* Search Bar */}
                    <a>
                        This will be the Search Bar
                        <Searchbar />
                    </a>

                    {/* Logout */}
                    <a>
                        Logout Button
                    </a>
                </a>
            </div>
        </nav> 
    )
};

// Export
export default Navbar;