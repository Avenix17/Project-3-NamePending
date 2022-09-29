import { useState } from 'react';
import Calendar from 'react-calendar';
import EventDate from '../calendar-list/calendar-list'; 
import './calendar.css';
import 'react-calendar/dist/Calendar.css';

function Calendarfun() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='calendar'>
      <div className='calendar-container'>
        {/* Here is where we will need to connect to the feed component for activity information */}
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        {/* Frontend peeps: Selected date is where we will want the calendar-list (event date) to appear */}
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
        <EventDate />
      </p>
    </div>
  );
}

export default Calendarfun;