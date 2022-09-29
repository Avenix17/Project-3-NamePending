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
    <div className="topnav">
      <nav className="nav-elements">

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
              onClick={() => setShowEvent(true)}
              value="Create Event"
            >
              Create Event
            </button>
          </div>

          {/* Logout */}
          <button id="logout">Logout Button</button>
        </div>
      </nav>
      <EventInput trigger={showEvent} setTrigger={setShowEvent} />
    </div>
  );
};

// Export
export default Navbar;
