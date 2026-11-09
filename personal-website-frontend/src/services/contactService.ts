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
        const errorMessage = await response.text();

        throw new Error(
            errorMessage || `Request failed with status ${response.status}`
        );
    }

    return response.json();
}