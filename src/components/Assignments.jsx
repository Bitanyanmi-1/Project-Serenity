import React from 'react';

const Assignments = () => {
    const assignments = [
        { id: 1, title: 'Math Homework', dueDate: '2023-10-10' },
        { id: 2, title: 'Science Project', dueDate: '2023-10-15' },
        { id: 3, title: 'History Essay', dueDate: '2023-10-20' },
    ];

    return (
        <div className="flex flex-col gap-6 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-[#00173D] text-3xl font-bold mb-4">Assignments</h2>
            <ul className="space-y-4">
                {assignments.map((assignment) => (
                    <li key={assignment.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
                        <span className="text-lg font-medium text-gray-800">{assignment.title}</span>
                        <span className="text-sm text-gray-600">Due: {assignment.dueDate}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Assignments;