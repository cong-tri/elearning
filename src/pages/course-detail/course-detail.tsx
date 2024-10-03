import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MainContext } from "../../context/main-provider";

import Breadcrumb from "../../components/user/breadcrumb";

import { Category, Courses } from "../../types/types";
import moment from "moment";
import Navtabs from "./_components/navtabs";
import MoreCourse from "./_components/more-course";

const CourseDetail = () => {
    const { id } = useParams<{ id: string }>();

    const { data } = useContext(MainContext);
    const [detail, setDetail] = useState<Courses>();
    const [category, setCategory] = useState<Category>();

    useEffect(() => {
        if (!data?.course || !data?.category) return;

        const courseDetail = data.course.filter((items) => {
            return items.id === id;
        });
        const value = data.category.filter((items) => {
            return items.type === courseDetail[0].tag;
        });

        setCategory(value[0]);
        setDetail(courseDetail[0]);
    }, [data?.course, data?.category, id]);
    return (
        <>
            <Breadcrumb data={{ label: "Course Details", path: "Course Details" }} />
            <section className="container my-4 my-xl-5 py-5">
                <div className="row justify-content-between g-0">
                    <div className="col-xl-8 h-100 pe-xl-5">
                        <div className="card">
                            <img
                                className="card-img-top"
                                src={detail?.image}
                                alt={detail?.title}
                                width={"100%"}
                                height={"100%"}
                            />
                            <div className="card-body">
                                <div className="hstack gap-3">
                                    <div>
                                        <button
                                            className="btn btn-outline-primary mt-4"
                                            type="button"
                                        >
                                            {category?.title}
                                        </button>
                                    </div>
                                    <div className="ms-auto">
                                        <p>
                                            <span className="text-secondary">Last Update:</span>{" "}
                                            {moment().format("MMM Do YY")}
                                        </p>
                                    </div>
                                </div>
                                <h1 className="card-title fw-bold my-3 my-xl-4">
                                    {detail?.title}
                                </h1>
                                <p className="card-text text-secondary fs-5">
                                    {detail?.description}
                                </p>
                                <h4 className="fw-bold my-3 my-xl-4">Course Detail</h4>
                                <div className="border shadow-lg p-3">
                                    <div className="row row-cols-1 row-cols-lg-2 g-0">
                                        <div className="col p-4">
                                            <div className="hstack gap-3 mb-3">
                                                <div>
                                                    <p className="text-secondary">Instructor:</p>
                                                </div>
                                                <div className="ms-auto text-right">
                                                    <p className="fw-medium">{detail?.createBy}</p>
                                                </div>
                                            </div>
                                            <div className="hstack gap-3 mb-3">
                                                <div>
                                                    <p className="text-secondary">Lessons:</p>
                                                </div>
                                                <div className="ms-auto text-right">
                                                    <p className="fw-medium">{detail?.lessons}</p>
                                                </div>
                                            </div>
                                            <div className="hstack gap-3 mb-3">
                                                <div>
                                                    <p className="text-secondary">Duration:</p>
                                                </div>
                                                <div className="ms-auto text-right">
                                                    <p className="fw-medium">20h 41m 32s</p>
                                                </div>
                                            </div>
                                            <div className="hstack gap-3 mb-3">
                                                <div>
                                                    <p className="text-secondary">Enrolled:</p>
                                                </div>
                                                <div className="ms-auto text-right">
                                                    <p className="fw-medium">20 students</p>
                                                </div>
                                            </div>
                                            <div className="hstack gap-3 mb-3">
                                                <div>
                                                    <p className="text-secondary">Total:</p>
                                                </div>
                                                <div className="ms-auto text-right">
                                                    <p className="fw-medium">200 students</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col p-4">
                                            <div className="hstack gap-3 mb-3">
                                                <div>
                                                    <p className="text-secondary">Course level:</p>
                                                </div>
                                                <div className="ms-auto text-right">
                                                    <p className="fw-medium text-uppercase">{detail?.level}</p>
                                                </div>
                                            </div>
                                            <div className="hstack gap-3 mb-3">
                                                <div>
                                                    <p className="text-secondary">Language:</p>
                                                </div>
                                                <div className="ms-auto text-right">
                                                    <p className="fw-medium">JavaScript</p>
                                                </div>
                                            </div>
                                            <div className="hstack gap-3 mb-3">
                                                <div>
                                                    <p className="text-secondary">Price Discount:</p>
                                                </div>
                                                <div className="ms-auto text-right">
                                                    <p className="fw-medium">-20%</p>
                                                </div>
                                            </div>
                                            <div className="hstack gap-3 mb-3">
                                                <div>
                                                    <p className="text-secondary">Regular Price:</p>
                                                </div>
                                                <div className="ms-auto text-right">
                                                    <p className="fw-medium">$228/Mo</p>
                                                </div>
                                            </div>
                                            <div className="hstack gap-3 mb-3">
                                                <div>
                                                    <p className="text-secondary">Course Status:</p>
                                                </div>
                                                <div className="ms-auto text-right">
                                                    <p className="fw-medium">Available</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Navtabs />
                                <div className="my-4">
                                    <h3 className="my-4 fw-bold">Why search Is Important ?</h3>
                                    <ul className="">
                                        <li className="list-group-item text-secondary mb-3 fs-5">
                                            Lorem Ipsum is simply dummying text of the printing
                                            andtypesetting industry most of the standard.
                                        </li>
                                        <li className="list-group-item text-secondary mb-3 fs-5">
                                            Lorem Ipsum is simply dummying text of the printing
                                            andtypesetting industry most of the standard.
                                        </li>
                                        <li className="list-group-item text-secondary mb-3 fs-5">
                                            Lorem Ipsum is simply dummying text of the printing
                                            andtypesetting industry most of the standard.
                                        </li>
                                        <li className="list-group-item text-secondary mb-3 fs-5">
                                            Lorem Ipsum is simply dummying text of the printing
                                            andtypesetting industry most of the standard.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-footer">
                                <span className="me-3 fs-5 fw-bold">Tag</span>
                                <button className="btn btn-outline-primary text-uppercase">
                                    {detail?.tag}
                                </button>
                            </div>
                        </div>
                        <MoreCourse tag={detail?.tag ?? ""} />
                    </div>
                    <div className="col-xl-4 h-100">
                        <div className="w-100 bg-white shadow-lg rounded-3 py-5 px-3">
                            <img
                                src={detail?.image}
                                width={"100%"}
                                height={"100%"}
                                alt={detail?.title}
                            />
                            <div className="hstack gap-3">
                                <div>
                                    <h2 className="text-primary fw-bold my-3">
                                        ${detail?.price}
                                    </h2>
                                </div>
                                <div className="ms-auto">
                                    <button
                                        className="btn btn-outline-danger fw-medium"
                                        type="button"
                                        disabled
                                    >
                                        -10%
                                    </button>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary btn-lg w-100 my-3"
                                type="button"
                            >
                                Add to Cart
                            </button>
                            <button
                                className="btn btn-danger btn-lg w-100 mb-3"
                                type="button"
                            >
                                Buy Now
                            </button>
                            <p className="text-secondary fs-6">
                                <i className="fa-solid fa-rotate-right"></i> 45-Days Money-Back
                                Guarantee
                            </p>
                            <div className="hstack gap-3 text-secondary mt-4 py-3 border-bottom">
                                <div>
                                    <p>
                                        Instructor
                                    </p>
                                </div>
                                <div className="ms-auto text-right">
                                    <p>{detail?.createBy}</p>
                                </div>
                            </div>
                            <div className="hstack gap-3 text-secondary py-3 border-bottom">
                                <div>
                                    <p>
                                        Start Date
                                    </p>
                                </div>
                                <div className="ms-auto text-right">
                                    <p>{moment(detail?.createAt).format("MMM Do YY")}</p>
                                </div>
                            </div>
                            <div className="hstack gap-3 text-secondary py-3 border-bottom">
                                <div>
                                    <p>
                                        Total Duration
                                    </p>
                                </div>
                                <div className="ms-auto text-right">
                                    <p>10 Hours</p>
                                </div>
                            </div>
                            <div className="hstack gap-3 text-secondary py-3 border-bottom">
                                <div>
                                    <p>
                                        Enrolled
                                    </p>
                                </div>
                                <div className="ms-auto text-right">
                                    <p>100</p>
                                </div>
                            </div>
                            <div className="hstack gap-3 text-secondary py-3 border-bottom">
                                <div>
                                    <p>
                                        Lessons
                                    </p>
                                </div>
                                <div className="ms-auto text-right">
                                    <p>{detail?.lessons}</p>
                                </div>
                            </div>
                            <div className="hstack gap-3 text-secondary py-3 border-bottom">
                                <div>
                                    <p>
                                        Skill Level
                                    </p>
                                </div>
                                <div className="ms-auto text-right">
                                    <p className="text-uppercase">{detail?.level}</p>
                                </div>
                            </div>
                            <div className="hstack gap-3 text-secondary py-3 border-bottom">
                                <div>
                                    <p>
                                        Language
                                    </p>
                                </div>
                                <div className="ms-auto text-right">
                                    <p>Javascript</p>
                                </div>
                            </div>
                            <div className="hstack gap-3 text-secondary py-3 border-bottom">
                                <div>
                                    <p>
                                        Quiz
                                    </p>
                                </div>
                                <div className="ms-auto text-right">
                                    <p>Yes</p>
                                </div>
                            </div>
                            <div className="hstack gap-3 text-secondary py-3 border-bottom">
                                <div>
                                    <p>
                                        Certificate
                                    </p>
                                </div>
                                <div className="ms-auto text-right">
                                    <p>Yes</p>
                                </div>
                            </div>
                            <p className="text-center text-secondary mt-4">More inquery about course</p>
                            <button className="btn btn-lg btn-outline-primary mt-4 w-100" type="button">
                                <i className="fa-solid fa-phone"></i>
                                <span className="ms-2">+084 326034561</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CourseDetail;
