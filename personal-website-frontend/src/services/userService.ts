export interface NewUser {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
}

export async function addUser(user: NewUser) {
    const response = await fetch("http://localhost:8080/personalwebsite/users/add", {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        const message = await response.text();
        throw new Error(message || "Unable to create account");
    }

    return response.json();
}