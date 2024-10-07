import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../../context/main-provider";

import Breadcrumb from "../../components/user/breadcrumb";

import { ICourses, ICategory } from "../../types/types";

type Skill = {
    level: string;
};

const skills: Skill[] = [
    { level: "beginner" },
    { level: "intermediate" },
    { level: "advanced" },
];

const Course = () => {
    const { data } = useContext(MainContext);

    const navigate = useNavigate()

    const [newList, setNewList] = useState<ICourses[]>();
    const [listSearch, setListSearch] = useState<ICourses[]>();
    const [categories, setCategories] = useState<ICategory[]>();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (!data?.course || !data.categories) return;
        setNewList(data.course);
        setCategories(data.categories);
    }, [data]);

    const itemsPerPage = 9;
    const listLength: number = newList?.length ?? 0;

    const totalPages = Math.ceil(listLength / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    useEffect(() => {
        setListSearch(newList?.slice(indexOfFirstItem, indexOfLastItem));
    }, [newList, indexOfFirstItem, indexOfLastItem]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handleFilterByType = (type: string) => {
        const listSearch = newList?.filter((items) => {
            return items.tag === type;
        });
        setListSearch(listSearch);
    };
    const handleFilterByLevel = (level: string) => {
        const listSearch = newList?.filter((items) => {
            return items.level === level;
        });
        console.log(listSearch);
        setListSearch(listSearch);
    };
    const handleFilterBySelect = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        if (event.target.value === "all") {
            setListSearch(listSearch);
        }
        switch (event.target.value) {
            case "title-asc":
                setListSearch(sortTitleAscending({ array: [...(listSearch ?? [])] }));
                break;
            case "title-desc":
                setListSearch(sortTitleDescending({ array: [...(listSearch ?? [])] }));
                break;
            case "price-asc":
                setListSearch(sortPriceAscending({ array: [...(listSearch ?? [])] }));
                break;
            case "price-desc":
                setListSearch(sortPriceDescending({ array: [...(listSearch ?? [])] }));
                break;
            default:
                break;
        }
    };
    const [inputValue, setInputValue] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(inputValue);
        setListSearch(
            filterByTitle({ array: [...(listSearch ?? [])], title: inputValue })
        );
    };
    return (
        <>
            <Breadcrumb data={{ label: "Course", path: "Course" }} />
            <section id="course-page" className="container my-4 my-xl-5">
                <div className="hstack gap-3 border p-3 mb-5 shadow-lg">
                    <div>
                        <h5>
                            Showing {indexOfFirstItem + 1} - {indexOfLastItem} of {listLength}{" "}
                            Results
                        </h5>
                    </div>
                    <div className="ms-auto">
                        <select
                            className="form-select form-select-lg"
                            name="filter"
                            id="filter"
                            onChange={handleFilterBySelect}
                        >
                            <option value="all" selected>
                                See All
                            </option>
                            <option value="title-asc">Title Ascending</option>
                            <option value="title-desc">Title Descending</option>
                            <option value="price-asc">Price Ascending</option>
                            <option value="price-desc">Price Descending</option>
                        </select>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-xl-3 px-3">
                        <div className="border shadow-lg p-3 py-xl-4 rounded-3 mb-4 mb-xl-5">
                            <h4 className="fw-bold my-3">Search Here</h4>
                            <form action="" onSubmit={handleSubmit}>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        name="txtSearch"
                                        className="form-control"
                                        placeholder="Search Course"
                                        aria-describedby="btnSearch"
                                        required
                                        onChange={handleChange}
                                    />
                                    <button
                                        className="btn btn-outline-primary"
                                        type="submit"
                                        id="btnSearch"
                                    >
                                        <span>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="row gy-0">
                            <div className="col-12 col-md col-xl-12">
                                <div className="border shadow-lg p-3 py-xl-4 rounded-3">
                                    <h4 className="fw-bold my-3">Level</h4>
                                    {skills?.map((items, index) => {
                                        return (
                                            <>
                                                <button
                                                    className={`btn btn-lg btn-outline-primary w-100 text-uppercase ${index >= 2 ? "" : "mb-4"
                                                        }`}
                                                    type="button"
                                                    onClick={() => handleFilterByLevel(items.level)}
                                                >
                                                    {items.level}
                                                </button>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="col-12 col-md col-xl-12 order-last order-xl-first">
                                <div className="border shadow-lg p-3 py-xl-4 rounded-3 mb-4 mb-xl-5">
                                    <h4 className="fw-bold my-3">Categories</h4>
                                    {categories?.map((items) => {
                                        return (
                                            <>
                                                <button
                                                    className={`btn btn-lg btn-outline-primary w-100 ${items.id === "6" ? "" : "mb-4"
                                                        }`}
                                                    type="button"
                                                    onClick={() => handleFilterByType(items.type)}
                                                >
                                                    {items.title}
                                                </button>
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 gy-3">
                            {listSearch?.map((items, index) => {
                                return (
                                    <>
                                        <div className="col" key={index} role="button" onClick={() => navigate(`/course/${items.id}`)}>
                                            <div className="bg-white rounded-3 p-3 shadow-lg h-100 ">
                                                <div className="card h-100 position-relative">
                                                    <img
                                                        className="card-img-top img-fluid"
                                                        style={{ height: 250 }}
                                                        src={items.image}
                                                        width={"100%"}
                                                        // height={"100%"}
                                                        alt={items.title}
                                                    />
                                                    <div className="position-absolute top-0 start-0 bg-primary text-white text-uppercase p-1 rounded-2">
                                                        <span className="fs-6">{items.tag}</span>
                                                    </div>
                                                    <div className="card-header align-content-center">
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
                                                            <span className="fw-bold">{items.created_by}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                        <div className="text-center mt-4">
                            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                                Previous
                            </button>

                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => setCurrentPage(index + 1)}
                                    disabled={currentPage === index + 1}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Course;

const sortTitleAscending = ({ array }: { array: ICourses[] }): ICourses[] => {
    return array.sort((a, b) => a.title.localeCompare(b.title));
};

const sortTitleDescending = ({ array }: { array: ICourses[] }): ICourses[] => {
    return array.sort((a, b) => b.title.localeCompare(a.title));
};

const sortPriceAscending = ({ array }: { array: ICourses[] }) => {
    return array.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
};

const sortPriceDescending = ({ array }: { array: ICourses[] }) => {
    return array.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
};

const filterByTitle = ({
    array,
    title,
}: {
    array: ICourses[];
    title: string;
}) => {
    return array.filter((course) =>
        course.title.toLowerCase().includes(title.toLowerCase())
    );
};
