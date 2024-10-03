import Breadcrumb from "../../components/user/breadcrumb";
import Login from "./_components/login";
import Register from "./_components/register";

const Authen = () => {
    return (
        <>
            <Breadcrumb data={{ label: "Authenticate", path: "Authenticate" }} />
            <div id="authen" className="container my-5 py-5">
                <div>
                    <ul
                        className="nav nav-pills justify-content-center mb-5"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item me-3" role="presentation">
                            <button
                                className="authen-btn-tab nav-link active shadow-lg py-3 fs-2"
                                id="pills-login-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-login"
                                type="button"
                                role="tab"
                                aria-controls="pills-login"
                                aria-selected="true"
                            >
                                Login
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="authen-btn-tab nav-link shadow-lg shadow-lg py-3 fs-2"
                                id="pills-register-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-register"
                                type="button"
                                role="tab"
                                aria-controls="pills-register"
                                aria-selected="false"
                            >
                                Register
                            </button>
                        </li>
                    </ul>
                    <div className="row align-items-center justify-content-center g-0">
                        <div className="col-xl-6 shadow-lg bg-white rounded-3 p-4 p-xl-5">
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-login"
                                    role="tabpanel"
                                    aria-labelledby="pills-login-tab"
                                    tabIndex={0}
                                >
                                    <Login />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-register"
                                    role="tabpanel"
                                    aria-labelledby="pills-register-tab"
                                    tabIndex={0}
                                >
                                    <Register />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Authen;
