import './home.css'
let medication_data = {
    "prescriptions": {
      "active": [
        {
          "medication": "Lisinopril",
          "dosage": "10 mg",
          "frequency": "Daily",
          "startDate": "2023-01-15",
          "notes": "Take with food."
        },
        {
          "medication": "Metformin",
          "dosage": "500 mg",
          "frequency": "Twice daily",
          "startDate": "2023-06-01",
          "notes": "Monitor blood sugar levels regularly."
        }
      ],
      "past": [
        {
          "medication": "Amoxicillin",
          "dosage": "250 mg",
          "frequency": "Three times a day",
          "startDate": "2022-11-01",
          "endDate": "2022-11-10",
          "notes": "Complete the full course."
        }
      ]
    },
    "currentConditions": [
      {
        "condition": "Hypertension",
        "diagnosedDate": "2020-05-10",
        "notes": "Manage with medication and regular check-ups."
      },
      {
        "condition": "Type 2 Diabetes",
        "diagnosedDate": "2021-08-20",
        "notes": "Controlled with medication and diet."
      }
    ],
    "medicalConditions": {
      "active": [
        {
          "condition": "Asthma",
          "diagnosedDate": "2019-03-12",
          "notes": "Use inhaler as needed."
        }
      ],
      "past": [
        {
          "condition": "Chickenpox",
          "diagnosedDate": "2010-07-15",
          "notes": "Fully recovered."
        }
      ]
    },
    "appointments": {
      "upcoming": [
        {
          "date": "2024-08-15",
          "time": "10:00 AM",
          "doctor": "Dr. Smith",
          "reason": "Routine check-up",
          "notes": "Bring recent lab results."
        },
        {
          "date": "2024-09-05",
          "time": "02:00 PM",
          "doctor": "Dr. Jones",
          "reason": "Diabetes follow-up",
          "notes": "Discuss medication adjustments."
        }
      ],
      "past": [
        {
          "date": "2024-07-10",
          "time": "01:00 PM",
          "doctor": "Dr. Lee",
          "reason": "Asthma consultation",
          "notes": "Prescribed new inhaler."
        }
      ]
    },
    "mailOrders": [
        {
            "prescriptionCorrId": 1,
            "medication": "Lisinopril",
            "type": "Refill Order",
            "orderDate": "2024-07-20",
            "status": "Shipped",
            "trackingNumber": "123456789",
            "estimatedArrivalDate": "2024-07-25"
        },
        {
            "prescriptionCorrId": 2,
            "medication": "Metformin",
            "type": "Initial Supply",
            "orderDate": "2024-07-22",
            "status": "Delivered",
            "trackingNumber": "987654321",
            "estimatedArrivalDate": "2024-07-24"
        },
        {
            "prescriptionCorrId": 3,
            "medication": "Amoxicillin",
            "type": "Initial Supply",
            "orderDate": "2022-10-15",
            "status": "Delivered",
            "trackingNumber": "456789123",
            "estimatedArrivalDate": "2022-10-18"
        }
    ]
};
function Title({name}){
   return ( 
        <div className="Name">
            <h2>Welcome {name}</h2>
        </div>
    );
}

function Prescription_Summary({ prescriptions }) {
    return (
        <>
        <h3 className = "heading">Prescription Summary</h3>
        <div className="Prescription-Summary">
            <div className="Prescription-Item">
                <h3>Medication</h3>
            </div>
            <div className="Prescription-Item">
                <h3>Dosage</h3>
            </div>
            <div className="Prescription-Item">
                <h3>Frequency</h3>
            </div>
            <div className="Prescription-Item">
                <h3>Notes</h3>
            </div>
            {prescriptions.active.map((prescription, index) => (
                <>
                    <div key={`${prescription.medication}-${index}`} className="Prescription-Item">
                        <p>{prescription.medication}</p>
                    </div>
                    <div className="Prescription-Item">
                        <p>{prescription.dosage}</p>
                    </div>
                    <div className="Prescription-Item">
                        <p>{prescription.frequency}</p>
                    </div>
                    <div className="Prescription-Item">
                        <p>{prescription.notes}</p>
                    </div>
                </>
            ))}
        </div>
        </>
    );
}

function Appointment_Summary({ appointments }) {
    return (
        <>
        <h3 className = "heading">Upcoming Appointments</h3>
        <div className="Appointment-Summary">
            <div className="Appointment-Item">
                <h3>Date</h3>
            </div>
            <div className="Appointment-Item">
                <h3>Time</h3>
            </div>
            <div className="Appointment-Item">
                <h3>Doctor</h3>
            </div>
            <div className="Appointment-Item">
                <h3>Reason</h3>
            </div>
            {appointments.upcoming.map((appointment, index) => (
                <>
                    <div key={`${appointment.date}-${index}`} className="Appointment-Item">
                        <p>{appointment.date}</p>
                    </div>
                    <div className="Appointment-Item">
                        <p>{appointment.time}</p>
                    </div>
                    <div className="Appointment-Item">
                        <p>{appointment.doctor}</p>
                    </div>
                    <div className="Appointment-Item">
                        <p>{appointment.reason}</p>
                    </div>
                </>
            ))}
        </div>
        </>
    );
}


function UserDetails({ homeData, currentConditions }) {
    return (
        <div className="User-Details">
            <h3>User Details</h3>
            <div className="detail-item">
                <p><strong>Name:</strong> {homeData.name}</p>
                <p><strong>Age:</strong> {homeData.age}</p>
                <p><strong>Location:</strong> {homeData.location}</p>
            </div>
            <div className="Current-Conditions">
                <h4>Current Conditions</h4>
                {currentConditions.map((condition, index) => (
                    <div key={`${condition.condition}-${index}`} className="detail-item">
                        <p><strong>Condition:</strong> {condition.condition}</p>
                        <p><strong>Diagnosed Date:</strong> {condition.diagnosedDate}</p>
                        <p><strong>Notes:</strong> {condition.notes}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function MailOrder_Summary({ mailOrders }) {
    return (
        <>
            <h3 className="heading">Mail Order Summary</h3>
            <div className="MailOrder-Summary">
                <div className="MailOrder-Item">
                    <h3>Medication</h3>
                </div>
                <div className="MailOrder-Item">
                    <h3>Type</h3>
                </div>
                <div className="MailOrder-Item">
                    <h3>Status</h3>
                </div>
                {mailOrders.map(order => (
                    <>
                        <div key={`${order.prescriptionCorrId}`} className="MailOrder-Item">
                            <p>{order.medication}</p>
                        </div>
                        <div className="MailOrder-Item">
                            <p>{order.type}</p>
                        </div>
                        <div className="MailOrder-Item">
                            <p>{order.status}</p>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
}

let home_data = {
    name: "John Martin",
    age: 67,
    location: "Louisville, KY"
};



export default function Home() {
    return (
        <>
            <Title name={home_data.name} />
            <div className = "container">
            
            <div>
                <UserDetails homeData={home_data} currentConditions={medication_data['currentConditions']} />
            </div>
            <div>
                <Prescription_Summary prescriptions={medication_data.prescriptions} />
            </div>
            <div>
                <Appointment_Summary appointments={medication_data.appointments} />
            </div>
            <div>
                <MailOrder_Summary mailOrders={medication_data.mailOrders} />
            </div>
            </div>
        </>
    );
}
