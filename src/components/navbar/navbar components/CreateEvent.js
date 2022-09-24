import React, {useState} from 'react';
import "../../../App";

const EventInput = () => {

    const [eventNameInput, setEventNameInput] = useState("");
    const [eventDescriptionInput, setEventDescriptionInput] = useState("");
    const [eventStartDate, setEventStartDate] = useState("");
    const [eventEndDate, setEventEndDate] = useState("");

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
                    type ='date'
                    value = {eventStartDate}
                    onChange = {(e) => setEventStartDate(e.target.value)}
                />

                {/* Event End Date */}
                <input 
                    type ='date'
                    value = {eventEndDate}
                    onChange = {(e) => setEventEndDate(e.target.value)}
                />

                {/* Event Description */}
                <textarea 
                    placeholder = 'Enter event description'
                    value = {eventDescriptionInput}
                    onChange =  {(e) => setEventDescriptionInput(e.target.value)}
                    label = 'Event Description'
                />

            </label>
        </form>
    );

};

export default EventInput;