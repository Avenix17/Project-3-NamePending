// Imports
import React, { useState } from "react";
import Searchbar from "./navbar components/Searchbar";
import EventInput from "../create-event/CreateEvent";
import "./nav.css";

const Navbar = (props) => {
  const { currentNav, setCurrentNav, setUser } = props;

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

      <div className="nav-items">

        <button id="home" className={`btn btn-dark ${currentNav === 'home' && 'btn-active'}`} onClick={() => setCurrentNav('home')} >Home</button>

        <button id="eventInputButton" value="Create Event" className={`btn btn-dark ${currentNav === 'createEvent' && 'btn-active'}`} onClick={() => setCurrentNav('createEvent')}>Create Event</button>

        <button id="logout" onClick={() => {setUser(false)}}>Logout</button>
      </div>
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
