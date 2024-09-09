import Lottie from "lottie-react";
import banner from "./banner.json";

const Banner = () => {

    return (
        <div id="banner" className="rounded-3 shadow-lg">
            <div className="row align-items-center py-4 mx-xl-5">
                <div className="col-xl">
                    <h5 className="fw-medium">EDUCATION SOLUTION</h5>
                    <h1 className="fw-bold">
                        Cloud-based LMS
                        Trusted by 1000+
                    </h1>
                    <h5>Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been</h5>
                    <button className="btn btn-outline-light btn-lg mt-4">View Course</button>
                </div>
                <div className="col-xl order-first order-xl-last">
                    <Lottie animationData={banner} loop height={400} className="rounded-4" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
