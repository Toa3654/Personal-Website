import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-name">
                    <h2>Cannon Rivera</h2>
                    <p>Software Developer & Drone Pilot</p>
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