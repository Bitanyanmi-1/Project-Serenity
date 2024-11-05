import React, { useState } from 'react';

const Forum = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Forum</h1>
                <p className="text-gray-600 mb-6">This is a place where you can discuss various topics.</p>
                <div className="mb-4">
                    {messages.map((message, index) => (
                        <div key={index} className="bg-gray-200 p-3 rounded-lg mb-2">
                            {message}
                        </div>
                    ))}
                </div>
                <div className="flex">
                    <input
                        type="text"
                        className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button
                        className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Forum;