import './prescription.css'
import React, { useState } from 'react';


let medication_data = {
    "prescriptions": {
        "active": [
            {
                "medication": "Lisinopril",
                "dosage": "10 mg",
                "frequency": "Daily",
                "startDate": "2023-01-15",
                "endDate": "2024-01-14", // Added end date
                "notes": "Take with food.",
                "doctor": "Dr. Smith",
                "appointmentDate": "2023-01-14" // Appointment date a day before start date
            },
            {
                "medication": "Metformin",
                "dosage": "500 mg",
                "frequency": "Twice daily",
                "startDate": "2023-06-01",
                "endDate": "2024-05-31", // Added end date
                "notes": "Monitor blood sugar levels regularly.",
                "doctor": "Dr. Jones",
                "appointmentDate": "2023-05-31" // Appointment date a day before start date
            }
        ],
        "past": [
            {
                "medication": "Amoxicillin",
                "dosage": "250 mg",
                "frequency": "Three times a day",
                "startDate": "2022-11-01",
                "endDate": "2022-11-10", // Added end date
                "notes": "Complete the full course.",
                "doctor": "Dr. Lee",
                "appointmentDate": "2022-10-31" // Appointment date a day before start date
            }
        ]
    }}
export function Dropdown({ collapsible, itemList }) {
        const [isOpen, setIsOpen] = useState(false);
    
        const toggleOpen = () => {
            setIsOpen(!isOpen);
        };
    
        return (
            <>
                <button className= {`collapsible ${(isOpen)? 'active' : ''}`} onClick={toggleOpen}>
                    {collapsible}
                </button>
                <div className={`content ${isOpen ? 'open' : ''}`}>
                    {itemList}
                </div>
            </>
        );
    }
    

    export default function Prescription() {
        return (
            <div className="container">
                <div>
                <h2>Active Prescriptions</h2>
                {medication_data.prescriptions.active.map((prescription, index) => (
                    <Dropdown
                        key={index}
                        collapsible={prescription.medication}
                        itemList={
                            <div>
                                <p><strong>Dosage:</strong> {prescription.dosage}</p>
                                <p><strong>Frequency:</strong> {prescription.frequency}</p>
                                <p><strong>Start Date:</strong> {prescription.startDate}</p>
                                <p><strong>End Date:</strong> {prescription.endDate}</p>
                                <p><strong>Notes:</strong> {prescription.notes}</p>
                                <p><strong>Doctor:</strong> {prescription.doctor}</p>
                                <p><strong>Appointment Date:</strong> {prescription.appointmentDate}</p>
                            </div>
                        }
                    />
                ))}
                </div>
                <div>
                <h2>Past Prescriptions</h2>
                {medication_data.prescriptions.past.map((prescription, index) => (
                    <Dropdown
                        key={index}
                        collapsible={prescription.medication}
                        itemList={
                            <div>
                                <p><strong>Dosage:</strong> {prescription.dosage}</p>
                                <p><strong>Frequency:</strong> {prescription.frequency}</p>
                                <p><strong>Start Date:</strong> {prescription.startDate}</p>
                                <p><strong>End Date:</strong> {prescription.endDate}</p>
                                <p><strong>Notes:</strong> {prescription.notes}</p>
                                <p><strong>Doctor:</strong> {prescription.doctor}</p>
                                <p><strong>Appointment Date:</strong> {prescription.appointmentDate}</p>
                            </div>
                        }
                    />
                ))}
                </div>
            </div>
        );
    }