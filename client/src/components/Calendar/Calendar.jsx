import { useState } from 'react';
import Calendar from 'react-calendar';
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
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default Calendarfun;