export interface AdminUser {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    role: "USER" | "ADMIN";
}

export interface AdminContact {
    id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    date: string;
}

export interface AdminBooking {
    id: string;
    service: string;
    name: string;
    date: string;
    time: string;
    email: string;
    phone: string;
    additionalinfo: string;
    paymentStatus?: string;
    squarePaymentId?: string;
}

const BASE_URL =
    "http://localhost:8080/personalwebsite/admin";

export async function getAllUsers(): Promise<AdminUser[]> {
    const response = await fetch(
        `${BASE_URL}/users`,
        {
            credentials: "include",
        }
    );

    if (!response.ok) {
        throw new Error(
            "Unable to get users."
        );
    }

    return response.json();
}

export async function getAllContacts(): Promise<AdminContact[]> {
    const response = await fetch(
        `${BASE_URL}/contacts`,
        {
            credentials: "include",
        }
    );

    if (!response.ok) {
        throw new Error(
            "Unable to get contacts."
        );
    }

    return response.json();
}

export async function getAllBookings(): Promise<AdminBooking[]> {
    const response = await fetch(
        `${BASE_URL}/bookings`,
        {
            credentials: "include",
        }
    );

    if (!response.ok) {
        throw new Error(
            "Unable to get bookings."
        );
    }

    return response.json();
}

export async function getBookingsByMonth(
    month: number
): Promise<AdminBooking[]> {

    const response = await fetch(
        `${BASE_URL}/bookings/month/${month}`,
        {
            credentials: "include",
        }
    );

    if (!response.ok) {
        throw new Error(
            "Unable to get bookings by month."
        );
    }

    return response.json();
}

export async function getBookingsByDay(
    date: string
): Promise<AdminBooking[]> {

    const response = await fetch(
        `${BASE_URL}/bookings/day/${date}`,
        {
            credentials: "include",
        }
    );

    if (!response.ok) {
        throw new Error(
            "Unable to get bookings by day."
        );
    }

    return response.json();
}

export async function getBookingsByService(
    service: string
): Promise<AdminBooking[]> {

    const response = await fetch(
        `${BASE_URL}/bookings/service/${service}`,
        {
            credentials: "include",
        }
    );

    if (!response.ok) {
        throw new Error(
            "Unable to get bookings by service."
        );
    }

    return response.json();
}

export async function getTotalUsers(): Promise<number> {
    const response = await fetch(
        `${BASE_URL}/total-users`,
        {
            credentials: "include",
        }
    );

    if (!response.ok) {
        throw new Error(
            "Unable to get total users."
        );
    }

    return response.json();
}

export async function getTotalBookings(): Promise<number> {
    const response = await fetch(
        `${BASE_URL}/total-bookings`,
        {
            credentials: "include",
        }
    );

    if (!response.ok) {
        throw new Error(
            "Unable to get total bookings."
        );
    }

    return response.json();
}

export async function getTotalContacts(): Promise<number> {
    const response = await fetch(
        `${BASE_URL}/total-contacts`,
        {
            credentials: "include",
        }
    );

    if (!response.ok) {
        throw new Error(
            "Unable to get total contacts."
        );
    }

    return response.json();
}
export async function deleteContact(
    id: string
) {

    const response = await fetch(
        `http://localhost:8080/personalwebsite/admin/contacts/${id}`,
        {
            method: "DELETE",
            credentials: "include",
        }
    );

    if (!response.ok) {
        throw new Error(
            "Unable to delete contact."
        );
    }
}


export async function deleteBooking(
    id: string
) {

    const response = await fetch(
        `http://localhost:8080/personalwebsite/admin/bookings/${id}`,
        {
            method: "DELETE",
            credentials: "include",
        }
    );

    if (!response.ok) {
        throw new Error(
            "Unable to delete booking."
        );
    }
}


export async function deleteUser(
    id: string
) {

    const response = await fetch(
        `http://localhost:8080/personalwebsite/admin/users/${id}`,
        {
            method: "DELETE",
            credentials: "include",
        }
    );

    if (!response.ok) {
        throw new Error(
            "Unable to delete user."
        );
    }
}