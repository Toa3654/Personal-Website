import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import {
    getAllUsers,
    getAllContacts,
    getAllBookings,
    getBookingsByService,
    getBookingsByMonth,
    getBookingsByDay,
    getTotalUsers,
    getTotalBookings,
    getTotalContacts,
    deleteContact,
    deleteBooking,
    deleteUser,
    type AdminUser,
    type AdminContact,
    type AdminBooking,
} from "../services/adminservice";

import "../styles/Admin.css";

interface User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    role: "USER" | "ADMIN";
}

interface AdminProps {
    user: User | null;
}

type AdminView =
    | "totals"
    | "users"
    | "contacts"
    | "bookings"
    | "calendar";

function Admin({ user }: AdminProps) {

    const [activeView, setActiveView] =
        useState<AdminView>("totals");

    const [users, setUsers] =
        useState<AdminUser[]>([]);

    const [contacts, setContacts] =
        useState<AdminContact[]>([]);

    const [bookings, setBookings] =
        useState<AdminBooking[]>([]);

    const [calendarBookings, setCalendarBookings] =
        useState<AdminBooking[]>([]);

    const [totalUsers, setTotalUsers] =
        useState(0);

    const [totalBookings, setTotalBookings] =
        useState(0);

    const [totalContacts, setTotalContacts] =
        useState(0);

    const [selectedService, setSelectedService] =
        useState("ALL");

    const [selectedDate, setSelectedDate] =
        useState("");

    const [currentDate, setCurrentDate] =
        useState(new Date());

    const [error, setError] =
        useState("");

    const [loading, setLoading] =
        useState(false);


    const services = [
        {
            name: "All Bookings",
            value: "ALL",
        },
        {
            name: "Hunting Recovery",
            value: "HUNTING_RECOVERY",
        },
        {
            name: "Drone Learning",
            value: "DRONE_LEARNING",
        },
        {
            name: "Real Estate Photography",
            value: "REAL_ESTATE_PHOTOGRAPHY",
        },
        {
            name: "Website Building",
            value: "WEBSITE_BUILDING",
        },
    ];


    useEffect(() => {

        if (!user || user.role !== "ADMIN") {
            return;
        }

        loadTotals();

    }, [user]);


    async function loadTotals() {

        setLoading(true);
        setError("");
        setActiveView("totals");

        try {

            const [
                usersTotal,
                bookingsTotal,
                contactsTotal,
            ] = await Promise.all([
                getTotalUsers(),
                getTotalBookings(),
                getTotalContacts(),
            ]);

            setTotalUsers(usersTotal);
            setTotalBookings(bookingsTotal);
            setTotalContacts(contactsTotal);

        } catch (err) {

            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Unable to load totals.");
            }

        } finally {
            setLoading(false);
        }
    }


    async function loadUsers() {

        setLoading(true);
        setError("");
        setActiveView("users");

        try {

            const data = await getAllUsers();

            setUsers(data);

        } catch (err) {

            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Unable to load users.");
            }

        } finally {
            setLoading(false);
        }
    }


    async function loadContacts() {

        setLoading(true);
        setError("");
        setActiveView("contacts");

        try {

            const data = await getAllContacts();

            setContacts(data);

        } catch (err) {

            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Unable to load contacts.");
            }

        } finally {
            setLoading(false);
        }
    }


    async function loadBookings(
        service: string
    ) {

        setLoading(true);
        setError("");

        setActiveView("bookings");
        setSelectedService(service);
        setSelectedDate("");

        try {

            if (service === "ALL") {

                const data =
                    await getAllBookings();

                setBookings(data);

            } else {

                const data =
                    await getBookingsByService(
                        service
                    );

                setBookings(data);
            }

        } catch (err) {

            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Unable to load bookings.");
            }

        } finally {
            setLoading(false);
        }
    }


    async function loadCalendar(
        date: Date = currentDate
    ) {

        setLoading(true);
        setError("");
        setActiveView("calendar");

        try {

            const month =
                date.getMonth() + 1;

            const data =
                await getBookingsByMonth(month);

            setCalendarBookings(data);

        } catch (err) {

            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Unable to load calendar.");
            }

        } finally {
            setLoading(false);
        }
    }


    async function loadBookingsForDay(
        date: string
    ) {

        setLoading(true);
        setError("");

        setSelectedDate(date);
        setActiveView("bookings");

        try {

            const data =
                await getBookingsByDay(date);

            setBookings(data);

        } catch (err) {

            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError(
                    "Unable to load bookings for this day."
                );
            }

        } finally {
            setLoading(false);
        }
    }


    async function handleDeleteContact(
        id: string
    ) {

        const confirmed =
            window.confirm(
                "Are you sure you want to delete this contact?"
            );

        if (!confirmed) {
            return;
        }

        try {

            await deleteContact(id);

            setContacts(
                contacts.filter(
                    contact =>
                        contact.id !== id
                )
            );

            setTotalContacts(
                current =>
                    Math.max(current - 1, 0)
            );

        } catch (err) {

            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError(
                    "Unable to delete contact."
                );
            }
        }
    }


    async function handleDeleteBooking(
        id: string
    ) {

        const confirmed =
            window.confirm(
                "Are you sure you want to delete this booking?"
            );

        if (!confirmed) {
            return;
        }

        try {

            await deleteBooking(id);

            setBookings(
                bookings.filter(
                    booking =>
                        booking.id !== id
                )
            );

            setCalendarBookings(
                calendarBookings.filter(
                    booking =>
                        booking.id !== id
                )
            );

            setTotalBookings(
                current =>
                    Math.max(current - 1, 0)
            );

        } catch (err) {

            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError(
                    "Unable to delete booking."
                );
            }
        }
    }


    async function handleDeleteUser(
        id: string
    ) {

        const confirmed =
            window.confirm(
                "Are you sure you want to delete this user?"
            );

        if (!confirmed) {
            return;
        }

        try {

            await deleteUser(id);

            setUsers(
                users.filter(
                    adminUser =>
                        adminUser.id !== id
                )
            );

            setTotalUsers(
                current =>
                    Math.max(current - 1, 0)
            );

        } catch (err) {

            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError(
                    "Unable to delete user."
                );
            }
        }
    }


    async function previousMonth() {

        const newDate =
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() - 1,
                1
            );

        setCurrentDate(newDate);

        await loadCalendar(newDate);
    }


    async function nextMonth() {

        const newDate =
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + 1,
                1
            );

        setCurrentDate(newDate);

        await loadCalendar(newDate);
    }


    function getBookingCount(
        day: number
    ) {

        return calendarBookings.filter(
            booking => {

                const bookingDate =
                    new Date(
                        `${booking.date}T00:00:00`
                    );

                return (
                    bookingDate.getDate() === day &&
                    bookingDate.getMonth() ===
                        currentDate.getMonth() &&
                    bookingDate.getFullYear() ===
                        currentDate.getFullYear()
                );
            }
        ).length;
    }


    function formatDate(
        year: number,
        month: number,
        day: number
    ) {

        const monthString =
            String(month + 1).padStart(2, "0");

        const dayString =
            String(day).padStart(2, "0");

        return `${year}-${monthString}-${dayString}`;
    }


    function renderCalendar() {

        const year =
            currentDate.getFullYear();

        const month =
            currentDate.getMonth();

        const firstDay =
            new Date(
                year,
                month,
                1
            ).getDay();

        const daysInMonth =
            new Date(
                year,
                month + 1,
                0
            ).getDate();

        const calendarDays = [];

        for (
            let i = 0;
            i < firstDay;
            i++
        ) {

            calendarDays.push(
                <div
                    key={`blank-${i}`}
                    className="calendar-day blank"
                />
            );
        }


        for (
            let day = 1;
            day <= daysInMonth;
            day++
        ) {

            const count =
                getBookingCount(day);

            const dateString =
                formatDate(
                    year,
                    month,
                    day
                );

            calendarDays.push(

                <div
                    key={day}
                    className="calendar-day"
                >

                    <span className="calendar-date">
                        {day}
                    </span>

                    {count > 0 && (

                        <button
                            type="button"
                            className="calendar-booking-count"
                            onClick={() =>
                                loadBookingsForDay(
                                    dateString
                                )
                            }
                        >
                            {count}
                        </button>

                    )}

                </div>
            );
        }

        return calendarDays;
    }


    if (!user) {
        return <Navigate to="/login" />;
    }

    if (user.role !== "ADMIN") {
        return <Navigate to="/" />;
    }


    return (

        <main className="admin-page">

            <section className="admin-dashboard">


                {/* TOP MENU */}

                <div className="admin-menu">

                    <button
                        type="button"
                        onClick={loadTotals}
                    >
                        Totals
                    </button>


                    <button
                        type="button"
                        onClick={loadUsers}
                    >
                        User
                    </button>


                    <button
                        type="button"
                        onClick={loadContacts}
                    >
                        Contact
                    </button>


                    {/* BOOKING DROPDOWN */}

                    <div className="admin-booking-dropdown">

                        <button
                            type="button"
                            className="admin-booking-button"
                        >
                            Booking
                        </button>

                        <div className="admin-booking-menu">

                            {services.map(
                                service => (

                                <button
                                    type="button"
                                    key={service.value}
                                    onClick={() =>
                                        loadBookings(
                                            service.value
                                        )
                                    }
                                >
                                    {service.name}
                                </button>

                            ))}

                        </div>

                    </div>


                    {/* CALENDAR */}

                    <button
                        type="button"
                        onClick={() =>
                            loadCalendar()
                        }
                    >
                        Calendar
                    </button>

                </div>


                {/* MAIN CONTENT */}

                <div className="admin-content">


                    {error && (
                        <p className="admin-error">
                            {error}
                        </p>
                    )}


                    {loading && (
                        <p>
                            Loading...
                        </p>
                    )}


                    {/* TOTALS */}

                    {!loading &&
                        activeView === "totals" && (

                        <div className="admin-totals">

                            <h2>
                                Totals
                            </h2>


                            <div>

                                <h3>
                                    Users
                                </h3>

                                <p>
                                    {totalUsers}
                                </p>

                            </div>


                            <div>

                                <h3>
                                    Bookings
                                </h3>

                                <p>
                                    {totalBookings}
                                </p>

                            </div>


                            <div>

                                <h3>
                                    Contacts
                                </h3>

                                <p>
                                    {totalContacts}
                                </p>

                            </div>

                        </div>
                    )}


                    {/* USERS */}

                    {!loading &&
                        activeView === "users" && (

                        <div className="admin-users">

                            <h2>
                                Users
                            </h2>


                            {users.length === 0 ? (

                                <p>
                                    No users found.
                                </p>

                            ) : (

                                users.map(
                                    adminUser => (

                                    <div
                                        className="admin-item"
                                        key={adminUser.id}
                                    >

                                        <h3>
                                            {adminUser.firstname}{" "}
                                            {adminUser.lastname}
                                        </h3>

                                        <p>
                                            Email:{" "}
                                            {adminUser.email}
                                        </p>

                                        <p>
                                            Phone:{" "}
                                            {adminUser.phone}
                                        </p>

                                        <p>
                                            Role:{" "}
                                            {adminUser.role}
                                        </p>


                                        {adminUser.id !== user.id && (

                                            <button
                                                type="button"
                                                className="admin-delete-button"
                                                onClick={() =>
                                                    handleDeleteUser(
                                                        adminUser.id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>

                                        )}

                                    </div>

                                ))
                            )}

                        </div>
                    )}


                    {/* CONTACTS */}

                    {!loading &&
                        activeView === "contacts" && (

                        <div className="admin-contacts">

                            <h2>
                                Contacts
                            </h2>


                            {contacts.length === 0 ? (

                                <p>
                                    No contact submissions.
                                </p>

                            ) : (

                                contacts.map(
                                    contact => (

                                    <div
                                        className="admin-item"
                                        key={contact.id}
                                    >

                                        <h3>
                                            {contact.name}
                                        </h3>


                                        {"date" in contact && (
                                            <p>
                                                Date:{" "}
                                                {String(contact.date)}
                                            </p>
                                        )}


                                        <p>
                                            Email:{" "}
                                            {contact.email}
                                        </p>

                                        <p>
                                            Phone:{" "}
                                            {contact.phone}
                                        </p>

                                        <p>
                                            Message:
                                        </p>

                                        <p>
                                            {contact.message}
                                        </p>


                                        <button
                                            type="button"
                                            className="admin-delete-button"
                                            onClick={() =>
                                                handleDeleteContact(
                                                    contact.id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>

                                ))
                            )}

                        </div>
                    )}


                    {/* CALENDAR */}

                    {!loading &&
                        activeView === "calendar" && (

                        <div className="admin-calendar">


                            <div className="calendar-header">

                                <button
                                    type="button"
                                    onClick={
                                        previousMonth
                                    }
                                >
                                    Previous
                                </button>


                                <h2>

                                    {currentDate.toLocaleString(
                                        "default",
                                        {
                                            month: "long",
                                            year: "numeric",
                                        }
                                    )}

                                </h2>


                                <button
                                    type="button"
                                    onClick={
                                        nextMonth
                                    }
                                >
                                    Next
                                </button>

                            </div>


                            <div className="calendar-weekdays">

                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>

                            </div>


                            <div className="calendar-grid">

                                {renderCalendar()}

                            </div>


                        </div>
                    )}


                    {/* BOOKINGS */}

                    {!loading &&
                        activeView === "bookings" && (

                        <div className="admin-bookings">

                            <h2>

                                {selectedDate
                                    ? `Bookings for ${selectedDate}`
                                    : services.find(
                                        service =>
                                            service.value ===
                                            selectedService
                                    )?.name}

                            </h2>


                            {bookings.length === 0 ? (

                                <p>
                                    No bookings found.
                                </p>

                            ) : (

                                bookings.map(
                                    booking => (

                                    <div
                                        className="admin-item"
                                        key={booking.id}
                                    >

                                        <h3>
                                            {booking.service}
                                        </h3>

                                        <p>
                                            Customer:{" "}
                                            {booking.name}
                                        </p>

                                        <p>
                                            Email:{" "}
                                            {booking.email}
                                        </p>

                                        <p>
                                            Phone:{" "}
                                            {booking.phone}
                                        </p>

                                        <p>
                                            Date:{" "}
                                            {booking.date}
                                        </p>

                                        <p>
                                            Time:{" "}
                                            {booking.time}
                                        </p>

                                        <p>
                                            Additional Information:{" "}
                                            {booking.additionalinfo}
                                        </p>


                                        {booking.paymentStatus && (

                                            <p>
                                                Payment Status:{" "}
                                                {booking.paymentStatus}
                                            </p>

                                        )}


                                        <button
                                            type="button"
                                            className="admin-delete-button"
                                            onClick={() =>
                                                handleDeleteBooking(
                                                    booking.id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>

                                    </div>

                                ))
                            )}

                        </div>
                    )}

                </div>

            </section>

        </main>
    );
}

export default Admin;