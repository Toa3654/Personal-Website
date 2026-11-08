export async function loginUser(email: string, password: string) {
    const response = await fetch(
        "http://localhost:8080/personalwebsite/users/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
                email,
                password,
            }),
        }
    );

    if (!response.ok) {
        throw new Error("Invalid email or password");
    }

    return response.json();
}