import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/user/breadcrumb";

const ZoomPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <Breadcrumb data={{ label: "Zoom", path: "Zoom" }} />
            <section className="container my-4 my-xl-5">
                <div className="row row-cols-1 row-col-md-2 row-cols-xl-3 gy-4">
                    <div
                        className="col"
                        role="button"
                        onClick={() => navigate("/zoom/1")}
                    >
                        <div className="card">
                            <img
                                src="https://i.ibb.co/K2R2685/img2.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body h-100">
                                <h5 className="card-title">Executive Assistant Meeting</h5>
                                <p className="card-text">Meeting Time: 6.00 PM</p>
                                <p className="card-text">Meeting ID: 952428993687</p>
                            </div>
                            <div className="card-footer">
                                <a
                                    href="/layoutdonmua/indexdonmua.html"
                                    className="btn btn-primary"
                                >
                                    Join Meeting
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col"
                        role="button"
                        onClick={() => navigate("/zoom/1")}
                    >
                        <div className="card">
                            <img
                                src="https://i.ibb.co/K2R2685/img2.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body h-100">
                                <h5 className="card-title">Executive Assistant Meeting</h5>
                                <p className="card-text">Meeting Time: 6.00 PM</p>
                                <p className="card-text">Meeting ID: 952428993687</p>
                            </div>
                            <div className="card-footer">
                                <a
                                    href="/layoutdonmua/indexdonmua.html"
                                    className="btn btn-primary"
                                >
                                    Join Meeting
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col"
                        role="button"
                        onClick={() => navigate("/zoom/1")}
                    >
                        <div className="card">
                            <img
                                src="https://i.ibb.co/K2R2685/img2.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body h-100">
                                <h5 className="card-title">Executive Assistant Meeting</h5>
                                <p className="card-text">Meeting Time: 6.00 PM</p>
                                <p className="card-text">Meeting ID: 952428993687</p>
                            </div>
                            <div className="card-footer">
                                <a
                                    href="/layoutdonmua/indexdonmua.html"
                                    className="btn btn-primary"
                                >
                                    Join Meeting
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col"
                        role="button"
                        onClick={() => navigate("/zoom/1")}
                    >
                        <div className="card">
                            <img
                                src="https://i.ibb.co/K2R2685/img2.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body h-100">
                                <h5 className="card-title">Executive Assistant Meeting</h5>
                                <p className="card-text">Meeting Time: 6.00 PM</p>
                                <p className="card-text">Meeting ID: 952428993687</p>
                            </div>
                            <div className="card-footer">
                                <a
                                    href="/layoutdonmua/indexdonmua.html"
                                    className="btn btn-primary"
                                >
                                    Join Meeting
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col"
                        role="button"
                        onClick={() => navigate("/zoom/1")}
                    >
                        <div className="card">
                            <img
                                src="https://i.ibb.co/K2R2685/img2.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body h-100">
                                <h5 className="card-title">Executive Assistant Meeting</h5>
                                <p className="card-text">Meeting Time: 6.00 PM</p>
                                <p className="card-text">Meeting ID: 952428993687</p>
                            </div>
                            <div className="card-footer">
                                <a
                                    href="/layoutdonmua/indexdonmua.html"
                                    className="btn btn-primary"
                                >
                                    Join Meeting
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col"
                        role="button"
                        onClick={() => navigate("/zoom/1")}
                    >
                        <div className="card">
                            <img
                                src="https://i.ibb.co/K2R2685/img2.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body h-100">
                                <h5 className="card-title">Executive Assistant Meeting</h5>
                                <p className="card-text">Meeting Time: 6.00 PM</p>
                                <p className="card-text">Meeting ID: 952428993687</p>
                            </div>
                            <div className="card-footer">
                                <a
                                    href="/layoutdonmua/indexdonmua.html"
                                    className="btn btn-primary"
                                >
                                    Join Meeting
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ZoomPage;
