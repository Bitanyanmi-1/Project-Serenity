import React from 'react';

const Assignments = () => {
    const assignments = [
        { id: 1, title: 'Math Homework', dueDate: '2023-10-10' },
        { id: 2, title: 'Science Project', dueDate: '2023-10-15' },
        { id: 3, title: 'History Essay', dueDate: '2023-10-20' },
    ];

    return (
        <div>
            <h1>Assignments</h1>
            <ul>
                {assignments.map((assignment) => (
                    <li key={assignment.id}>
                        {assignment.title} - Due: {assignment.dueDate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Assignments;