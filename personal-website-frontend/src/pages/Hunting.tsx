import { Link } from "react-router-dom";
import "../styles/Hunting.css";

function Hunting() {

    return (
        <main className="hunting-page">

            <section className="hunting-hero">

                <div className="hunting-hero-text">

                    <h1>
                        Hunting Recovery
                    </h1>

                    <p>
                        Drone-assisted recovery services designed to help
                        locate deer and other game after the shot.
                    </p>

                    <a href="#contact">
                        <h2>Contact Me</h2>
                    </a>
                </div>

            </section>


            <section className="hunting-section">

                <div className="hunting-content">

                    <h2>
                        Drone-Assisted Game Recovery
                    </h2>

                    <p>
                        Finding an animal who survived the shot can be
                        challenging, especially in heavy cover, crop fields,
                        wooded areas, or difficult terrain.
                    </p>

                    <p>
                        Using a Thermal Drone, I can assist hunters by
                        searching large areas from above and helping identify
                        possible locations of downed game.
                    </p>

                </div>

            </section>


            <section className="hunting-section hunting-dark-section">

                <h2>
                    How It Works
                </h2>

                <div className="hunting-steps">

                    <div className="hunting-card">

                        <h3>
                            1. On Call Service
                        </h3>

                        <p>
                            When You book, it will send me a notification and I will
                            contact you as soon as possible. Only book after the shot.
                        </p>

                    </div>


                    <div className="hunting-card">

                        <h3>
                            2. Schedule the Search
                        </h3>

                        <p>
                            We will determine an available time and discuss the
                            location before beginning the recovery search.
                        </p>

                    </div>


                    <div className="hunting-card">

                        <h3>
                            3. Drone Search
                        </h3>

                        <p>
                            The drone is used to search the surrounding area
                            from above while looking for signs of the animal.
                        </p>

                    </div>


                    <div className="hunting-card">

                        <h3>
                            4. Payment
                        </h3>

                        <p>
                            It is $50 dollars no matter what and $100 if the deer is found.
                            There is no guarentee if the deer will be found, but I will try my best
                            to find your deer. It is not an hourly payment so I will go until it is found or I am certain I've lost it.
                        </p>

                    </div>

                </div>

            </section>


            <section className="hunting-section">

                <div className="hunting-content">

                    <h2>
                        Information To Have Ready
                    </h2>

                    <ul className="hunting-list">

                        <li>
                            Property or hunting location
                        </li>

                        <li>
                            Approximate shot location
                        </li>

                        <li>
                            Last known location of the animal
                        </li>

                        <li>
                            Direction the animal traveled
                        </li>

                        <li>
                            Approximate time of the shot
                        </li>

                        <li>
                            Description of the terrain
                        </li>

                        <li>
                            Any blood trail or other signs found
                        </li>

                    </ul>

                </div>

            </section>


            <section className="hunting-section hunting-callout">

                <h2>
                    Need Help With a Recovery?
                </h2>

                <p>
                    Submit a booking request with the details of your hunt
                    and I will contact you regarding availability.
                </p>

                <Link
                    to="/booking"
                    className="hunting-book-button"
                >
                    Book Hunting Recovery
                </Link>

            </section>
        </main>
    );
}

export default Hunting;