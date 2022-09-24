// Imports
import React from 'react';
import Searchbar from './navbar components/Searchbar';
import EventInput from './navbar components/CreateEvent';
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

                {/* Event Creation */}
                <div id = 'createEvent'>
                    <EventInput />
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