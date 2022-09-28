import React, {useState} from 'react';
import "./CreateEvent.css";

const EventInput = (props) => {

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

    return (props.trigger) ? (
        <div className = 'popup'>
            <div className = 'inner-popup'>
                <button className = 'close-btn'> Close </button>
                { props.children }
            </div>
        </div>
    ) : "";

};

export default EventInput;