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
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Daily Timetable</h2>
                <ul className="divide-y divide-gray-200">
                    {schedule.map((item, index) => (
                        <li key={index} className="py-2 flex justify-between items-center">
                            <span className="text-gray-600 font-medium">{item.time}</span>
                            <span className="text-gray-800">{item.event}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Timetable;