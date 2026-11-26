import { Link } from "react-router-dom";
import "../styles/DroneLearning.css";

function DroneLearning() {
    return (
        <main className="drone-learning-page">

            <section className="drone-learning-hero">

                <div className="drone-learning-hero-text">

                    <h1>
                        Drone Learning
                    </h1>

                    <p>
                        One-on-one drone consultation for people looking
                        to start drone operations as a hobby, for work, or for agriculture.
                        Advice on Part 107, safety, equipment and practicality.
                    </p>

                    <Link
                        to="/booking"
                        className="drone-learning-button"
                    >
                        Book a Session
                    </Link>

                </div>

            </section>


            <section className="drone-learning-section">

                <div className="drone-learning-content">

                    <h2>
                        Learn at Your Own Pace
                    </h2>

                    <p>
                        Drone technology can be overwhelming when you are
                        getting started and videos might not be for you. Learning from someone
                        in front of you is a very common learning improvement.
                    </p>

                    <p>
                        Lessons can be whatever you feel you want to learn.
                        Part 107 studying, basic drone skills, laws, or even just
                        wanting to know more about the technology.
                    </p>

                </div>

            </section>


            <section className="drone-learning-section drone-learning-dark">

                <h2>
                    What You Can Learn
                </h2>

                <div className="drone-learning-grid">

                    <div className="drone-learning-card">

                        <h3>
                            Basic Flight Controls
                        </h3>

                        <p>
                            Learn how to safely take off, land, hover,
                            move the drone, and control its direction.
                        </p>

                    </div>


                    <div className="drone-learning-card">

                        <h3>
                            Drone Setup
                        </h3>

                        <p>
                            Learn how to prepare your drone before a flight,
                            connect the controller, check settings, and make
                            sure everything is ready to operate.
                        </p>

                    </div>


                    <div className="drone-learning-card">

                        <h3>
                            Flight Safety
                        </h3>

                        <p>
                            Learn basic safety practices, pre-flight checks,
                            weather considerations, and how to operate with
                            awareness of your surroundings.
                        </p>

                    </div>


                    <div className="drone-learning-card">

                        <h3>
                            Camera Operation
                        </h3>

                        <p>
                            Learn basic camera controls and techniques for
                            capturing better aerial photos and video.
                        </p>

                    </div>


                    <div className="drone-learning-card">

                        <h3>
                            FAA Part 107 Basics
                        </h3>

                        <p>
                            Get an introduction to commercial drone operation,
                            FAA Part 107 topics, and what is involved in
                            becoming a certified remote pilot.
                        </p>

                    </div>


                    <div className="drone-learning-card">

                        <h3>
                            Personalized Help
                        </h3>

                        <p>
                            Bring specific questions or problems you are
                            having with drones and we can focus the lesson
                            on what you need help with most.
                        </p>

                    </div>

                </div>

            </section>


            <section className="drone-learning-section">

                <div className="drone-learning-content">

                    <h2>
                        Who Is This For?
                    </h2>

                    <ul className="drone-learning-list">

                        <li>
                            First-time drone owners
                        </li>

                        <li>
                            People who have thought about getting a drone
                        </li>

                        <li>
                            Hobby pilots who want more confidence
                        </li>

                        <li>
                            People interested in aerial photography
                        </li>

                        <li>
                            People who want there Part 107
                        </li>

                        <li>
                            Anyone who wants hands-on drone instruction
                        </li>

                    </ul>

                </div>

            </section>


            <section className="drone-learning-section">

                <div className="drone-learning-content">

                    <h2>
                        What To Bring
                    </h2>

                    <p>
                        If you already own a drone, bring your drone,
                        controller, batteries, charger, and any other
                        equipment you normally use.
                    </p>

                    <p>
                        You can also bring a list of questions or specific
                        topics you would like to cover during the lesson.
                    </p>

                </div>

            </section>


            <section className="drone-learning-section drone-learning-callout">

                <h2>
                    Ready To Learn?
                </h2>

                <p>
                    Book a drone learning session and include what you would
                    like help with in the additional information section.
                </p>

                <Link
                    to="/booking"
                    className="drone-learning-button"
                >
                    Book Drone Learning
                </Link>
            </section>

        </main>
    );
}

export default DroneLearning;