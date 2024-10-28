import React from 'react';

const Assignments = () => {
    const assignments = [
        { id: 1, title: 'Math Homework', dueDate: '2023-10-10' },
        { id: 2, title: 'Science Project', dueDate: '2023-10-15' },
        { id: 3, title: 'History Essay', dueDate: '2023-10-20' },
    ];

    return (
        <div className="flex flex-col gap-10">
            <h2 className="text-[#00173D] text-3xl font-[700]">Assignments</h2>
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