import React from "react";

type Props = {};

const Blog = () => {
    return (
        <div id="blog" className="mt-4 mt-xl-5">
            <div className="container py-4 py-xl-5">
                <button
                    className="btn btn-lg btn-outline-primary d-block mx-auto mb-3"
                    disabled
                >
                    Comment
                </button>
                <h1 className="text-start text-md-center fw-bold">
                    Leatest News & Blog
                </h1>
                <div className="row my-4 my-xl-5 align-items-top justify-content-between">
                    <div className="col-xl-7">
                        <div className="card bg-light shadow-lg">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUBj38GZzKOVIW1v9REUyjUnB-vT98GPQAw&s"
                                alt="NextJS"
                                className="d-block card-img-top mx-auto"
                                id="img-item1"
                                width="100%"
                                height="100%"
                            />
                            <div className="card-body px-4">
                                <h3 className="fw-bold my-3">
                                    It is a long established fact that a reader will be Standard
                                    Part
                                </h3>
                                <p className="card-text text-secondary">
                                    A wonderful serenity has taken possssion of my entire souing
                                    like these sweet morning spring whch enjoy with my whole heart I
                                    am alone, and feel the charm of existenceths spot whch was
                                    create For the bliss of souls like mineing am so happy my dear
                                    frend so absori bed in the exquste sens of mere. A wonderful
                                    serenity has taken posseson of my entire soung like these sweet
                                    mornngs spring whch enjoy …
                                </p>
                            </div>
                            <div className="card-footer">
                                <div className="row align-items-center">
                                    <div className="col-2">
                                        <img
                                            src="https://doodleipsum.com/200x200/avatar?bg=63C8D9&i=8f8802a6b20ab4b3237b1374a46c9434"
                                            height="80%"
                                            width="80%"
                                            className="d-block mx-auto rounded-circle"
                                            alt="Avatar"
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <h4>
                                            By: <span className="text-secondary">Mirnsdo Jons</span>
                                        </h4>
                                    </div>
                                    <div className="col-auto ms-auto">
                                        <button className="btn btn-outline-secondary me-2" disabled>
                                            <i className="fa-brands fa-facebook"></i>
                                        </button>
                                        <button className="btn btn-outline-secondary me-2" disabled>
                                            <i className="fa-brands fa-youtube"></i>
                                        </button>
                                        <button className="btn btn-outline-secondary me-2" disabled>
                                            <i className="fa-brands fa-instagram"></i>
                                        </button>
                                        <button className="btn btn-outline-secondary" disabled>
                                            <i className="fa-brands fa-twitter"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="card bg-light shadow-lg mb-4">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUBj38GZzKOVIW1v9REUyjUnB-vT98GPQAw&s"
                                alt="NextJS"
                                className="d-block card-img-top mx-auto"
                                id="img-item2"
                                width="100%"
                                height="100%"
                            />
                            <div className="card-body px-4">
                                <h3 className="fw-bold my-3">
                                    It is a long established fact that a reader will be Standard
                                    Part
                                </h3>
                            </div>
                        </div>
                        <div className="card bg-light shadow-lg">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUBj38GZzKOVIW1v9REUyjUnB-vT98GPQAw&s"
                                alt="NextJS"
                                className="d-block card-img-top mx-auto"
                                id="img-item2"
                                width="100%"
                                height="100%"
                            />
                            <div className="card-body px-4">
                                <h3 className="fw-bold my-3">
                                    It is a long established fact that a reader will be Standard
                                    Part
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
