import './mail.css';
import { Dropdown } from '../Prescription/prescription';

let mail_order_data = {
    "shipped": [
        {
            "prescriptionCorrId": 1,
            "medication": "Lisinopril",
            "type": "Refill Order",
            "orderDate": "2024-07-20",
            "status": "Shipped",
            "trackingNumber": "123456789",
            "estimatedArrivalDate": "2024-08-16",
            "doctor": "Dr. Smith",
            "appointmentDate": "2023-01-14"
        }
    ],
    "delivered": [
        {
            "prescriptionCorrId": 2,
            "medication": "Metformin",
            "type": "Initial Supply",
            "orderDate": "2024-07-22",
            "status": "Delivered",
            "trackingNumber": "987654321",
            "estimatedArrivalDate": "2024-07-24",
            "doctor": "Dr. Jones",
            "appointmentDate": "2023-05-31"
        },
        {
            "prescriptionCorrId": 3,
            "medication": "Amoxicillin",
            "type": "Initial Supply",
            "orderDate": "2022-10-15",
            "status": "Delivered",
            "trackingNumber": "456789123",
            "estimatedArrivalDate": "2022-10-18",
            "doctor": "Dr. Lee",
            "appointmentDate": "2022-10-31"
        }
    ]
};

export default function Mail() {
    return (
        <div className="container">
            <div>
                <h2>Shipped Mail Orders</h2>
                {mail_order_data.shipped.map((order, index) => (
                    <Dropdown
                        key={index}
                        collapsible={order.medication}
                        itemList={
                            <div>
                                <p><strong>Type:</strong> {order.type}</p>
                                <p><strong>Order Date:</strong> {order.orderDate}</p>
                                <p><strong>Status:</strong> {order.status}</p>
                                <p><strong>Tracking Number:</strong> {order.trackingNumber}</p>
                                <p><strong>Estimated Arrival Date:</strong> {order.estimatedArrivalDate}</p>
                                <p><strong>Doctor:</strong> {order.doctor}</p>
                                <p><strong>Appointment Date:</strong> {order.appointmentDate}</p>
                            </div>
                        }
                    />
                ))}
            </div>
            <div>
                <h2>Delivered Mail Orders</h2>
                {mail_order_data.delivered.map((order, index) => (
                    <Dropdown
                        key={index}
                        collapsible={order.medication}
                        itemList={
                            <div>
                                <p><strong>Type:</strong> {order.type}</p>
                                <p><strong>Order Date:</strong> {order.orderDate}</p>
                                <p><strong>Status:</strong> {order.status}</p>
                                <p><strong>Tracking Number:</strong> {order.trackingNumber}</p>
                                <p><strong>Estimated Arrival Date:</strong> {order.estimatedArrivalDate}</p>
                                <p><strong>Doctor:</strong> {order.doctor}</p>
                                <p><strong>Appointment Date:</strong> {order.appointmentDate}</p>
                            </div>
                        }
                    />
                ))}
            </div>
        </div>
    );
}
