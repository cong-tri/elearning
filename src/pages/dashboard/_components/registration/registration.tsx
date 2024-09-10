import Lottie from "lottie-react";
import register from "./register.json";
const Registration = () => {
    return (
        <div id="registration" className="container my-4 my-xl-5">
            <button className="btn btn-lg btn-outline-primary d-block mx-md-auto mb-3" disabled>
                Registration
            </button>
            <h1 className="fw-bold mb-4 text-start text-md-center">
                Register Your Account Get free access to{" "}
                <span className="text-warning">60000</span> online course
            </h1>
            <h5 className="fw-bold text-center">
                Learn Something new & Build Your Career From Anywhere In The World
            </h5>
            <div className="row justify-content-between align-items-center">
                <div className="col-xl-6">
                    <Lottie animationData={register} loop height={250} />
                </div>
                <div className="col-xl-5">
                    <div className="shadow-lg p-3 p-xl-4 rounded-3 text-start">
                        <h4 className="fw-bold mb-3 mb-xl-4">Fill Your Registration</h4>
                        <form action="">
                            <div className="form-floating mb-3 mb-xl-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="frm-name"
                                    placeholder=""
                                />
                                <label htmlFor="frm-name">Your Name</label>
                            </div>
                            <div className="row mb-3 mb-xl-4 row-cols-1 row-cols-md-2 gy-3">
                                <div className="col">
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="frm-email"
                                            placeholder=""
                                        />
                                        <label htmlFor="frm-email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="frm-phone"
                                            placeholder=""
                                        />
                                        <label htmlFor="frm-phone">Your Phone</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-floating mb-3 mb-xl-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="frm-address"
                                    placeholder=""
                                />
                                <label htmlFor="frm-address">Your Address</label>
                            </div>
                            <div className="form-floating mb-3 mb-xl-4">
                                <textarea
                                    className="form-control"
                                    id="frm-comment"
                                    maxLength={250}
                                    rows={5}
                                ></textarea>
                                <label htmlFor="frm-comment">Your Comment</label>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-lg btn-outline-primary">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
