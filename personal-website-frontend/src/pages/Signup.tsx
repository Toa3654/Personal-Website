import { useState } from "react";
import { addUser } from "../services/userService";
import "../styles/Signup.css";

function Signup() {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        setMessage("");
        setError("");

        const formData = new FormData(event.currentTarget);

        const firstname = formData.get("firstname") as string;
        const lastname = formData.get("lastname") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            await addUser({
                firstname,
                lastname,
                email,
                phone,
                password,
            });

            setMessage("Account created successfully.");

            event.currentTarget.reset();
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Something went wrong.");
            }
        }
    }

    return (
        <>
            <header>
                <h1>Create Account</h1>
            </header>
            <main>
                <section className="signup-box">

                    <form onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="firstname">
                                first name
                            </label>

                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastname">
                                last name
                            </label>

                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="phone">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>

                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                            />
                        </div>

                        {error && (
                            <p className="error-message">
                                {error}
                            </p>
                        )}

                        {message && (
                            <p className="success-message">
                                {message}
                            </p>
                        )}

                        <button type="submit">
                            Sign Up
                        </button>
                    </form>
                </section>
            </main>
        </>
    );
}

export default Signup;