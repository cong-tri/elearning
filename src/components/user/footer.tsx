import { useNavigate } from "react-router-dom";
import Input from "../input";

type FooterLink = {
    label: string;
    content?: string;
    children?: Link[];
};
type Link = {
    label: string;
    url: string;
};

const Footer = () => {
    const navigate = useNavigate();
    const listFooterLink: FooterLink[] = [
        {
            label: "About",
            content:
                "orporate clients and leisure travelers has been relying on Groundlink for dependable safe, and professional chauffeured car end service in major cities across World.",
        },
        {
            label: "Useful Link",
            children: [
                {
                    label: "Course",
                    url: "/course",
                },
                {
                    label: "About",
                    url: "/about",
                },
                {
                    label: "Blog",
                    url: "/blog",
                },
                {
                    label: "Contact",
                    url: "/contact",
                },
                {
                    label: "Zoom",
                    url: "/zoom",
                },
                {
                    label: "Event",
                    url: "/event",
                },
            ],
        },
        {
            label: "Course",
            children: [
                {
                    label: "Frontend Development",
                    url: "/",
                },
                {
                    label: "Backend Development",
                    url: "/",
                },
                {
                    label: "Database",
                    url: "/",
                },
                {
                    label: "Mobile Development",
                    url: "/",
                },
                {
                    label: "Programming Languages",
                    url: "/",
                },
            ],
        },
    ];
    return (
        <footer>
            <div className="container py-4 py-xl-5 text-white">
                <div className="row pb-5 mb-4 mb-xl-5 border-bottom justify-content-between align-items-center">
                    <div className="col-auto">
                        <h1 className="fw-bold">
                            Still You Need Our{" "}
                            <span className="text-primary-emphasis">Support</span> ?
                        </h1>
                        <p className="fs-6 text-secondary-emphasis mt-2">
                            Don’t wait make a smart & logical quote here. Its pretty easy.
                        </p>
                    </div>
                    <div className="col-xl-5">
                        <form action="">
                            <Input
                                classnameDiv="col input-group"
                                classnameInput="form-control form-control-lg"
                                type="email"
                                labelBtn="Submit"
                                typeBtn="button"
                                classnameBtn="btn btn-primary"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                        </form>
                    </div>
                </div>
                <div className="my-4 my-xl-5">
                    <div className="row justify-content-between align-items-top gy-3">
                        {listFooterLink.map((items) => {
                            return (
                                <>
                                    <div className="col-auto col-md-5 col-xl-4">
                                        <h5 className="mb-4">{items.label}</h5>
                                        {items.content ? <p>{items.content}</p> : ""}
                                        {items.children
                                            ? items.children.map((items) => {
                                                return (
                                                    <>
                                                        <p className="my-2">{items.label}</p>
                                                    </>
                                                );
                                            })
                                            : ""}
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
                <div className="mt-4 mt-xl-5">
                    <div className="row align-items-center justify-content-between gy-3">
                        <div className="col-md-auto text-center text-md-start">
                            <button className="btn" type="button">
                                <h3 className="text-white">E-LEARNING PROGRAMMING</h3>
                            </button>
                        </div>
                        <div className="col-md-auto text-center text-md-start">
                            Copyright &copy;{" "}
                            <span className="text-primary fw-bold">2024</span>. All Rights
                            Reserved.
                        </div>
                        <div className="col-xl-auto text-center text-md-start">
                            <button className="btn btn-outline-light" disabled>
                                <i className="fa-brands fa-facebook"></i>
                            </button>
                            <button className="btn btn-outline-light ms-3" disabled>
                                <i className="fa-brands fa-youtube"></i>
                            </button>
                            <button className="btn btn-outline-light ms-3" disabled>
                                <i className="fa-brands fa-instagram"></i>
                            </button>
                            <button className="btn btn-outline-light ms-3" disabled>
                                <i className="fa-brands fa-twitter"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
