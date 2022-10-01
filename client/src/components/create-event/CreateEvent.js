import React, { useState } from 'react';
import "./CreateEvent.css";
import tack from '../../assets/tack.png';
import { useMutation } from "@apollo/client";
import { CREATE_EVENT } from '../../utils/mutations';

const EventInput = (props) => {

    const { setCurrentNav } = props;
    const [formState, setFormState] = useState({ eventname: '', description: '', startdate: '', enddate: '' });
    const [createEvent, { error, data }] = useMutation(CREATE_EVENT);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await createEvent({
                variables: { ...formState },
            });
        } catch (e) {
            console.error(e);
        }
    };

    if (data) {
        setCurrentNav('home');
    };


    return (
        <div className='event-container'>
            <img className='tack' src={tack} alt='This is a tack!' />
            {data ? (
                <p>Yippee!</p>
            ) : (
                <form className='create-event' onSubmit={handleFormSubmit}>
                    <h2>Create an Event!!</h2>

                    {/* Event Name */}
                    <div className='input-names'>Event Name:
                        <input
                            className='event-name'
                            type='text'
                            name='eventname'
                            placeholder='Enter event name'
                            value={formState.eventname}
                            onChange={handleChange}
                            label='Event Name'
                        />
                    </div>

                    {/* Event Start Date */}
                    <div className='input-names'>Start Date:
                        <input
                            className='start-date'
                            type='date'
                            name='startdate'
                            value={formState.startdate}
                            onChange={handleChange}
                            label='Event Start Date'
                        />
                    </div>

                    {/* Event End Date */}
                    <div className='input-names'>End Date:
                        <input
                            className='end-date'
                            type='date'
                            name='enddate'
                            value={formState.enddate}
                            onChange={handleChange}
                            label='Event End Date'
                        />
                    </div>

                    {/* Event Description */}
                    <div className='input-names'>Event Description:
                        <textarea
                            className='event-description'
                            placeholder='Enter event description'
                            name='description'
                            value={formState.description}
                            onChange={handleChange}
                            label='Event Description'
                        />
                    </div>

                    <div id='close-button'>

                        {/* Creates event */}
                        <button className='button' id='eventInputButton' type='submit'>
                            Create!
                        </button>

                        {/* Send back to homepage */}
                        <button className='button' id='returntohome' onClick={() => {setCurrentNav('home')}}>
                            Return to Home
                        </button>
                    </div>
                </form>
            )}

            {error && <div className="error-message">{error.message}</div>}
        </div>
    );

};

export default EventInput;