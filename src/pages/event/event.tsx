import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/user/breadcrumb";
import { useContext } from "react";
import { MainContext } from "../../context/main-provider";

const Event = () => {
    const navigate = useNavigate();

    const { data } = useContext(MainContext);
    return (
        <>
            <Breadcrumb data={{ label: "Event", path: "Event" }} />
            <section className="container my-4 my-xl-5">
                <div className="row row-cols-1 row-cols-xl-2">
                    {data?.events.map((items) => {
                        return (
                            <>
                                <div className="col">
                                    <div className="bg-white shadow-lg rounded-4 mb-4">
                                        <div className="card position-relative h-100">
                                            <img
                                                alt="code"
                                                className="card-img-top img-fluid"
                                                src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                                height={300}
                                                width={"100%"}
                                            />
                                            <div className="position-absolute top-0 end-0 bg-primary p-xl-3 mt-xl-3 me-xl-3 rounded-4">
                                                <span className="text-white fw-medium fs-5">
                                                    {items.date}
                                                </span>
                                            </div>
                                            <div className="card-body h-100">
                                                <h2 className="card-title fw-bold">{items.title}</h2>
                                                <p className="text-secondary my-3">{items.content_1}</p>
                                                <button
                                                    className="btn btn-outline-primary"
                                                    type="button"
                                                    onClick={() => navigate(`/event/${items.id}`)}
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
                                                            <i className="fa-solid fa-user-tie"></i>{" "}
                                                            {items.created_by}
                                                        </span>
                                                        <span
                                                            className="me-3 text-secondary link-primary"
                                                            role="button"
                                                        >
                                                            <i className="fa-solid fa-comments"></i> 0 comment
                                                        </span>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <button
                                                            className="btn btn-outline-primary"
                                                            type="button"
                                                        >
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
                            </>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Event;
