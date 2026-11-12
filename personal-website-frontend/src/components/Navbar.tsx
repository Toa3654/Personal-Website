import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

interface User {
    id: string;
    firstname: string;
    email: string;
}

interface NavbarProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

function Navbar({ user, setUser }: NavbarProps) {
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            const response = await fetch(
                "http://localhost:8080/personalwebsite/users/logout",
                {
                    method: "POST",
                    credentials: "include",
                }
            );

            if (!response.ok) {
                console.error("Logout failed");
                return;
            }

            setUser(null);

            navigate("/");
        } catch (error) {
            console.error("Logout error:", error);
        }
    }

    return (
        <nav className="navbar">

            <div className="navbar-title">
                <a href="/">
                    <h1>Cannon Rivera</h1>
                </a>
            </div>

            <div className="navbar-links">

                <Link to="/about">
                    About
                </Link>


                <div className="dropdown">
                    <span className="dropdown-title">
                        Credentials
                    </span>

                    <div className="dropdown-menu">
                        <Link to="/academics">
                            Academics
                        </Link>

                        <Link to="/certificates">
                            Certificates
                        </Link>
                    </div>
                </div>


                <div className="dropdown">
                    <Link
                        to="/services"
                        className="dropdown-title"
                    >
                        Services
                    </Link>

                    <div className="dropdown-menu">
                        <Link to="/services">
                            All Services
                        </Link>

                        <Link to="/realestate">
                            Real Estate Photography
                        </Link>

                        <Link to="/hunting">
                            Hunting Recovery
                        </Link>

                        <Link to="/dronelearning">
                            Drone Learning
                        </Link>

                        <Link to="/websitebuilding">
                            Website Building
                        </Link>
                    </div>
                </div>


                <Link to="/booking">
                    Booking
                </Link>


                {user ? (
                    <>

                        <Link to="/profile">
                            Profile
                        </Link>

                        <button
                            className="logout-button"
                            type="button"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <div className="auth-links">

                        <Link to="/signup">
                            Sign Up
                        </Link>

                        <span>/</span>

                        <Link to="/login">
                            Login
                        </Link>

                    </div>
                )}
            </div>

        </nav>
    );
}

export default Navbar;