import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../../../context/main-provider";

import { Courses } from "../../../types/types";

const MoreCourse = ({ tag }: { tag: string }) => {
    const { data } = useContext(MainContext);
    const navigate = useNavigate()

    const [course, setCourse] = useState<Courses[]>();

    useEffect(() => {
        if (!data?.course || tag === "") return;
        const listCourse = data.course.filter((items) => { return items.tag === tag })
        setCourse(listCourse);
    }, [data?.course, tag]);

    return (
        <div className="my-4 my-xl-5">
            <div className="hstack gap-3">
                <div>
                    <h3 className="fw-bold">Related Courses</h3>
                </div>
                <div className="ms-auto">
                    <span role="button" className="text-secondary fs-5 link-primary" onClick={() => navigate("/course")}>More Course</span>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-0">
                {course?.slice(0, 2).map((items, index) => {
                    return (
                        <>
                            <div className="col p-3" key={index} role="button" onClick={() => navigate(`/course/${items.id}`)}>
                                <div className="bg-white rounded-3 p-3 shadow-lg h-100 ">
                                    <div className="card h-100 position-relative">
                                        <img
                                            className="card-img-top img-fluid"
                                            src={items.image}
                                            alt={items.title}
                                        />
                                        <div className="position-absolute top-0 start-0 bg-primary text-white text-uppercase p-1 rounded-2">
                                            <span className="fs-6">{items.tag}</span>
                                        </div>
                                        <div className="card-header h-100 align-content-center">
                                            <h5 className="fw-bold">{items.title}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="hstack gap-3">
                                                <div>
                                                    <p>
                                                        <i className="fa-solid fa-book text-primary"></i>
                                                        <span className="mx-2 fs-5 fw-medium">
                                                            {items.lessons} Lessons
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="ms-auto">
                                                    <p className="fw-medium text-uppercase">
                                                        {items.level}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="fs-3 my-2 fw-bold text-primary">
                                                ${items.price}
                                            </p>
                                            <p className="card-text my-2">
                                                {items.description}
                                            </p>
                                        </div>
                                        <div className="card-footer">
                                            <p>
                                                Instructor:{" "}
                                                <span className="fw-bold">{items.createBy}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    )
}

export default MoreCourse