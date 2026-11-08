import { useState } from "react";
import "../styles/Booking.css";

function Booking() {
    const [message, setMessage] = useState("");

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const booking = {
            service: formData.get("service"),
            date: formData.get("date"),
            time: formData.get("time"),
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            notes: formData.get("notes"),
        };

        try {
            const response = await fetch(
                "http://localhost:8080/personalwebsite/bookings/add",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(booking),
                }
            );

            if (!response.ok) {
                throw new Error("Booking failed.");
            }

            setMessage("Booking information saved. Continue to payment.");
        } catch (error) {
            setMessage("Something went wrong while creating the booking.");
        }
    }

    return (
        <main className="booking-page">
            <section className="booking-box">

                <h1>Book a Service</h1>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="service">Service</label>

                        <select
                            id="service"
                            name="service"
                            required
                        >
                            <option value="">Choose a service</option>

                            <option value="hunting-recovery">
                                Hunting Recovery
                            </option>

                            <option value="drone-learning">
                                Drone Learning
                            </option>

                            <option value="real-estate-photography">
                                Real Estate Photography
                            </option>

                            <option value="website-building">
                                Website Building
                            </option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="date">Date</label>

                        <input
                            type="date"
                            id="date"
                            name="date"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="time">Preferred Time</label>

                        <input
                            type="time"
                            id="time"
                            name="time"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="name">Name</label>

                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone Number</label>

                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                        />
                    </div>

                    <div className="booking-notes">
                        <label htmlFor="notes">
                            Additional Information
                        </label>

                        <textarea
                            id="notes"
                            name="notes"
                            rows={5}
                            placeholder="Tell me anything important about the job..."
                        />
                    </div>

                    <button type="submit">
                        Continue to Payment
                    </button>

                </form>

                {message && <p>{message}</p>}

            </section>
        </main>
    );
}

export default Booking;