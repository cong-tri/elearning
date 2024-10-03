type Price = {
    id: number;
    price: number;
    limit: number;
    label: string;
};
const listPricing: Price[] = [
    {
        id: 1,
        price: 0,
        limit: 2,
        label: "FREE",
    },
    {
        id: 2,
        price: 29,
        limit: 10,
        label: "BASIC",
    },
    {
        id: 3,
        price: 59,
        limit: 20,
        label: "PRO",
    },
];
const Pricing = () => {
    return (
        <div id="pricing" className="my-4 my-xl-5 py-4 py-xl-5">
            <div className="container">
                <button className="btn btn-lg btn-outline-primary d-block mx-md-auto mb-3" disabled>
                    Pricing Plan
                </button>
                <h1 className="fw-bold mb-4 text-start text-md-center">
                    Choose The Best Package For your Learning
                </h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 gy-3 my-4 my-xl-5">
                    {listPricing.map((items) => {
                        return (
                            <>
                                <div className="col text-start">
                                    <div className="bg-white rounded-3 shadow-lg p-4">
                                        <h1>{items.label}</h1>
                                        <h1 className="my-3">
                                            ${items.price}{" "}
                                            <span className="text-secondary fs-5">/ month</span>{" "}
                                        </h1>
                                        <ul>
                                            <li>
                                                <span className="me-2">
                                                    <i className="fa-solid fa-check text-danger"></i>
                                                </span>{" "}
                                                {items.limit} user
                                            </li>
                                            <li>
                                                <span className="me-2">
                                                    <i className="fa-solid fa-check text-danger"></i>
                                                </span>{" "}
                                                Learning Scope
                                            </li>
                                            <li>
                                                <span className="me-3">
                                                    <i className="fa-solid fa-x text-secondary"></i>
                                                </span>
                                                Team collaboration
                                            </li>
                                            <li>
                                                <span className="me-2">
                                                    <i className="fa-solid fa-check text-danger"></i>
                                                </span>{" "}
                                                Export HTML code
                                            </li>
                                            <li>
                                                <span className="me-2">
                                                    <i className="fa-solid fa-check text-danger"></i>
                                                </span>{" "}
                                                Upload Your Logo
                                            </li>
                                        </ul>
                                        <button
                                            className={`btn btn-lg w-100 my-4 ${items.id === 2 ? "btn-danger" : "btn-primary"
                                                }`}
                                        >
                                            Get Started
                                        </button>
                                        <p className="text-center text-secondary">
                                            No creadit card required
                                        </p>
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

export default Pricing;
