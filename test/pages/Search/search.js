import React, { useState } from 'react';
import './search.css';

const database = {
    prescriptions: [
        {
            "title": "Prescription",
            "medication": "Lisinopril",
            "dosage": "10 mg",
            "frequency": "Daily",
            "startDate": "2023-01-15",
            "endDate": "2024-01-14",
            "notes": "Take with food.",
            "doctor": "Dr. Smith",
            "appointmentDate": "2023-01-14",
            "tags": ["Lisinopril", "Prescription", "Daily", "Dr. Smith", "Hypertension"]
        },
        {
            "title": "Prescription",
            "medication": "Metformin",
            "dosage": "500 mg",
            "frequency": "Twice daily",
            "startDate": "2023-06-01",
            "endDate": "2024-05-31",
            "notes": "Monitor blood sugar levels regularly.",
            "doctor": "Dr. Jones",
            "appointmentDate": "2023-05-31",
            "tags": ["Metformin", "Prescription", "Twice daily", "Dr. Jones", "Diabetes"]
        },
        {
            "title": "Prescription",
            "medication": "Amoxicillin",
            "dosage": "250 mg",
            "frequency": "Three times a day",
            "startDate": "2022-11-01",
            "endDate": "2022-11-10",
            "notes": "Complete the full course.",
            "doctor": "Dr. Lee",
            "appointmentDate": "2022-10-31",
            "tags": ["Amoxicillin", "Prescription", "Three times a day", "Dr. Lee", "Antibiotic"]
        }
    ],
    mailOrders: [
        {
            "prescriptionCorrId": 1,
            "medication": "Lisinopril",
            "type": "Refill Order",
            "orderDate": "2024-07-20",
            "status": "Shipped",
            "trackingNumber": "123456789",
            "estimatedArrivalDate": "2024-07-25",
            "tags": ["Lisinopril", "Refill Order", "Shipped", "Hypertension"]
        },
        {
            "prescriptionCorrId": 2,
            "medication": "Metformin",
            "type": "Initial Supply",
            "orderDate": "2024-07-22",
            "status": "Delivered",
            "trackingNumber": "987654321",
            "estimatedArrivalDate": "2024-07-24",
            "tags": ["Metformin", "Initial Supply", "Delivered", "Diabetes"]
        },
        {
            "prescriptionCorrId": 3,
            "medication": "Amoxicillin",
            "type": "Initial Supply",
            "orderDate": "2022-10-15",
            "status": "Delivered",
            "trackingNumber": "456789123",
            "estimatedArrivalDate": "2022-10-18",
            "tags": ["Amoxicillin", "Initial Supply", "Delivered", "Antibiotic"]
        }
    ]
};

function SearchBar({ onSend }) {
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
                placeholder="Enter search term here"
            />
            <button className="send-button" onClick={handleSend}>Search</button>
        </div>
    );
}

export default function Search() {
    const [searchResults, setSearchResults] = useState([]);

    function handleSearch(query) {
        const lowerCaseQuery = query.toLowerCase();

        const filteredPrescriptions = database.prescriptions.filter(prescription =>
            prescription.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
        );

        const filteredMailOrders = database.mailOrders.filter(order =>
            order.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
        );

        setSearchResults({
            prescriptions: filteredPrescriptions,
            mailOrders: filteredMailOrders
        });
    }

    return (
        <div className="search-container">
            <SearchBar onSend={handleSearch} />
            <div className="search-results">
                <h3>Prescriptions</h3>
                {searchResults.prescriptions && searchResults.prescriptions.length > 0 ? (
                    <ul>
                        {searchResults.prescriptions.map((prescription, index) => (
                            <li key={index}>
                                <strong>{prescription.medication}</strong> - {prescription.dosage} ({prescription.frequency})
                                <div>Doctor: {prescription.doctor}</div>
                                <div>Notes: {prescription.notes}</div>
                                <div>Appointment Date: {prescription.appointmentDate}</div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No prescriptions found.</p>
                )}

                <h3>Mail Orders</h3>
                {searchResults.mailOrders && searchResults.mailOrders.length > 0 ? (
                    <ul>
                        {searchResults.mailOrders.map((order, index) => (
                            <li key={index}>
                                <strong>{order.medication}</strong> - {order.type}
                                <div>Status: {order.status}</div>
                                <div>Order Date: {order.orderDate}</div>
                                <div>Estimated Arrival: {order.estimatedArrivalDate}</div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No mail orders found.</p>
                )}
            </div>
        </div>
    );
}
