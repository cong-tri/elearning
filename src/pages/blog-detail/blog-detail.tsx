import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../../components/input";
import Breadcrumb from "../../components/user/breadcrumb";
import { IBlogs } from "../../types/types";
import { MainContext } from "../../context/main-provider";

const BlogDetail = () => {
    const { id } = useParams<{ id: string }>();

    const { data } = useContext(MainContext);
    const [detail, setDetail] = useState<IBlogs>();

    useEffect(() => {
        if (!data?.blogs) return;

        const detail = data.blogs.filter((items) => {
            return items.id === id;
        });
        console.log(detail);

        setDetail(detail[0]);
    }, [data, id]);
    return (
        <>
            <Breadcrumb data={{ label: "Blog Detail", path: "Blog Detail" }} />
            <div className="container my-4 my-xl-5">
                <div className="row justify-content-between">
                    <div className="col-xl-8">
                        <div className="bg-white p-4 rounded shadow-sm">
                            <div className="text-center mb-4">
                                <img
                                    alt="CODE"
                                    className="img-fluid"
                                    height={400}
                                    src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                    width={1300}
                                />
                            </div>
                            <h1>{detail?.title}</h1>
                            <p>
                                {detail?.content.content_first}
                            </p>
                            <p>
                                {detail?.content.content_second}
                            </p>
                            <h3>{detail?.label.label_first}</h3>
                            <p>
                                {detail?.content.content_third}
                            </p>
                            <div className="row mb-4 align-items-center">
                                <div className="col-md-4">
                                    <img
                                        alt="CODE"
                                        className="img-fluid"
                                        height={250}
                                        src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                        width={400}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <h4>Why research is important?</h4>
                                    <ul className="list-unstyled">
                                        <li>
                                            <i className="fas fa-check text-primary me-2"></i>
                                            Lorem Ipsum is simply dummying text of the printing and
                                            typesetting industry most of the standard.
                                        </li>
                                        <li>
                                            <i className="fas fa-check text-primary me-2"></i>
                                            Lorem Ipsum is simply dummying text of the printing and
                                            typesetting industry most of the standard.
                                        </li>
                                        <li>
                                            <i className="fas fa-check text-primary me-2"></i>
                                            Lorem Ipsum is simply dummying text of the printing and
                                            typesetting industry most of the standard.
                                        </li>
                                        <li>
                                            <i className="fas fa-check text-primary me-2"></i>
                                            Lorem Ipsum is simply dummying text of the printing and
                                            typesetting industry most of the standard.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h3>{detail?.label.label_second}</h3>
                            <p>
                                We have covered many special events such as fireworks, fairs,
                                parades, races, walks, awards ceremonies, fashion shows,
                                sporting events, and even a memorial service
                            </p>
                            <p>
                                {detail?.content.content_four}
                            </p>
                            <hr />
                            <div className="row mb-3">
                                <div className="col-12 col-md-6 mb-2 mb-md-0">
                                    <div className="d-flex flex-wrap">
                                        <span className="fw-bold me-2">Tag</span>
                                        <a className="btn btn-primary btn-sm me-2 mb-2" href="#">
                                            Business
                                        </a>
                                        <a className="btn btn-primary btn-sm me-2 mb-2" href="#">
                                            DESIGN
                                        </a>
                                        <a className="btn btn-primary btn-sm me-2 mb-2" href="#">
                                            APPS
                                        </a>
                                        <a className="btn btn-primary btn-sm mb-2" href="#">
                                            DATA
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 text-md-end">
                                    <span className="fw-bold">Share</span>
                                    <a className="btn btn-outline-primary btn-sm ms-2" href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a className="btn btn-outline-primary btn-sm ms-2" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="btn btn-outline-primary btn-sm ms-2" href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="comment-form">
                                <h3 className="mb-4">Write your comment</h3>
                                <form>
                                    <div className="row row-cols-1 row-cols-md-2">
                                        <div className="col">
                                            <Input
                                                id="name"
                                                label="Enter Your Name*"
                                                type="text"
                                                classnameDiv="form-floating mb-4"
                                                classnameInput="form-control form-control-lg"
                                            />
                                        </div>
                                        <div className="col">
                                            <Input
                                                id="email"
                                                label="Enter Your Email*"
                                                type="email"
                                                classnameDiv="form-floating mb-4"
                                                classnameInput="form-control form-control-lg"
                                            />
                                        </div>
                                        <div className="col">
                                            <Input
                                                id="phone"
                                                label="Enter Your Phone"
                                                type="tel"
                                                classnameDiv="form-floating mb-4"
                                                classnameInput="form-control form-control-lg"
                                            />
                                        </div>
                                        <div className="col">
                                            <Input
                                                id="website"
                                                label="Enter Your Website"
                                                type="text"
                                                classnameDiv="form-floating mb-4"
                                                classnameInput="form-control form-control-lg"
                                            />
                                        </div>
                                        <div className="col w-100">
                                            <Input
                                                id="comment"
                                                label="Enter Your Message"
                                                rows={5}
                                                classnameDiv="form-floating mb-4"
                                                classnameInput="form-control form-control-lg h-100"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input
                                            className="form-check-input"
                                            id="saveInfo"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label" htmlFor="saveInfo">
                                            Save my name, email, and website in this browser for the
                                            next time I comment.
                                        </label>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary w-100 btn-lg" type="submit">
                                            Post a Comment
                                        </button>
                                    </div>
                                </form>
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
                                    classnameInput="form-control form-control-lg"
                                />
                                <Input
                                    id="email"
                                    label="Enter Email*"
                                    type="email"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                />
                                <Input
                                    id="message"
                                    label="Enter Message"
                                    rows={4}
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg h-100"
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

export default BlogDetail;
