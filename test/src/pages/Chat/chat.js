import React, { useState } from 'react';
import './chat.css';

const responses = ["Hi", "Yes"];

function MessageBar({ onSend }) {
    const [message, setMessage] = useState('');

    function handleInputChange(event) {
        setMessage(event.target.value);
    }

    function handleSend() {
        if (message.trim()) {
            onSend(message);
            setMessage(''); // Clear the input after sending
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            handleSend();
        }
    }

    return (
        <div className="message-input-container">
            <input
                className="message-input"
                type="text"
                value={message}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter Message here"
            />
            <button className="send-button" onClick={handleSend}>Send</button>
        </div>
    );
}

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [responseIndex, setResponseIndex] = useState(0);

    function handleSend(message) {
        // Add user message to the chat
        setMessages(prevMessages => [...prevMessages, { text: message, type: 'user' }]);

        // Simulate response after a short delay
        setTimeout(() => {
            const response = responses[responseIndex];
            setMessages(prevMessages => [...prevMessages, { text: response, type: 'bot' }]);
            setResponseIndex((prevIndex) => (prevIndex + 1) % responses.length);
        }, 500); // Adjust delay as needed
    }

    return (
        <>
        <div className="heading"><h2> Chat with Physician</h2></div>
        <div className="chat-container">
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.type}`}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <MessageBar onSend={handleSend} />
        </div>
        </>
    );
}
