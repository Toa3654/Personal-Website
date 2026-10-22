import "../styles/About.css";
import badlandsSign from "../assets/badlandssign.jpg";

function About() {
    return (
        <>

            <header className="header">
                <div className="header-text">
                    <h1>About Me</h1>

                    <p>
                        I enjoy doing many different things, but the two things I am most passionate about
                        are programming and drones, and I hope to build a career around them.
                        What I enjoy most about programming is not just writing code, but the problem-solving
                        that comes with it. Drone work adds a real-world aspect to that problem-solving because
                        every environment is different, requiring preparation, adaptability, and attention to
                        detail to ensure accurate work.
                    </p>
                </div>

                <div className="header-image">
                    <img src={badlandsSign} alt="The Badlands" />
                </div>
            </header>

            <main>
                <section className="hobbies">

                    <div className="hobby-card">
                        <img src={badlandsSign} alt="The Badlands" />

                        <div className="overlay">
                            <h2>Adventuring</h2>
                        </div>
                    </div>

                    <div className="hobby-card">
                        <img src={badlandsSign} alt="Video Games" />

                        <div className="overlay">
                            <h2>Video Games</h2>
                        </div>
                    </div>

                    <div className="hobby-card">
                        <img src={badlandsSign} alt="Drones" />

                        <div className="overlay">
                            <h2>Drones</h2>
                        </div>
                    </div>

                    <div className="hobby-card">
                        <img src={badlandsSign} alt="Lifting Weights" />

                        <div className="overlay">
                            <h2>Lifting Weights</h2>
                        </div>
                    </div>

                    <div className="hobby-card wide">
                        <img src={badlandsSign} alt="Food" />

                        <div className="overlay">
                            <h2>Food</h2>
                        </div>
                    </div>

                </section>
            </main>

        </>
    );
}

export default About;