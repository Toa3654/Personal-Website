export interface UpdatedUser {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
}

export async function updateUser(
    id: string,
    user: UpdatedUser
) {
    const response = await fetch(
        `http://localhost:8080/personalwebsite/users/update/${id}`,
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
            },

            credentials: "include",

            body: JSON.stringify(user),
        }
    );

    if (!response.ok) {
        const message = await response.text();

        throw new Error(
            message || "Unable to update profile."
        );
    }

    return response.json();
}