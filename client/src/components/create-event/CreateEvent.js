import React, { useState } from 'react';
import "./CreateEvent.css";
import tack from '../../assets/tack.png';

const EventInput = () => {

    const [eventNameInput, setEventNameInput] = useState("");
    const [eventDescriptionInput, setEventDescriptionInput] = useState("");
    const [eventStartDate, setEventStartDate] = useState("");
    const [eventEndDate, setEventEndDate] = useState("");
    const [eventLocation, setEventLocation] = useState("");

    // Event creation close button
    const [closeEventCreation, setCloseEventCreation] = useState(false)
    const createEventButton = () => {
        setCloseEventCreation(true)
    };

    return (
        <div className='event-container'>
            <img className='tack' src={tack} alt='This is a tack!' />
            <form className='create-event'>
                <h2>Create an Event!!</h2>

                {/* Event Name */}
                <div className='input-names'>Event Name:
                    <input
                        className='event-name'
                        type='text'
                        placeholder='Enter event name'
                        value={eventNameInput}
                        onChange={(e) => setEventNameInput(e.target.value)}
                        label='Event Name'
                    />
                </div>

                {/* Event Start Date */}
                <div className='input-names'>Start Date:
                    <input
                        className='start-date'
                        type='date'
                        value={eventStartDate}
                        onChange={(e) => setEventStartDate(e.target.value)}
                        label='Event Start Date'
                    />
                </div>

                {/* Event End Date */}
                <div className='input-names'>End Date:
                    <input
                        className='end-date'
                        type='date'
                        value={eventEndDate}
                        onChange={(e) => setEventEndDate(e.target.value)}
                        label='Event End Date'
                    />
                </div>

                {/* Event location */}
                <div className='input-names'>Event Location:
                    <input
                        className='event-location'
                        placeholder='Location of event'
                        type='text'
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                        label='Event Location'
                    />
                </div>

                {/* Event Description */}
                <div className='input-names'>Event Description:
                    <textarea
                        className='event-description'
                        placeholder='Enter event description'
                        value={eventDescriptionInput}
                        onChange={(e) => setEventDescriptionInput(e.target.value)}
                        label='Event Description'
                    />
                </div>

                <div id='close-button'>
                    <button className='button' id='eventInputButton' onClick={createEventButton} value="Create Event">
                        {closeEventCreation ? <EventInput /> : null}
                        Create!
                    </button>
                </div>
            </form>
        </div>
    );

};

export default EventInput;