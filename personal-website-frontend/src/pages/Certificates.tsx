import "../styles/Certificates.css";

import pesticideCertificate from "../assets/PrivatePesticideCertificate.png";
import part107Front from "../assets/Front Part107.png";
import awsCertificate from "../assets/AWSCertifiedCloudPractitioner.png";

function Certificates() {
    return (
        <>
        <main className="certificates-page">

            <h1 className="certificates-title">Certificates</h1>

            <section className="certificate-section">

                <img
                    src={pesticideCertificate}
                    alt="Private Pesticide Certificate"
                />

                <div className="certificate-text">
                    <h2>Private Pesticide Certificate</h2>

                    <p>
                        I got my private pesticide certificate in 2026 and I plan to attend
                        the classes needed to keep the certificate active. I earned the
                        certificate so I could fly an agricultural drone for fungicide,
                        insecticide, and herbicide spraying.
                    </p>
                </div>

            </section>


            <section className="certificate-section">

                <img
                    src={part107Front}
                    alt="Front Part 107 ID"
                />

                <div className="certificate-text">
                    <h2>FAA Part 107</h2>

                    <p>
                        I got my Part 107 in 2025 because I enjoyed flying drones and saw
                        the potential for it to become a second career.
                    </p>
                </div>

            </section>


            <section className="certificate-section">

                <img
                    src={awsCertificate}
                    alt="AWS Certified Cloud Practitioner"
                />

                <div className="certificate-text">
                    <h2>AWS Certified Cloud Practitioner</h2>

                    <p>
                        I earned this certificate in 2025 during school to show my commitment
                        to continuing my education in AWS. I plan to keep expanding my skills
                        and move further into the DevOps area.
                    </p>
                </div>

            </section>
        </main>
        </>
    );
}

export default Certificates;