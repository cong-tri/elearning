import { useNavigate } from "react-router-dom"
import Breadcrumb from "../../components/user/breadcrumb"

const Event = () => {
    const navigate = useNavigate()
    const redirectToEventDetail = () => {
        navigate("/event/1")
    }
    return (
        <>
            <Breadcrumb data={{ label: "Event", path: "Event" }} />
            <section className="container my-4 my-xl-5">
                <div className="row row-cols-1 row-cols-xl-2">
                    <div className="col">
                        <div className="bg-white shadow-lg rounded-4 mb-4">
                            <div className="card position-relative">
                                <img
                                    alt="code"
                                    className="card-img-top img-fluid"
                                    src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                    height={300}
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
                                    <button className="btn btn-outline-primary" type="button" onClick={redirectToEventDetail}>
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
                    <div className="col">
                        <div className="bg-white shadow-lg rounded-4 mb-4">
                            <div className="card position-relative">
                                <img
                                    alt="code"
                                    className="card-img-top img-fluid"
                                    src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                    height={300}
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
                                    <button className="btn btn-outline-primary" type="button" onClick={redirectToEventDetail}>
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
                    <div className="col">
                        <div className="bg-white shadow-lg rounded-4 mb-4">
                            <div className="card position-relative">
                                <img
                                    alt="code"
                                    className="card-img-top img-fluid"
                                    src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                    height={300}
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
                                    <button className="btn btn-outline-primary" type="button" onClick={redirectToEventDetail}>
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
                    <div className="col">
                        <div className="bg-white shadow-lg rounded-4 mb-4">
                            <div className="card position-relative">
                                <img
                                    alt="code"
                                    className="card-img-top img-fluid"
                                    src="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2020-09/it_computer_programming.jpg.webp?itok=AKSaSh2O"
                                    height={300}
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
                                    <button className="btn btn-outline-primary" type="button" onClick={redirectToEventDetail}>
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
                </div>
                <nav>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#">
                                «
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                »
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>

        </>
    )
}

export default Event