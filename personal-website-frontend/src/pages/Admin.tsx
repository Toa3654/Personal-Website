import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import {
    getAllUsers,
    getAllContacts,
    getAllBookings,
    getBookingsByService,
    getTotalUsers,
    getTotalBookings,
    getTotalContacts,
    type AdminUser,
    type AdminContact,
    type AdminBooking,
} from "../services/adminService";

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
    | "bookings";

function Admin({ user }: AdminProps) {

    const [activeView, setActiveView] =
        useState<AdminView>("totals");

    const [users, setUsers] =
        useState<AdminUser[]>([]);

    const [contacts, setContacts] =
        useState<AdminContact[]>([]);

    const [bookings, setBookings] =
        useState<AdminBooking[]>([]);

    const [totalUsers, setTotalUsers] =
        useState(0);

    const [totalBookings, setTotalBookings] =
        useState(0);

    const [totalContacts, setTotalContacts] =
        useState(0);

    const [selectedService, setSelectedService] =
        useState("ALL");

    const [error, setError] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    /*
        These values need to match your Java Services enum.
        When you add another service later,
        just add it here.
    */
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

    /*
        Load totals when the admin page first opens.
    */
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

                            {services.map((service) => (

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

                </div>


                {/* MAIN CHANGING BOX */}

                <div className="admin-content">

                    {error && (
                        <p className="admin-error">
                            {error}
                        </p>
                    )}

                    {loading && (
                        <p>Loading...</p>
                    )}


                    {/* TOTALS */}

                    {!loading &&
                        activeView === "totals" && (

                        <div className="admin-totals">

                            <h2>Totals</h2>

                            <div>
                                <h3>Users</h3>
                                <p>{totalUsers}</p>
                            </div>

                            <div>
                                <h3>Bookings</h3>
                                <p>{totalBookings}</p>
                            </div>

                            <div>
                                <h3>Contacts</h3>
                                <p>{totalContacts}</p>
                            </div>

                        </div>
                    )}


                    {/* USERS */}

                    {!loading &&
                        activeView === "users" && (

                        <div className="admin-users">

                            <h2>Users</h2>

                            {users.length === 0 ? (

                                <p>No users found.</p>

                            ) : (

                                users.map((adminUser) => (

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

                                    </div>

                                ))
                            )}

                        </div>
                    )}


                    {/* CONTACTS */}

                    {!loading &&
                        activeView === "contacts" && (

                        <div className="admin-contacts">

                            <h2>Contacts</h2>

                            {contacts.length === 0 ? (

                                <p>
                                    No contact submissions.
                                </p>

                            ) : (

                                contacts.map((contact) => (

                                    <div
                                        className="admin-item"
                                        key={contact.id}
                                    >

                                        <h3>
                                            {contact.name}
                                        </h3>

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

                                    </div>

                                ))
                            )}

                        </div>
                    )}


                    {/* BOOKINGS */}

                    {!loading &&
                        activeView === "bookings" && (

                        <div className="admin-bookings">

                            <h2>
                                {services.find(
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

                                bookings.map((booking) => (

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
                                            {
                                                booking.additionalinfo
                                            }
                                        </p>

                                        {booking.paymentStatus && (

                                            <p>
                                                Payment Status:{" "}
                                                {
                                                    booking.paymentStatus
                                                }
                                            </p>

                                        )}

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