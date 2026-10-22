import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-title">
                <a href="/">
                    <h1>Cannon Rivera</h1>
                </a>
            </div>

            <div className="navbar-links">
                <Link to="/about">About</Link>
                <Link to="/academics">Academics</Link>
                <Link to="/certificates">Certificates</Link>
                <div className="dropdown">
                    <Link to="/services" className="dropdown-title">
                        Services
                    </Link>

                    <div className="dropdown-menu">
                        <Link to="/services">All Services</Link>
                        <Link to="/realestate">Real Estate Photography</Link>
                        <Link to="/hunting">Hunting Recovery</Link>
                        <Link to="/drone-learning">Drone Learning</Link>
                        <Link to="/website-building">Website Building</Link>
                    </div>
                </div>            
            </div>

        </nav>
    );
}

export default Navbar;