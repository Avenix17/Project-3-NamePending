// Imports
import React, { useState } from "react";
import Searchbar from "./navbar components/Searchbar";
import EventInput from "./navbar components/CreateEvent";
import "./nav.css";

const Navbar = () => {
  // Saved events button

  // Event creation button
  const [showEvent, setShowEvent] = useState(false);

  return (
    <nav className="topnav">

      {/* Search Bar */}
      <div id="searchBar">
        <Searchbar />
      </div>
      
      <div className="nav-items">
        {/* Saved Events */}
        <div id="savedEvents">
          <button id="savedEventsButton">Saved Events</button>
        </div>

        {/* Event Creation */}
        <div id="createEvent">
          <button
            id="eventInputButton"
            onClick={showEvent}
            value="Create Event"
          >

            Create Event
          </button>
        </div>

        {/* Logout */}
        <button id="logout">Logout Button</button>
      </div>
    </nav>
  );
};

// Export
export default Navbar;
