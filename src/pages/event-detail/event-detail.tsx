import Breadcrumb from "../../components/user/breadcrumb";

const EventDetail = () => {
    return (
        <>
            <Breadcrumb data={{ label: "Event Detail", path: "Event Detail" }} />
            <section className="container my-4 my-xl-5">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="mb-3">
                            <span className="badge bg-danger">Mechanical</span>
                            <h2 className="fw-bold mt-2">
                                Become a product manager learn the Skills &amp; job.
                            </h2>
                            <div className="d-flex align-items-center mt-3">
                                <img
                                    src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                    alt="CODE Teacher"
                                    className="rounded-circle me-2"
                                    width={40}
                                    height={40}
                                />
                                <div className="me-4">
                                    <span className="text-muted">Teacher:</span>
                                    <strong>Elton Muskad</strong>
                                </div>
                                <div className="me-4">
                                    <span className="text-muted">Last Update:</span>
                                    <strong>July 24, 2024</strong>
                                </div>
                                <div>
                                    <span className="text-muted">Location:</span>
                                    <strong>6/8 West College St, Sun City, USA</strong>
                                </div>
                            </div>
                            <img
                                src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                alt="CODE Image"
                                className="img-fluid mt-3"
                            />
                            <div className="mt-4">
                                <h3>Description</h3>
                                <p>
                                    He legged it up the kyver have it mush super old mucker cheeky
                                    naff that are you taking the piss, blow off ruddy the pub bite
                                    your arm off the wireless boot cor blimey guvnor happy days
                                    bender what a load of rubbish, say cheers pardon me horse
                                    plays spiffing Why barf owt gob bubble and squeak. Cheers
                                    Richard bugger show off show Que pick your nose and blow off
                                    get stuffed mate chancer in my flat loo, bevvy amongst
                                    hunky-dory bender bubble and squeak cod old mucker vagabond,
                                    barmy spend a penny chimney pot young delinquent bum bag the
                                    nancy arm knees chap, gosh nice one knees up the wireless
                                    Charles such a fibber. Mush barmy Blending Jeffrey pardon nose
                                    barmy cob the cup of tea bubble and squeak bugger all mate
                                    say, I bloke mate boy tickety-boo give us the duff bugger
                                    lurgy wind up I don't want no agro.
                                </p>
                                <h3>This event will allow participants to:</h3>
                                <ul className="list-unstyled">
                                    <li>
                                        <i className="fas fa-check text-success me-2" />
                                        Business's managers, leaders
                                    </li>
                                    <li>
                                        <i className="fas fa-check text-success me-2" />
                                        Downloadable lectures, code and design assets for all
                                        projects
                                    </li>
                                    <li>
                                        <i className="fas fa-check text-success me-2" />
                                        Anyone who is finding a chance to get the promotion
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="bg-white p-4 rounded shadow-sm mb-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <span className="fs-4 fw-bold text-danger">$32.00</span>
                                    <del className="ms-2 text-muted">$67.00</del>
                                </div>
                                <span className="badge bg-danger">68% OFF</span>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex align-items-center mb-2">
                                    <i className="far fa-calendar-alt me-2 text-danger" />
                                    <span>End: July 26, 2024 12:30 am</span>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="far fa-clock me-2 text-danger" />
                                    <span>Time: 10:45 AM-01:30 PM</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="fas fa-map-marker-alt me-2 text-danger" />
                                    <span>Venue: New York, TX 82760, US</span>
                                </div>
                            </div>
                            <button className="btn btn-danger w-100 mb-3">
                                Enroll Now Course
                            </button>
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm">
                            <h5>Sponsored</h5>
                            <div className="d-flex align-items-center mb-3">
                                <img
                                    src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                    alt="CODE Logo"
                                    className="img-fluid rounded me-3"
                                    width={40}
                                    height={40}
                                />
                                <div>
                                    <strong>Thomas R. Toe</strong>
                                    <span className="d-block text-muted">
                                        Email: itsmdonham@gmail.com
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <h6 className="me-2 mb-0">Share</h6>
                                <a
                                    href="#"
                                    className="text-muted fs-5 me-2 border p-2 rounded d-inline-block text-decoration-none"
                                >
                                    <i className="fab fa-facebook" />
                                </a>
                                <a
                                    href="#"
                                    className="text-muted fs-5 me-2 border p-2 rounded d-inline-block text-decoration-none"
                                >
                                    <i className="fab fa-twitter" />
                                </a>
                                <a
                                    href="#"
                                    className="text-muted fs-5 border p-2 rounded d-inline-block text-decoration-none"
                                >
                                    <i className="fab fa-youtube" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventDetail;
