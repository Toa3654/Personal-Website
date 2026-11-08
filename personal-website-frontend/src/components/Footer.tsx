import { useState } from "react";
import { addContact } from "../services/contactService";
import "../styles/Footer.css";

function Footer() {
    const [message, setMessage] = useState("");

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const contact = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            message: formData.get("message") as string,
        };

        try {
            await addContact(contact);

            setMessage("Message sent.");

            event.currentTarget.reset();
        } catch (error) {
            setMessage("Unable to send message.");
        }
    }

    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-name">
                    <h2>Cannon Rivera</h2>
                    <p>Software Developer & Drone Pilot</p>
                </div>


                <div className="footer-form">

                    <h3>Send a Message</h3>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                        />

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Message"
                            rows={3}
                            required
                        />

                        <button type="submit">
                            Send
                        </button>

                    </form>

                    {message && (
                        <p className="footer-message">
                            {message}
                        </p>
                    )}

                </div>


                <div className="footer-contact">
                    <h3>Contact</h3>

                    <a href="mailto:Cannonrivera45@gmail.com">
                        Cannonrivera45@gmail.com
                    </a>

                    <a href="tel:6412890720">
                        641-289-0720
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>

            </div>


            <div className="footer-bottom">
                <p>© 2026 Cannon Rivera. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;