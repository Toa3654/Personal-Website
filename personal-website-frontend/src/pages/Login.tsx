import { useState } from "react";
import { loginUser } from "../services/authService";

function Login() {
    const [error, setError] = useState("");

    async function handleSubmit(
        event: React.SubmitEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setError("");

        const formData = new FormData(event.currentTarget);

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            const user = await loginUser(email, password);

            console.log("Logged in user:", user);

            // You can redirect after login here
            window.location.href = "/";
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Login failed.");
            }
        }
    }

    return (
        <main>
            <section>
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                        />
                    </div>

                    {error && <p>{error}</p>}

                    <button type="submit">
                        Login
                    </button>
                </form>
            </section>
        </main>
    );
}

export default Login;