import { Link } from "react-router-dom";
import "../styles/RealEstate.css";

function RealEstate() {

    return (
        <main className="real-estate-page">

            <section className="real-estate-hero">

                <div className="real-estate-hero-text">

                    <h1>
                        Real Estate Photography
                    </h1>

                    <p>
                        Professional aerial and property photography designed
                        to help homes, land, and commercial properties stand out.
                    </p>

                    <Link
                        to="/booking"
                        className="real-estate-button"
                    >
                        Book Photography
                    </Link>

                </div>

            </section>


            <section className="real-estate-section">

                <div className="real-estate-content">

                    <h2>
                        Showcase Your Property
                    </h2>

                    <p>
                        High-quality property images can make a major difference
                        when presenting a home, acreage, or commercial property.
                    </p>

                    <p>
                        I provide aerial based photography designed
                        to highlight the property, surrounding area, layout,
                        and unique features.
                    </p>

                </div>

            </section>


            <section className="real-estate-section real-estate-dark">

                <h2>
                    Photography Services
                </h2>

                <div className="real-estate-grid">

                    <div className="real-estate-card">

                        <h3>
                            Aerial Photography
                        </h3>

                        <p>
                            Drone photography provides a complete view of the
                            property, lot, surrounding land, and nearby features.
                        </p>

                    </div>


                    <div className="real-estate-card">

                        <h3>
                            Exterior Photography
                        </h3>

                        <p>
                            Professional exterior images help showcase the
                            condition, appearance, landscaping, and overall
                            presentation of the property.
                        </p>

                    </div>


                    <div className="real-estate-card">

                        <h3>
                            Land & Acreage
                        </h3>

                        <p>
                            Aerial images are especially useful for farms,
                            acreages, hunting ground, development property,
                            and larger parcels of land.
                        </p>

                    </div>


                    <div className="real-estate-card">

                        <h3>
                            Commercial Property
                        </h3>

                        <p>
                            Photography can be used to present commercial
                            buildings, lots, business locations, and surrounding
                            property.
                        </p>

                    </div>


                    <div className="real-estate-card">

                        <h3>
                            Custom Photography
                        </h3>

                        <p>
                            If you need something specific, include your request
                            when booking and we can discuss what images would
                            best fit your property.
                        </p>

                    </div>

                </div>

            </section>


            <section className="real-estate-section">

                <div className="real-estate-content">

                    <h2>
                        Great For
                    </h2>

                    <ul className="real-estate-list">

                        <li>
                            Residential home listings
                        </li>

                        <li>
                            Realtors and real estate agents
                        </li>

                        <li>
                            Farms and acreages
                        </li>

                        <li>
                            Land listings
                        </li>

                        <li>
                            Commercial properties
                        </li>

                        <li>
                            Rental properties
                        </li>

                        <li>
                            Private property owners
                        </li>

                    </ul>

                </div>

            </section>


            <section className="real-estate-section">

                <div className="real-estate-content">

                    <h2>
                        What I Need From You
                    </h2>

                    <p>
                        When booking, provide the property location and let me
                        know what type of photography you are looking for.
                    </p>

                    <p>
                        You can also include any specific features you would
                        like highlighted, such as acreage, buildings, landscaping,
                        views, property boundaries, or nearby landmarks.
                    </p>

                </div>

            </section>


            <section className="real-estate-section real-estate-callout">

                <h2>
                    Ready To Showcase Your Property?
                </h2>

                <p>
                    Book a real estate photography session and provide the
                    property details in the additional information section.
                </p>

                <Link
                    to="/booking"
                    className="real-estate-button"
                >
                    Book Real Estate Photography
                </Link>

            </section>

        </main>
    );
}

export default RealEstate;