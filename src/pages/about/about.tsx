import Breadcrumb from "../../components/user/breadcrumb"

const About = () => {
    return (
        <>
            <Breadcrumb data={{ label: "About", path: "About" }} />
            <div>
                <div className="container py-5">
                    <div className="row align-items-center gy-4">
                        <div className="col-md-6">
                            <img alt="CODE" className="img-fluid rounded" src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                            />
                        </div>
                        <div className="col-md-6">
                            <span className="badge bg-primary">About Us</span>
                            <h2 className="mt-3 fw-bold">
                                Welcome to the online Learning Center
                            </h2>
                            <p>
                                We assist you in learning anything you desire, from Product
                                Design to Web Development.
                            </p>
                            <p>
                                <span className="text-warning">
                                    <i className="fas fa-star" />
                                </span>
                                <strong>10+ Years Experience</strong>
                                in this game, many Product Designs.
                            </p>
                            <p>
                                We provide a variety of packages of courses available, and the
                                majority of the courses have been taken by experienced
                                instructors. We also offer a variety of learning materials to
                                help you get the most out of your learning experience.
                            </p>
                            <a className="btn btn-primary" href="#">
                                About More →
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                aria-controls="about"
                                aria-selected="true"
                                className="nav-link active"
                                data-bs-target="#about"
                                data-bs-toggle="tab"
                                id="about-tab"
                                role="tab"
                                type="button"
                            >
                                ABOUT
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                aria-controls="course"
                                aria-selected="false"
                                className="nav-link"
                                data-bs-target="#course"
                                data-bs-toggle="tab"
                                id="course-tab"
                                role="tab"
                                type="button"
                            >
                                COURSE
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                aria-controls="advisor"
                                aria-selected="false"
                                className="nav-link"
                                data-bs-target="#advisor"
                                data-bs-toggle="tab"
                                id="advisor-tab"
                                role="tab"
                                type="button"
                            >
                                ADVISOR
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                aria-controls="become"
                                aria-selected="false"
                                className="nav-link"
                                data-bs-target="#become"
                                data-bs-toggle="tab"
                                id="become-tab"
                                role="tab"
                                type="button"
                            >
                                BECOME
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content p-3" id="myTabContent">
                        <div
                            aria-labelledby="about-tab"
                            className="tab-pane fade show active"
                            id="about"
                            role="tabpanel"
                        >
                            <p>
                                There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some
                                form, by injected humour, or randomised words which don't look
                                even slightly believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't anything
                                embarrassing hidden in the middle of text.
                            </p>
                            <strong>Web and user interface design - Development</strong>
                            <p>
                                There are many variations of passages of Lorem Ipsum
                                available, but the majority have suffered alteration in some
                                form, by injected humour, or randomised words which don't look
                                even slightly believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't anything
                                embarrassing hidden in the middle of text.
                            </p>
                            <strong>Interaction design - Animation</strong>
                        </div>
                        <div
                            aria-labelledby="course-tab"
                            className="tab-pane fade"
                            id="course"
                            role="tabpanel"
                        >
                            <p>Course content goes here.</p>
                        </div>
                        <div
                            aria-labelledby="advisor-tab"
                            className="tab-pane fade"
                            id="advisor"
                            role="tabpanel"
                        >
                            <p>Advisor content goes here.</p>
                        </div>
                        <div
                            aria-labelledby="become-tab"
                            className="tab-pane fade"
                            id="become"
                            role="tabpanel"
                        >
                            <p>Become content goes here.</p>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <h2 className="text-center mb-4 fw-bold">
                        Choose The Best Package For your Learning
                    </h2>
                    <div className="row gy-4">
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100">
                                <img
                                    alt="CODE image"
                                    className="card-img-top rounded-top"
                                    src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"

                                />
                                <div className="card-body">
                                    <span className="badge bg-danger">DESIGN</span>
                                    <h5 className="card-title mt-2">Web Design</h5>
                                    <p className="card-text">12 Lessons</p>
                                    <p className="card-text">Beginner</p>
                                    <p className="card-text">
                                        Miracle courses for students about $82.00
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="text-muted">By Charlie</span>
                                        <span className="text-warning">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100">
                                <img
                                    alt="CODE image"
                                    className="card-img-top rounded-top"
                                    src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"

                                />
                                <div className="card-body">
                                    <span className="badge bg-success">DEVELOPMENT</span>
                                    <h5 className="card-title mt-2">Web Development</h5>
                                    <p className="card-text">20 Lessons</p>
                                    <p className="card-text">Intermediate</p>
                                    <p className="card-text">
                                        Foundation courses to understand $120.00
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="text-muted">By Michael</span>
                                        <span className="text-warning">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 shadow-sm h-100">
                                <img
                                    alt="CODE image"
                                    className="card-img-top rounded-top"
                                    src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"

                                />
                                <div className="card-body">
                                    <span className="badge bg-primary">MARKETING</span>
                                    <h5 className="card-title mt-2">Digital Marketing</h5>
                                    <p className="card-text">15 Lessons</p>
                                    <p className="card-text">Advanced</p>
                                    <p className="card-text">
                                        Miracle courses for students about $150.00
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="text-muted">By Sarah</span>
                                        <span className="text-warning">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light py-5">
                    <div className="container">
                        <h2 className="text-center mb-4 fw-bold">Client Testimonial</h2>
                        <div className="row gy-4">
                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-3">
                                            <img
                                                alt="CODE image"
                                                className="rounded-circle me-3"
                                                height={50}
                                                src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"

                                                width={50}
                                            />
                                            <div>
                                                <h5 className="card-title mb-0">Miranda Jon</h5>
                                                <span className="text-warning">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <p className="card-text">
                                            The best courses that I have ever taken. Very
                                            informative and well structured. Highly recommend to
                                            anyone looking to learn new skills.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card border-0 shadow-sm h-100">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center mb-3">
                                            <img
                                                alt="CODE image"
                                                className="rounded-circle me-3"
                                                height={50}
                                                src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"

                                                width={50}
                                            />
                                            <div>
                                                <h5 className="card-title mb-0">Miranda Jon</h5>
                                                <span className="text-warning">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <p className="card-text">
                                            The best courses that I have ever taken. Very
                                            informative and well structured. Highly recommend to
                                            anyone looking to learn new skills.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About