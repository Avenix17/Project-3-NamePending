import React, {useState} from 'react';
import "./CreateEvent.css";

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
        <form>
            <label>
                {/* Event Name */}
                <input
                    type = 'text'
                    placeholder = 'Enter event name'
                    value = {eventNameInput}
                    onChange = {(e) => setEventNameInput(e.target.value)}
                    label = 'Event Name'
                /> 

                {/* Event Start Date */}
                <input 
                    type = 'date'
                    value = {eventStartDate}
                    onChange = {(e) => setEventStartDate(e.target.value)}
                    label = 'Event Start Date'
                />

                {/* Event End Date */}
                <input 
                    type = 'date'
                    value = {eventEndDate}
                    onChange = {(e) => setEventEndDate(e.target.value)}
                    label = 'Event End Date'
                />

                {/* Event location */}
                <input 
                    type = 'text'
                    value = {eventLocation}
                    onChange = {(e) => setEventLocation(e.target.value)}
                    label = 'Event Location'
                />

                {/* Event Description */}
                <textarea 
                    placeholder = 'Enter event description'
                    value = {eventDescriptionInput}
                    onChange =  {(e) => setEventDescriptionInput(e.target.value)}
                    label = 'Event Description'
                />

                <div id = 'close button'>
                    <button id = 'eventInputButton' onClick = {createEventButton} value = "Create Event">
                        { closeEventCreation ? <EventInput /> : null}
                        close
                    </button>
                </div>
            </label>
        </form>
    );

};

export default EventInput;