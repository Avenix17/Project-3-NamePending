// Imports
import React, { useState } from "react";
import "./nav.css";

import Auth from '../../utils/auth';

const Navbar = (props) => {
  const { currentNav, setCurrentNav } = props;

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="topnav">

      {/* Search Bar */}
      {/* <div id="searchBar"><Searchbar /></div> */}
			{/* function searchHighlight() {
				let Search = document.getElementById
				("Search").value;
				let pageText = document.getElementById
				("pageText");
				console.log("Seach Endpoint");
			} */}
			{/* (The above was created to highlight the text on the page typed in the searchbar) */}

      {Auth.loggedIn() ? (
      <div className="nav-items">
        <button id="home" className={`btn btn-dark ${currentNav === 'home' && 'btn-active'}`} onClick={() => setCurrentNav('home')} >Home</button>

        <button id="eventInputButton" value="Create Event" className={`btn btn-dark ${currentNav === 'createEvent' && 'btn-active'}`} onClick={() => setCurrentNav('createEvent')}>Create Event</button>

        <button id="logout" onClick={logout}>Logout</button>
      </div>
      ) : (
        <h2>Please Sign In!</h2>
      )}
    </nav>
  );
};

// Export
export default Navbar;

// This is the original create event button
{/* <button id="eventInputButton" onClick={createEventButton} value="Create Event">
{showEvent ? <EventInput /> : null}
Create Event
</button> */}
