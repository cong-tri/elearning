import FormReviews from "./form-review";

const Navtabs = () => {
    return (
        <>
            <ul
                className="nav nav-pills my-4 row row-cols-1 row-cols-xl-4"
                id="pills-tab"
                role="tablist"
            >
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link active w-100 py-3"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                    >
                        <i className="fa-solid fa-book"></i>{" "}
                        <span className="ms-2">Curriculum</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link w-100 py-3"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                    >
                        <i className="fa-solid fa-clipboard"></i>{" "}
                        <span className="ms-2">Description</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link w-100 py-3"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                    >
                        <i className="fa-solid fa-star"></i>{" "}
                        <span className="ms-2">Review</span>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className="nav-link w-100 py-3"
                        id="pills-disabled-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-disabled"
                        type="button"
                        role="tab"
                        aria-controls="pills-disabled"
                        aria-selected="false"
                    >
                        <i className="fa-solid fa-user-tie"></i>{" "}
                        <span className="ms-2">Instructor</span>
                    </button>
                </li>
            </ul>
            <div className="tab-content px-4 py-3" id="pills-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabIndex={0}
                >
                    <div>
                        <div
                            className="accordion accordion-flush mb-4"
                            id="accordionFlushExample"
                        >
                            <div className="accordion-item border shadow-lg">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed fs-4 fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne"
                                    >
                                        Intro Course content
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOne"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="accordion accordion-flush mb-4"
                            id="accordionFlushExample1"
                        >
                            <div className="accordion-item border shadow-lg">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed fs-4 fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                    >
                                        Intro Course content
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseTwo"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample1"
                                >
                                    <div className="accordion-body">
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="accordion accordion-flush mb-4"
                            id="accordionFlushExample2"
                        >
                            <div className="accordion-item border shadow-lg">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed fs-4 fw-bold"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                    >
                                        Intro Course content
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseThree"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample2"
                                >
                                    <div className="accordion-body">
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-bottom py-3">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <h6>
                                                        <i className="fa-brands fa-youtube"></i> Video:{" "}
                                                        <span className="text-secondary">
                                                            Lorem ipsum dolor sit amet.
                                                        </span>
                                                    </h6>
                                                </div>
                                                <div className="ms-auto">
                                                    <button type="button" className="btn me-3" disabled>
                                                        <i className="fa-regular fa-clock"></i>
                                                        <span className="ms-2">22 minutes</span>
                                                    </button>
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa-solid fa-eye"></i>
                                                        <span className="ms-2">Preview</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabIndex={0}
                >
                    <h3 className="fw-bold mb-4">Experience is over the world visit</h3>
                    <p className="text-secondary mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium,
                        dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus.
                        Vestibulum non justo consectetur, cursus ante, tincidunt sapien.
                        Nulla quis diam sit amet turpis interdum accumsan quis nec enim.
                        Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum
                        dui. Aenean consequat pulvinar luctus
                    </p>
                    <p className="text-secondary mb-3">
                        We have covered many special events such as fireworks, fairs,
                        parades, races, walks, awards ceremonies, fashion shows, sporting
                        events, and even a memorial service.
                    </p>
                    <p className="text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium,
                        dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus.
                        Vestibulum non justo consectetur, cursus ante, tincidunt sapien.
                        Nulla quis diam sit amet turpis interdum accumsan quis nec enim.
                        Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum
                        dui. Aenean consequat pulvinar luctus.
                    </p>
                </div>
                <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                    tabIndex={0}
                >
                    <div className="row g-0 justify-content-between">
                        <div className="col-xl-3 h-100">
                            <div className="bg-white shadow-lg p-3 text-center h-100">
                                <h1 className="fw-bolder display-1">5.0</h1>
                                <span>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                </span>
                                <p className="fw-medium">(20 reviewers)</p>
                            </div>
                        </div>
                        <div className="col-xl-9 ps-4">
                            <div>
                                <div className="row g-0 mb-4 align-items-center">
                                    <div className="col-auto">
                                        <span>
                                            5 <i className="fa-solid fa-star text-warning"></i>
                                        </span>
                                    </div>
                                    <div
                                        className="progress col mx-3"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow={100}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar bg-warning"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <span>10</span>
                                    </div>
                                </div>
                                <div className="row g-0 mb-4 align-items-center">
                                    <div className="col-auto">
                                        <span>
                                            4 <i className="fa-solid fa-star text-warning"></i>
                                        </span>
                                    </div>
                                    <div
                                        className="progress col mx-3"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow={75}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar bg-warning"
                                            style={{ width: "75%" }}
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <span>5</span>
                                    </div>
                                </div>
                                <div className="row g-0 mb-4 align-items-center">
                                    <div className="col-auto">
                                        <span>
                                            3 <i className="fa-solid fa-star text-warning"></i>
                                        </span>
                                    </div>
                                    <div
                                        className="progress col mx-3"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow={50}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar bg-warning"
                                            style={{ width: "50%" }}
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <span>3</span>
                                    </div>
                                </div>
                                <div className="row g-0 mb-4 align-items-center">
                                    <div className="col-auto">
                                        <span>
                                            2 <i className="fa-solid fa-star text-warning"></i>
                                        </span>
                                    </div>
                                    <div
                                        className="progress col mx-3"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow={25}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar bg-warning"
                                            style={{ width: "25%" }}
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <span>2</span>
                                    </div>
                                </div>
                                <div className="row g-0 mb-4 align-items-center">
                                    <div className="col-auto">
                                        <span>
                                            1 <i className="fa-solid fa-star text-warning"></i>
                                        </span>
                                    </div>
                                    <div
                                        className="progress col mx-3"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow={15}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar bg-warning"
                                            style={{ width: "15%" }}
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <span>1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-4">
                        <h4 className="fw-bold mb-4">Customer Reviews</h4>
                        <div className="row g-0 justify-content-between align-items-center border-top border-bottom py-4 h-100">
                            <div className="col-xl-2">
                                <img
                                    src="https://i.pravatar.cc/100"
                                    className="img-fluid rounded-circle"
                                    width={"80%"}
                                    height={"80%"}
                                    alt="Avatar"
                                />
                            </div>
                            <div className="col-xl-10">
                                <div className="hstack gap-3">
                                    <div>
                                        <h4 className="fw-bold">Adam Smith</h4>
                                    </div>
                                    <div className="ms-auto">
                                        <button
                                            className="btn btn-outline-primary rounded-4"
                                            type="button"
                                        >
                                            September 2, 2024
                                        </button>
                                    </div>
                                </div>
                                <span>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                </span>
                                <p className="mt-2 text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Doloribus, omnis fugit corporis iste magnam ratione.
                                </p>
                            </div>
                        </div>
                        <div className="row g-0 justify-content-between align-items-center border-top border-bottom py-4 h-100">
                            <div className="col-xl-2">
                                <img
                                    src="https://i.pravatar.cc/100"
                                    className="img-fluid rounded-circle"
                                    width={"80%"}
                                    height={"80%"}
                                    alt="Avatar"
                                />
                            </div>
                            <div className="col-xl-10">
                                <div className="hstack gap-3">
                                    <div>
                                        <h4 className="fw-bold">Adam Smith</h4>
                                    </div>
                                    <div className="ms-auto">
                                        <button
                                            className="btn btn-outline-primary rounded-4"
                                            type="button"
                                        >
                                            September 2, 2024
                                        </button>
                                    </div>
                                </div>
                                <span>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                </span>
                                <p className="mt-2 text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Doloribus, omnis fugit corporis iste magnam ratione.
                                </p>
                            </div>
                        </div>
                        <div className="row g-0 justify-content-between align-items-center border-top border-bottom py-4 h-100">
                            <div className="col-xl-2">
                                <img
                                    src="https://i.pravatar.cc/100"
                                    className="img-fluid rounded-circle"
                                    width={"80%"}
                                    height={"80%"}
                                    alt="Avatar"
                                />
                            </div>
                            <div className="col-xl-10">
                                <div className="hstack gap-3">
                                    <div>
                                        <h4 className="fw-bold">Adam Smith</h4>
                                    </div>
                                    <div className="ms-auto">
                                        <button
                                            className="btn btn-outline-primary rounded-4"
                                            type="button"
                                        >
                                            September 2, 2024
                                        </button>
                                    </div>
                                </div>
                                <span>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                </span>
                                <p className="mt-2 text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Doloribus, omnis fugit corporis iste magnam ratione.
                                </p>
                            </div>
                        </div>
                        <div className="row g-0 justify-content-between align-items-center border-top border-bottom py-4 h-100">
                            <div className="col-xl-2">
                                <img
                                    src="https://i.pravatar.cc/100"
                                    className="img-fluid rounded-circle"
                                    width={"80%"}
                                    height={"80%"}
                                    alt="Avatar"
                                />
                            </div>
                            <div className="col-xl-10">
                                <div className="hstack gap-3">
                                    <div>
                                        <h4 className="fw-bold">Adam Smith</h4>
                                    </div>
                                    <div className="ms-auto">
                                        <button
                                            className="btn btn-outline-primary rounded-4"
                                            type="button"
                                        >
                                            September 2, 2024
                                        </button>
                                    </div>
                                </div>
                                <span>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                    <i className="fa-solid fa-star text-warning"></i>
                                </span>
                                <p className="mt-2 text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Doloribus, omnis fugit corporis iste magnam ratione.
                                </p>
                            </div>
                        </div>
                    </div>
                    <FormReviews />
                </div>
                <div
                    className="tab-pane fade"
                    id="pills-disabled"
                    role="tabpanel"
                    aria-labelledby="pills-disabled-tab"
                    tabIndex={0}
                >
                    <div className="row g-0 justify-content-between align-items-center">
                        <div className="col-xl-2">
                            <img
                                src="https://i.pravatar.cc/100"
                                className="img-fluid rounded-circle"
                                width={"80%"}
                                height={"80%"}
                                alt="Avatar"
                            />
                        </div>
                        <div className="col-xl-10">
                            <h4 className="fw-bold">Adam Smith</h4>
                            <span className="fs-6 text-secondary my-4">
                                Blogger/Photographer
                            </span>
                            <p className="text-secondary fs-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Doloribus, omnis fugit corporis iste magnam ratione.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navtabs;
