import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const Settings = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    };

    return (
        <div className={`min-h-screen ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-gray-100'} p-6`}>
            <div className={`max-w-4xl mx-auto ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-800 text-gray-100'} rounded-lg shadow-md p-8`}>
                <h1 className="text-3xl font-bold mb-6">Settings</h1>
                <p className="mb-6">Configure your application settings here.</p>
                <div className="mb-6">
                    <label htmlFor="theme" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Select Theme</label>
                    <select
                        id="theme"
                        value={theme}
                        onChange={handleThemeChange}
                        className="mt-2 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Settings;