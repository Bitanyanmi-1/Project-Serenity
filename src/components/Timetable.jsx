import React from 'react';

const Timetable = () => {
    const schedule = [
        { time: '09:00 AM', event: 'Math Class' },
        { time: '10:00 AM', event: 'Science Class' },
        { time: '11:00 AM', event: 'History Class' },
        { time: '12:00 PM', event: 'Lunch Break' },
        { time: '01:00 PM', event: 'Physical Education' },
        { time: '02:00 PM', event: 'Art Class' },
    ];

    return (
        <div>
            <h2>Daily Timetable</h2>
            <ul>
                {schedule.map((item, index) => (
                    <li key={index}>
                        <strong>{item.time}</strong>: {item.event}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Timetable;