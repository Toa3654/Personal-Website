export interface NewContact {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export async function addContact(contact: NewContact) {

    const response = await fetch(
        "http://localhost:8080/personalwebsite/contacts/add",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            credentials: "include",

            body: JSON.stringify(contact),
        }
    );

    if (!response.ok) {
        const message = await response.text();

        throw new Error(
            message || "Unable to send contact message."
        );
    }

    return response.json();
}