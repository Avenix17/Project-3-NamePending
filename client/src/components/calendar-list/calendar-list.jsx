import React from 'react';
import './calendar-list.css'

const EventDate = (events) => {
	if (!events.length) {
		return <h3> No events scheduled </h3>
	}

	return (
		<div id = 'calendar-list'>
			Calendar List

		<div id = 'date'>
			<div id = 'list-items'>
			{events &&
				events.map((event) => (
				<div key={event._id}>
					<h4 className="event-name">
					{event.eventname} <br />
					<span className='event-startdate'>
						This event on {event.startdate}
					</span>
					</h4>
					<div className="event-description">
					<p>{event.description}</p>
				</div>
          </div>
        ))}
			</div>
		</div>
		</div>
		)
};

export default EventDate;