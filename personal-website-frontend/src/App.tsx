import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Certificates from "./pages/Certificates";
import Services from "./pages/Services";
import Realestate from "./pages/Realestate";
import Hunting from "./pages/Hunting";
import DroneLearning from "./pages/DroneLearning";
import WebsiteBuilding from "./pages/WebsiteBuilding";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

function App() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function checkSession() {
            try {
                const response = await fetch(
                    "http://localhost:8080/personalwebsite/users/session/current",
                    {
                        method: "GET",
                        credentials: "include",
                    }
                );

                if (!response.ok) {
                    setUser(null);
                    return;
                }

                const data: User = await response.json();

                setUser(data);

            } catch (error) {
                console.error("Session check failed:", error);
                setUser(null);
            }
        }

        checkSession();
    }, []);

    return (
        <BrowserRouter>

        <Navbar user={user} setUser={setUser} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/services" element={<Services />} />

                <Route path="/realestate" element={<Realestate />} />
                <Route path="/hunting" element={<Hunting />} />
                <Route path="/drone-learning" element={<DroneLearning />} />
                <Route path="/website-building" element={<WebsiteBuilding />} />
                <Route path="/profile" element={<Profile user={user} />}/>
                <Route path="/booking" element={<Booking user={user} />}/>
                <Route path="/signup" element={<Signup />} />

                <Route
                    path="/login"
                    element={<Login setUser={setUser} />}
                />
            </Routes>

            <Footer />

        </BrowserRouter>
    );
}

export default App;