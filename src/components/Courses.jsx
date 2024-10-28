import React from 'react';

const courses = [
    { id: 1, name: 'React for Beginners', description: 'Learn the basics of React.' },
    { id: 2, name: 'Advanced React', description: 'Dive deeper into React and learn advanced concepts.' },
    { id: 3, name: 'JavaScript Essentials', description: 'Master the fundamentals of JavaScript.' },
];

const Courses = () => {
    return (
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <h2>{course.name}</h2>
                        <p>{course.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;