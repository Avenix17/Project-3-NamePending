// Imports
import React, { useState } from "react";
import Searchbar from "./navbar components/Searchbar";
import EventInput from "../create-event/CreateEvent";
import "./nav.css";

const Navbar = () => {
  // Saved events button

  // Event creation button
  const [showEvent, setShowEvent] = useState(false);
  const createEventButton = () => {
    setShowEvent(true);
  };

  return (
    <nav className="topnav">

      {/* Search Bar */}
      <div id="searchBar">
        <Searchbar />
      </div>
      
      {/* Do we need a saved events button? Or do we want saved events to just appear below
      the calendar? */}
      <div className="nav-items">
        {/* Saved Events */}
          <button id="savedEventsButton">Saved Events</button>

        {/* Event Creation */}
          <button id="eventInputButton" onClick={createEventButton} value="Create Event">
            {showEvent ? <EventInput /> : null}
            Create Event
          </button>

        {/* Logout */}
        <button id="logout">Logout Button</button>
      </div>
    </nav>
  );
};

// Export
export default Navbar;
