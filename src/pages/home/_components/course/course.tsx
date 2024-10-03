import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../../../../context/main-provider";

import { Courses } from "../../../../types/types";

const Course = () => {
    const navigate = useNavigate();
    const { data } = useContext(MainContext);

    const [newList, setNewList] = useState<Courses[]>();

    useEffect(() => {
        if (!data?.course) return;
        setNewList(data.course)
    }, [data?.course])

    if (!data?.category) return
    const { category, course } = data;

    const handleFilterByType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const type: string = event.target.value;
        console.log("type >>>", type);

        if (type === "all") {
            setNewList(course);
        } else {
            const listFilter = course.filter((items) => {
                return items.tag === type;
            });

            console.log(listFilter);
            setNewList(listFilter);
        }
    };

    return (
        <div id="course" className="my-4 my-xl-5 pb-3 pb-xl-4">
            <div className="container py-3 py-xl-4">
                <button className="btn btn-lg btn-outline-primary mb-3" disabled>
                    Course
                </button>
                <div className="row justify-content-between align-content-center g-0">
                    <div className="col-auto">
                        <h1 className="fw-bold mb-4">Perfect Online Course Your Carrer</h1>
                    </div>
                    <div className="col-xl-3">
                        <select
                            className="form-select form-select-lg"
                            name="category"
                            id="category"
                            onChange={handleFilterByType}
                        >
                            <option value="all" selected>
                                See All
                            </option>
                            {category.map((items, index) => {
                                return (
                                    <>
                                        <option value={items.type} key={index}>
                                            {items.title}
                                        </option>
                                    </>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-0">
                    {newList?.slice(0, 6).map((items, index) => {
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
                                                            <span className="mx-2 fs-5 fw-medium">{items.lessons} Lessons</span>
                                                        </p>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <p className="fw-medium text-uppercase">
                                                            {items.level}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p className="fs-3 my-2 fw-bold text-primary">${items.price}</p>
                                                <p className="card-text my-2">{items.description}</p>
                                            </div>
                                            <div className="card-footer">
                                                <p>
                                                    Instructor: <span className="fw-bold">{items.createBy}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
                <div className="text-center mt-3 mt-xl-4">
                    <button className="btn btn-primary px-xl-5" type="button" onClick={() => navigate("/course")}>View more</button>
                </div>
            </div>
        </div>
    );
};

export default Course;
