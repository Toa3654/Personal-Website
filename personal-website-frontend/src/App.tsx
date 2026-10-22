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



function App() {
    return (
        <BrowserRouter>

            <Navbar />

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
            </Routes>

            <Footer />

        </BrowserRouter>
    );
}

export default App;