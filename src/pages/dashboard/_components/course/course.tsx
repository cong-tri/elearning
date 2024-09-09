import { useState } from "react";

type Tabs = {
    key: number;
    id: string;
    label: string;
};

type Courses = {
    key: number;
    id: string;
    label: string;
    type: string;
    image?: string;
};

const listTab: Tabs[] = [
    {
        key: 1,
        id: "all",
        label: "See All",
    },
    {
        key: 2,
        id: "fe",
        label: "Frontend",
    },
    {
        key: 3,
        id: "be",
        label: "Backend",
    },
    {
        key: 4,
        id: "db",
        label: "Database",
    },
    {
        key: 5,
        id: "mb",
        label: "Mobile",
    },
    {
        key: 6,
        id: "l",
        label: "Languages",
    },
];

const listCourse: Courses[] = [
    {
        key: 1,
        id: "fe",
        label: "NextJS",
        type: "FE",
        image:
            "https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg",
    },
    {
        key: 2,
        id: "fe",
        label: "ReactJS",
        type: "FE",
        image:
            "https://s3-sgn09.fptcloud.com/codelearnstorage/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg",
    },
    {
        key: 3,
        id: "be",
        label: "Python",
        type: "BE",
        image:
            "https://cdn.mcivietnam.com/nhanvien/media/Blog/python-trong-doanh-nghiepjpegp1ygg1.jpeg",
    },
    {
        key: 4,
        id: "db",
        label: "MySQL",
        type: "DB",
        image:
            "https://techvccloud.mediacdn.vn/2020/9/17/mysql-1-1600340047538868003500-crop-160034079526453914971.png",
    },
    {
        key: 5,
        id: "mb",
        label: "Flutter",
        type: "MB",
        image:
            "https://api.reliasoftware.com/uploads/what_is_flutter_fcb6c7a4b8.png",
    },
    {
        key: 6,
        id: "l",
        label: "Javascript",
        type: "L",
        image:
            "https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png",
    },
];

const Course = () => {
    const [id, setID] = useState<string>("all");
    const [newList, setNewList] = useState<Courses[]>(listCourse);

    const handleFilterById = (id: string) => {
        console.log("id >>>", id);
        setID(id);

        if (id === "all") {
            setNewList(listCourse);
        } else {
            const listFilter = listCourse.filter((items) => {
                return items.id === id;
            });

            console.log(listFilter);
            setNewList(listFilter);
        }
    };
    const handleGetType = (type: string) => {
        let value = "";
        switch (type) {
            case "FE":
                value = "Frontend";
                break;
            case "BE":
                value = "Backend";
                break;
            case "DB":
                value = "Database";
                break;
            case "MB":
                value = "Mobile";
                break;
            case "L":
                value = "Languages"
                break;
            default:
                break;
        }
        return value
    }
    return (
        <div id="course" className="my-4 my-xl-5 pb-3 pb-xl-4">
            <div className="container py-4 py-xl-5">
                <button className="btn btn-lg btn-outline-primary mb-3" disabled>
                    Course
                </button>
                <div className="row mb-2 mb-lg-5 gy-3 justify-content-between align-items-center">
                    <div className="col-auto col-lg-4">
                        <h1 className="fw-bold">Perfect Online Course Your Carrer</h1>
                    </div>
                    <div className="col-auto">
                        <div>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                {listTab.map((items) => {
                                    return (
                                        <>
                                            <li
                                                className="nav-item ms-md-3"
                                                role="presentation"
                                                key={items.key}
                                            >
                                                <button
                                                    className={`nav-link ${items.key === 1 ? "active" : ""
                                                        }`}
                                                    id={`pills-${items.id}-tab`}
                                                    data-bs-toggle="pill"
                                                    data-bs-target={`#pills-${items.id}`}
                                                    type="button"
                                                    role="tab"
                                                    aria-controls={`pills-${items.id}`}
                                                    aria-selected={items.key === 1 ? "true" : "false"}
                                                    onClick={() => handleFilterById(items.id)}
                                                >
                                                    {items.label}
                                                </button>
                                            </li>
                                        </>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-content" id="pills-tabContent">
                    {listTab.map((items) => {
                        return (
                            <>
                                <div
                                    key={items.key}
                                    className={`tab-pane fade ${items.key === 1 ? "show active" : ""
                                        }`}
                                    id={`pills-${items.id}`}
                                    role="tabpanel"
                                    aria-labelledby={`pills-${items.id}-tab`}
                                    tabIndex={items.key}
                                >
                                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 align-items-center gx-0 gy-3">
                                        {newList.map((item) => {
                                            return (
                                                <>
                                                    <div className="col p-0 p-md-3" key={item.key}>
                                                        <div className="bg-light rounded-3 shadow-lg p-2">
                                                            <div className="pb-2 position-relative" id="img-course">
                                                                <img
                                                                    src={item.image}
                                                                    className="rounded-3"
                                                                    width="100%"
                                                                    height="100%"
                                                                    alt={item.label}
                                                                />
                                                                <span className="position-absolute top-0 start-0 badge rounded-pill bg-primary">
                                                                    {handleGetType(item.type)}
                                                                </span>
                                                            </div>
                                                            <h4>{item.label}</h4>
                                                        </div>
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Course;
