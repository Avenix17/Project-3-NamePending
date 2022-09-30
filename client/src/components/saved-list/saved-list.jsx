import React from "react";
import "./saved-list.css";

const SavedEvents = () => {
  return (
    <div id="saved-list">
      {/* Content Style */}
	  <div className="saved-heading">
		<h3 id="saved-title">Saved Events</h3>
	  </div>
      
      <div id="saved-content">
        {/* The saved content whole list */}
        <p id="saved-items">{/* The saved Events */}</p>
      </div>
    </div>
  );
};

export default SavedEvents;
