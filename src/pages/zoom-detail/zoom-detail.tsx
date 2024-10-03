import Breadcrumb from "../../components/user/breadcrumb";

const ZoomDetail = () => {
    return (
        <>
            <Breadcrumb data={{ label: "Zoom Detail", path: "Zoom Detail" }} />
            <section className="container my-4 my-xl-5">
                <div className="">
                    <img
                        alt="Video thumbnail"
                        height={300}
                        width={"100%"}
                        className="img-fluid"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVUmp8-o0_8NuhNpq9jNUUVS8-C_FbSoMWg&s"
                    />
                </div>
                <div className="row mt-4">
                    <div className="col-xl-8">
                        <p className="text-secondary fs-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            vulputate vestibulum Phasellus rhoncus, dolor eget viverra
                            pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu
                            lacus. Vestibulum non justo consectetur, cursus ante, tincidunt
                            sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec
                            enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et
                            bibendum dui. Aenean consequat pulvinar luctus
                        </p>
                        <p className="text-secondary fs-5 my-4">
                            We have covered many special events such as fireworks, fairs,
                            parades, races, walks, awards ceremonies, fashion shows, sporting
                            events, and even a memorial service.
                        </p>
                        <p className="text-secondary fs-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            vulputate vestibulum Phasellus rhoncus, dolor eget viverra
                            pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu
                            lacus. Vestibulum non justo consectetur, cursus ante, tincidunt
                            sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec
                            enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et
                            bibendum dui. Aenean consequat pulvinar luctus.
                        </p>
                        <div className="mt-4">
                            <h3>Why Search Is Important?</h3>
                            <ul className="list-group">
                                <li>
                                    <i className="fas fa-check-circle text-primary" />
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                </li>
                                <li>
                                    <i className="fas fa-check-circle text-primary" />
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                </li>
                                <li>
                                    <i className="fas fa-check-circle text-primary" />
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                </li>
                                <li>
                                    <i className="fas fa-check-circle text-primary" />
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 bg-white p-4 rounded-3">
                        <div className="details mt-2">
                            <div className="hstack gap-3 border-bottom py-4">
                                <div>
                                    <p className="fs-5">
                                        <i className="fas fa-user" />
                                        <span className="ms-2">Instructor:</span>
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <p className="fs-5 text-secondary fw-bold">
                                        D. William
                                    </p>
                                </div>
                            </div>
                            <div className="hstack gap-3 border-bottom py-4">
                                <div>
                                    <p className="fs-5">
                                        <i className="fas fa-clock"></i>
                                        <span className="ms-2">Time:</span>
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <p className="fs-5 text-secondary fw-bold">
                                        3.00PM
                                    </p>
                                </div>
                            </div>
                            <div className="hstack gap-3 border-bottom py-4">
                                <div>
                                    <p className="fs-5">
                                        <i className="fas fa-calendar"></i>
                                        <span className="ms-2">Date:</span>
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <p className="fs-5 text-secondary fw-bold">
                                        10/06/2024
                                    </p>
                                </div>
                            </div>
                            <div className="hstack gap-3 border-bottom py-4">
                                <div>
                                    <p className="fs-5">
                                        <i className="fas fa-globe"></i>
                                        <span className="ms-2">Time Zone:</span>
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <p className="fs-5 text-secondary fw-bold">
                                        +9
                                    </p>
                                </div>
                            </div>
                            <div className="hstack gap-3 border-bottom py-4">
                                <div>
                                    <p className="fs-5">
                                        <i className="fas fa-calendar"></i>
                                        <span className="ms-2">Enrolled:</span>
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <p className="fs-5 text-secondary fw-bold">
                                        65 students
                                    </p>
                                </div>
                            </div>
                            <div className="hstack gap-3 border-bottom py-4">
                                <div>
                                    <p className="fs-5">
                                        <i className="fas fa-language"></i>
                                        <span className="ms-2">Language:</span>
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <p className="fs-5 text-secondary fw-bold">
                                        English
                                    </p>
                                </div>
                            </div>
                            <div className="hstack gap-3 border-bottom py-4">
                                <div>
                                    <p className="fs-5">
                                        <i className="fas fa-certificate"></i>
                                        <span className="ms-2">Certificate:</span>
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <p className="fs-5 text-secondary fw-bold">
                                        Yes
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-primary btn-lg w-100">Sign Up Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ZoomDetail;
