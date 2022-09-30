import { useState } from 'react';
import Calendar from 'react-calendar';
import EventDate from '../calendar-list/calendar-list'; 
import './calendar.css';
import 'react-calendar/dist/Calendar.css';
import tack from '../../assets/tack.png';

import { QUERY_EVENTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';

function Calendarfun() {
  const [date, setDate] = useState(new Date());
  const { data } = useQuery(QUERY_EVENTS);
  const events = data?.events || [];

  return (
    <div className='calendar'>
      <div className='calendar-container'>
        {/* Here is where we will need to connect to the feed component for activity information */}
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className='events-list'>
        {/* Frontend peeps: Selected date is where we will want the calendar-list (event date) to appear */}
        <img className='tack'  src={tack} alt="It's a tack!" />
        <h3 className='selected-date'>{date.toDateString()}</h3>
        <EventDate 
          events = {events} />
      </div>
    </div>
  );
}

export default Calendarfun;