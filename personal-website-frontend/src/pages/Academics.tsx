import "../styles/Academics.css";

import diplomaOne from "../assets/IndianHillsDegree.png";
import diplomaTwo from "../assets/BellevueDegree.png";

function Academics() {
    return (
        <>
            <main className="academics-page">

                <h1 className="academics-title">Academics</h1>

                <section className="academic-section">

                    <img
                        src={diplomaOne}
                        alt="First Diploma"
                    />

                    <div className="academic-text">
                        <h2>First Degree / Diploma</h2>

                        <p>
                            I acquired my Associates in Software Development from Indian Hills Community College 
                            in 2025. The Reason I chose Indian Hills was it's affordability and it's reputation
                            for it's computer programming and the success into the work force. I learned multiple programming languages
                            including Java, Python, Cobol, C#, html, css, and I also learned small amounts of frontend frameworks like react.
                            They prioritized into two seperate paths of learning, backend, and frontend.
                        </p>
                    </div>

                    <img
                        src={diplomaTwo}
                        alt="Second Diploma"
                    />

                    <div className="academic-text">
                        <h2>Second Degree / Diploma</h2>

                        <p>
                            I acquired my Bachelors in Software Development from Bellevue University in October, 2026.
                            The Reason I chose Bellevue University was because the schools connection to Indian Hills and
                            the ability to do it online while I work. I learned more about work place environment in Capstone of Software Development
                            and I learned new languages like php, and JavaFX.
                        </p>
                    </div>

                </section>



            </main>
        </>
    );
}

export default Academics;