export interface NewBooking {
    service: string;
    date: string;
    time: string;
    name: string;
    email: string;
    phone: string;
    additionalinfo: string;
}

export async function addBooking(booking: NewBooking) {
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
        const message = await response.text();

        throw new Error(
            message || "Unable to create booking."
        );
    }

    return response.json();
}