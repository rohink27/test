import React from 'react';
import './calendar.css';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const hours = Array.from({ length: 13 }, (_, i) => i + 8); // 8 AM to 8 PM

const events = [
  { day: 0, hour: 19, title: 'Lisinopril' }, // Sunday 7:00 PM
  { day: 1, hour: 19, title: 'Lisinopril' }, // Monday 7:00 PM
  { day: 2, hour: 19, title: 'Lisinopril' }, // Tuesday 7:00 PM
  { day: 3, hour: 19, title: 'Lisinopril' }, // Wednesday 7:00 PM
  { day: 4, hour: 19, title: 'Lisinopril' }, // Thursday 7:00 PM
  { day: 5, hour: 19, title: 'Lisinopril' }, // Friday 7:00 PM
  { day: 6, hour: 19, title: 'Lisinopril' }, // Saturday 7:00 PM
  { day: 0, hour: 13, title: 'Metformin' }, // Sunday 1:00 PM
  { day: 0, hour: 19.5, title: 'Metformin' }, // Sunday 7:30 PM
  { day: 1, hour: 13, title: 'Metformin' }, // Monday 1:00 PM
  { day: 1, hour: 19.5, title: 'Metformin' }, // Monday 7:30 PM
  { day: 2, hour: 13, title: 'Metformin' }, // Tuesday 1:00 PM
  { day: 2, hour: 19.5, title: 'Metformin' }, // Tuesday 7:30 PM
  { day: 3, hour: 13, title: 'Metformin' }, // Wednesday 1:00 PM
  { day: 3, hour: 19.5, title: 'Metformin' }, // Wednesday 7:30 PM
  { day: 4, hour: 13, title: 'Metformin' }, // Thursday 1:00 PM
  { day: 4, hour: 19.5, title: 'Metformin' }, // Thursday 7:30 PM
  { day: 5, hour: 13, title: 'Metformin' }, // Friday 1:00 PM
  { day: 5, hour: 19.5, title: 'Metformin' }, // Friday 7:30 PM
  { day: 6, hour: 13, title: 'Metformin' }, // Saturday 1:00 PM
  { day: 6, hour: 19.5, title: 'Metformin' }, // Saturday 7:30 PM
  { day: 4, hour: 10, title: 'Appointment' }, // Thursday 10:00 AM
  { day: 5, hour: 9, title: 'Shipping Lisinopril' } // Friday 9:00 AM
];

export default function Calendar() {
  return (
    <div className="cal-content">
      <div className="week"><h2>Aug 11 - Aug 17</h2></div>
      <div className="calendar">
        <div className="hour-cell"></div>
        {daysOfWeek.map(day => (
          <div key={day} className="day-header">{day}</div>
        ))}
        {hours.map(hour => (
          <React.Fragment key={hour}>
            <div className="hour-cell">{`${hour}:00`}</div>
            {daysOfWeek.map((_, dayIndex) => (
              <div key={dayIndex} className="hour-cell">
                {events
                  .filter(event => event.day === dayIndex && Math.floor(event.hour) === hour)
                  .map((event, index) => (
                    <div key={index} className="event" >
                      {event.title}
                    </div>
                ))}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
