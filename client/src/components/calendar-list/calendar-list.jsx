import React from 'react';
import './calendar-list.css'

const EventDate = (events) => {
	return (
		<div id = 'calendar-list'>
			Calendar List

		<div id = 'date'>
			<div id = 'list-items'>
			{events &&
				events.map((event) => (
				<div key={event._id}>
					<h4>
					{event.username} <br />
					<span>
						had this event on {event.startdate}
					</span>
					</h4>
					<p>{event.description}</p>
					Join the discussion on this event.
				</div>
				))}
			</div>
		</div>
		</div>
		)
};

export default EventDate