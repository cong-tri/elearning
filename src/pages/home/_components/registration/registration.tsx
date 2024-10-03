import Lottie from "lottie-react";
import register from "./register.json";
import Input from "../../../../components/input";
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
                    <div className="shadow-lg p-3 p-xl-4 bg-white rounded-3 text-start">
                        <h4 className="fw-bold mb-3 mb-xl-4">Fill Your Registration</h4>
                        <form action="" className="">
                            <Input id="frm-name" label="Your Name" type="text" classnameDiv="form-floating mb-4"
                                classnameInput="form-control form-control-lg" />
                            <div className="row row-cols-1 row-cols-md-2 gy-3">
                                <div className="col">
                                    <Input id="frm-email" label="Your Email" type="email" classnameDiv="form-floating mb-4"
                                        classnameInput="form-control form-control-lg" />
                                </div>
                                <div className="col">
                                    <Input id="frm-phone" label="Your Phone" type="tel" classnameDiv="form-floating mb-4"
                                        classnameInput="form-control form-control-lg" />
                                </div>
                            </div>
                            <Input id="frm-address" label="Your Address" type="text" classnameDiv="form-floating mb-4"
                                classnameInput="form-control form-control-lg" />
                            <Input id="frm-comment" label="Your Comment" classnameDiv="form-floating mb-4"
                                classnameInput="form-control form-control-lg h-100" rows={5} />
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
