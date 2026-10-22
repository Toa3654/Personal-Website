import "../styles/Services.css";

function Services() {
    return (
        <>
        <main>
            <section>
                <header>
                    <h1>Drone Services</h1>
                </header>

                <div className="Real-estate">
                    <h2>Real Estate Photography</h2>

                    <p>
                        With my FAA Part 107 certification, I am legally able to provide
                        drone photography and videography services for commercial purposes.
                        This includes real estate marketing. If you are looking for scenic
                        aerial photos or videos to help showcase a property, I can help create
                        content that gives potential buyers a better view of the home and surrounding area.
                    </p>

                    <a href="/realestate">More Details</a>
                </div>


                <div className="hunting">
                    <h2>Hunting Recovery</h2>

                    <p>
                        If you need help locating a deer or another harvested animal, I can
                        provide aerial search and recovery assistance using a drone. Thermal
                        drone technology can be especially useful for locating animals in areas
                        that are difficult to search on foot. This would be an on-call service,
                        mainly available during morning and evening hours, with 24/7 availability
                        on weekends.
                    </p>

                    <a href="/hunting">More Details</a>
                </div>


                <div className="Drone-Learning">
                    <h2>Drone Learning</h2>

                    <p>
                        If you are considering using a drone to make a task easier, I can help
                        you decide whether a drone would be a good fit for your needs. This could
                        include recreational flying, checking livestock, photography, hobbies,
                        or future agricultural use. I am still continuing to build my own experience,
                        but I can provide a drone for you to test and help you learn the basics before
                        deciding whether it is something you want to pursue.
                    </p>

                    <a href="/drone-learning">More Details</a>
                </div>
            </section>


            <section>
                <header>
                    <h1>Programming Services</h1>
                </header>

                <div>
                    <h2>Website Building</h2>

                    <p>
                        Small businesses sometimes need help creating a website, especially when
                        website builders are difficult to use or do not provide the flexibility
                        needed to achieve a specific design or function. If that sounds like your
                        situation, we can discuss what you are looking for and explore possible
                        solutions. If it is a good fit, I can also work with you to build the website.
                    </p>

                    <p>
                        I want to be transparent that I am still early in my professional development
                        and continuing to build experience. However, I understand how important a
                        website can be for attracting customers and representing a business. I would
                        work hard to create something that meets your needs and provides a good
                        experience for your customers. Because I am still building my portfolio,
                        my pricing would also reflect that level of experience.
                    </p>
                </div>
            </section>

        </main>
        </>
    );
}

export default Services;