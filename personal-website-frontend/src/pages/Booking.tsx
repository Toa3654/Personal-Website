import { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../styles/Booking.css";

import { addBooking } from "../services/bookingService";

interface User {
    id: string;
    firstname: string;
    email: string;
    phone: string;
}

interface BookingProps {
    user: User | null;
}

function Booking({ user }: BookingProps) {
    const [message, setMessage] = useState("");
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        if (!user || !selectedDate) {
            return;
        }

        const booking = {
            service: formData.get("service") as string,

            date: selectedDate.toISOString().split("T")[0],

            time: formData.get("time") as string,

            name: user.firstname,
            email: user.email,
            phone: user.phone,

            additionalinfo: formData.get("notes") as string,
        };

        try {
            await addBooking(booking);

            setMessage(
                "Booking information saved. Continue to payment."
            );

        } catch (error) {
            console.error(error);

            if (error instanceof Error) {
                setMessage(error.message);
            } else {
                setMessage(
                    "Something went wrong while creating the booking."
                );
            }
        }
    }


    if (!user) {
        return (
            <main className="booking-page">

                <section className="booking-login-box">

                    <h1>Booking</h1>

                    <p>
                        Please log in before booking a service.
                    </p>

                    <div className="booking-login-links">

                        <Link to="/login">
                            Login
                        </Link>

                        <Link to="/signup">
                            Create Account
                        </Link>

                    </div>

                </section>

            </main>
        );
    }


    return (
        <main className="booking-page">

            <section className="booking-box">

                <h1>Book a Service</h1>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="service">
                            Service
                        </label>

                        <select
                            id="service"
                            name="service"
                            required
                        >
                            <option value="">
                                Choose a service
                            </option>

                            <option value="HUNTING_RECOVERY">
                                Hunting Recovery
                            </option>

                            <option value="DRONE_LEARNING">
                                Drone Learning
                            </option>

                            <option value="REAL_ESTATE_PHOTOGRAPHY">
                                Real Estate Photography
                            </option>

                            <option value="WEBSITE_BUILDING">
                                Website Building
                            </option>
                        </select>
                    </div>


                    <div>
                        <label>
                            Date
                        </label>

                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            minDate={new Date()}
                            dateFormat="MM/dd/yyyy"
                        />
                    </div>


                    <div>
                        <label htmlFor="time">
                            Preferred Time
                        </label>

                        <input
                            type="time"
                            id="time"
                            name="time"
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


                {message && (
                    <p>{message}</p>
                )}

            </section>

        </main>
    );
}

export default Booking;