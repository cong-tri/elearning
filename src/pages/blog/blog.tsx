import { useNavigate } from "react-router-dom";
import Input from "../../components/input";
import Breadcrumb from "../../components/user/breadcrumb";

const Blog = () => {
    const navigate = useNavigate();
    const redirectToBlogDetail = () => {
        navigate("/blog/1");
    };
    return (
        <>
            <Breadcrumb data={{ label: "Blog", path: "Blog" }} />
            <div className="container my-4 my-xl-5">
                <div className="row justify-content-between">
                    <div className="col-xl-8">
                        <div className="bg-white shadow-lg rounded-4 mb-4">
                            <div className="card position-relative">
                                <img
                                    alt="code"
                                    className="card-img-top img-fluid"
                                    src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                    height={"100%"}
                                    width={"100%"}
                                />
                                <div className="position-absolute top-0 end-0 bg-primary p-xl-3 mt-xl-3 me-xl-3 rounded-4">
                                    <span className="text-white fw-medium fs-5">24 Feb</span>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title fw-bold">
                                        Here at First Baptist Cape Coral we believe!
                                    </h2>
                                    <p className="text-secondary my-3">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Impedit necessitatibus ut quas blanditiis est, accusamus
                                        perspiciatis numquam nihil quod asperiores.
                                    </p>
                                    <button
                                        className="btn btn-outline-primary"
                                        type="button"
                                        onClick={redirectToBlogDetail}
                                    >
                                        READ MORE
                                    </button>
                                </div>
                                <div className="card-footer py-4">
                                    <div className="hstack gap-3">
                                        <div>
                                            <span
                                                className="me-3 text-secondary link-primary"
                                                role="button"
                                            >
                                                <i className="fa-solid fa-user-tie"></i> Dao Cong Tri
                                            </span>
                                            <span
                                                className="me-3 text-secondary link-primary"
                                                role="button"
                                            >
                                                <i className="fa-solid fa-comments"></i> 0 comment
                                            </span>
                                        </div>
                                        <div className="ms-auto">
                                            <button className="btn btn-outline-primary" type="button">
                                                <i className="fa-solid fa-share-nodes"></i>
                                            </button>
                                            <button
                                                className="btn btn-outline-primary ms-3"
                                                type="button"
                                            >
                                                <i className="fa-solid fa-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-4 mb-4">
                            <div className="card position-relative">
                                <img
                                    alt="code"
                                    className="card-img-top img-fluid"
                                    src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                    height={"100%"}
                                    width={"100%"}
                                />
                                <div className="position-absolute top-0 end-0 bg-primary p-xl-3 mt-xl-3 me-xl-3 rounded-4">
                                    <span className="text-white fw-medium fs-5">24 Feb</span>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title fw-bold">
                                        Here at First Baptist Cape Coral we believe!
                                    </h2>
                                    <p className="text-secondary my-3">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Impedit necessitatibus ut quas blanditiis est, accusamus
                                        perspiciatis numquam nihil quod asperiores.
                                    </p>
                                    <button
                                        className="btn btn-outline-primary"
                                        type="button"
                                        onClick={redirectToBlogDetail}
                                    >
                                        READ MORE
                                    </button>
                                </div>
                                <div className="card-footer py-4">
                                    <div className="hstack gap-3">
                                        <div>
                                            <span
                                                className="me-3 text-secondary link-primary"
                                                role="button"
                                            >
                                                <i className="fa-solid fa-user-tie"></i> Dao Cong Tri
                                            </span>
                                            <span
                                                className="me-3 text-secondary link-primary"
                                                role="button"
                                            >
                                                <i className="fa-solid fa-comments"></i> 0 comment
                                            </span>
                                        </div>
                                        <div className="ms-auto">
                                            <button className="btn btn-outline-primary" type="button">
                                                <i className="fa-solid fa-share-nodes"></i>
                                            </button>
                                            <button
                                                className="btn btn-outline-primary ms-3"
                                                type="button"
                                            >
                                                <i className="fa-solid fa-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-4 mb-4">
                            <div className="card position-relative">
                                <img
                                    alt="code"
                                    className="card-img-top img-fluid"
                                    src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                    height={"100%"}
                                    width={"100%"}
                                />
                                <div className="position-absolute top-0 end-0 bg-primary p-xl-3 mt-xl-3 me-xl-3 rounded-4">
                                    <span className="text-white fw-medium fs-5">24 Feb</span>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title fw-bold">
                                        Here at First Baptist Cape Coral we believe!
                                    </h2>
                                    <p className="text-secondary my-3">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Impedit necessitatibus ut quas blanditiis est, accusamus
                                        perspiciatis numquam nihil quod asperiores.
                                    </p>
                                    <button className="btn btn-outline-primary" type="button">
                                        READ MORE
                                    </button>
                                </div>
                                <div className="card-footer py-4">
                                    <div className="hstack gap-3">
                                        <div>
                                            <span
                                                className="me-3 text-secondary link-primary"
                                                role="button"
                                            >
                                                <i className="fa-solid fa-user-tie"></i> Dao Cong Tri
                                            </span>
                                            <span
                                                className="me-3 text-secondary link-primary"
                                                role="button"
                                            >
                                                <i className="fa-solid fa-comments"></i> 0 comment
                                            </span>
                                        </div>
                                        <div className="ms-auto">
                                            <button className="btn btn-outline-primary" type="button">
                                                <i className="fa-solid fa-share-nodes"></i>
                                            </button>
                                            <button
                                                className="btn btn-outline-primary ms-3"
                                                type="button"
                                            >
                                                <i className="fa-solid fa-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-4 mb-4">
                            <div className="card position-relative">
                                <img
                                    alt="code"
                                    className="card-img-top img-fluid"
                                    src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                    height={"100%"}
                                    width={"100%"}
                                />
                                <div className="position-absolute top-0 end-0 bg-primary p-xl-3 mt-xl-3 me-xl-3 rounded-4">
                                    <span className="text-white fw-medium fs-5">24 Feb</span>
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title fw-bold">
                                        Here at First Baptist Cape Coral we believe!
                                    </h2>
                                    <p className="text-secondary my-3">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Impedit necessitatibus ut quas blanditiis est, accusamus
                                        perspiciatis numquam nihil quod asperiores.
                                    </p>
                                    <button className="btn btn-outline-primary" type="button">
                                        READ MORE
                                    </button>
                                </div>
                                <div className="card-footer py-4">
                                    <div className="hstack gap-3">
                                        <div>
                                            <span
                                                className="me-3 text-secondary link-primary"
                                                role="button"
                                            >
                                                <i className="fa-solid fa-user-tie"></i> Dao Cong Tri
                                            </span>
                                            <span
                                                className="me-3 text-secondary link-primary"
                                                role="button"
                                            >
                                                <i className="fa-solid fa-comments"></i> 0 comment
                                            </span>
                                        </div>
                                        <div className="ms-auto">
                                            <button className="btn btn-outline-primary" type="button">
                                                <i className="fa-solid fa-share-nodes"></i>
                                            </button>
                                            <button
                                                className="btn btn-outline-primary ms-3"
                                                type="button"
                                            >
                                                <i className="fa-solid fa-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="bg-white shadow-lg rounded-3 p-xl-5 mb-4">
                            <div className="text-center">
                                <img
                                    alt="CODE"
                                    className="img-fluid rounded-circle mx-auto mb-4"
                                    height={"100%"}
                                    src="https://i.pravatar.cc/100"
                                // width={"100%"}
                                />
                                <h4 className="fw-bold">Ronald D. Willian</h4>
                                <span className="text-secondary fs-6">Content Writer</span>
                                <p className="text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.Veritatis distinctio suscipit reprehenderit atque
                                </p>
                                <div className="mt-3">
                                    <button
                                        className="btn btn-outline-secondary me-2"
                                        type="button"
                                    >
                                        <i className="fa-brands fa-facebook"></i>
                                    </button>
                                    <button
                                        className="btn btn-outline-secondary me-2"
                                        type="button"
                                    >
                                        <i className="fa-brands fa-youtube"></i>
                                    </button>
                                    <button
                                        className="btn btn-outline-secondary me-2"
                                        type="button"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </button>
                                    <button className="btn btn-outline-secondary" type="button">
                                        <i className="fa-brands fa-twitter"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-3 p-xl-5 mb-4">
                            <h3 className="fw-bold mb-3">Search Here</h3>
                            <div className="input-group">
                                <input
                                    type="search"
                                    className="form-control form-control-lg"
                                    placeholder="Search Blog"
                                    aria-describedby="button-addon2"
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    id="button-addon2"
                                >
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-3 p-xl-5 mb-4">
                            <h3 className="fw-bold mb-3">Categories</h3>
                            <ul>
                                <li className="mb-2">Lorem ipsum dolor sit amet.</li>
                                <li className="mb-2">Lorem ipsum dolor sit amet.</li>
                                <li className="mb-2">Lorem ipsum dolor sit amet.</li>
                                <li className="mb-2">Lorem ipsum dolor sit amet.</li>
                                <li className="mb-2">Lorem ipsum dolor sit amet.</li>
                            </ul>
                        </div>
                        <div className="bg-white shadow-lg rounded-3 p-xl-5 mb-4">
                            <h3 className="fw-bold mb-3">Recent Post</h3>
                            <div className="d-flex align-items-center mb-4" role="button">
                                <div className="me-3">
                                    <img
                                        src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                        width={120}
                                        height={"100%"}
                                        className="img-fluid"
                                        alt="Code"
                                    />
                                </div>
                                <div>
                                    <span className="fs-6 text-secondary">
                                        01 23 December 2024
                                    </span>
                                    <p className="text-black fw-bold fs-6">
                                        Lorem ipsum dolor sit.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4" role="button">
                                <div className="me-3">
                                    <img
                                        src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                        width={120}
                                        height={"100%"}
                                        className="img-fluid"
                                        alt="Code"
                                    />
                                </div>
                                <div>
                                    <span className="fs-6 text-secondary">
                                        01 23 December 2024
                                    </span>
                                    <p className="text-black fw-bold fs-6">
                                        Lorem ipsum dolor sit.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center" role="button">
                                <div className="me-3">
                                    <img
                                        src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                        width={120}
                                        height={"100%"}
                                        className="img-fluid"
                                        alt="Code"
                                    />
                                </div>
                                <div>
                                    <span className="fs-6 text-secondary">
                                        01 23 December 2024
                                    </span>
                                    <p className="text-black fw-bold fs-6">
                                        Lorem ipsum dolor sit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-3 p-xl-5 mb-4">
                            <h3 className="fw-bold mb-3">Get in Touch</h3>
                            <form>
                                <Input
                                    id="name"
                                    label="Enter Name*"
                                    type="text"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control"
                                />
                                <Input
                                    id="email"
                                    label="Enter Email*"
                                    type="email"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control"
                                />
                                <Input
                                    id="message"
                                    label="Enter Message"
                                    rows={4}
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control h-100"
                                    maxlength={250}
                                />
                                <button className="w-100 btn btn-primary btn-lg" type="button">
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>
                        <div className="bg-white shadow-lg rounded-3 p-xl-5">
                            <h3 className="fw-bold mb-3">Follow Us</h3>
                            <div className="">
                                <button
                                    className="btn btn-outline-secondary me-3"
                                    type="button"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </button>
                                <button
                                    className="btn btn-outline-secondary me-3"
                                    type="button"
                                >
                                    <i className="fab fa-twitter"></i>
                                </button>
                                <button
                                    className="btn btn-outline-secondary me-3"
                                    type="button"
                                >
                                    <i className="fab fa-instagram"></i>
                                </button>
                                <button
                                    className="btn btn-outline-secondary me-3"
                                    type="button"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
