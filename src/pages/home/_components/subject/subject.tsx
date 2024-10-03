type Subject = {
    key: number;
    id: string;
    label: string;
};
const Subject = () => {
    const listSubject: Subject[] = [
        {
            key: 1,
            id: "collapseFE",
            label: "Frontend Development",
        },
        {
            key: 2,
            id: "collapseBE",
            label: "Backend Development",
        },
        {
            key: 3,
            id: "collapseDB",
            label: "Database",
        },
        {
            key: 4,
            id: "collapsePL",
            label: "Programming Languages",
        },
    ];
    return (
        <div className="my-4 my-xl-5">
            <div className="container">
                <div className="row align-items-center justify-content-between gx-0">
                    <div className="col-xl-5">
                        <button className="btn btn-lg btn-outline-primary mb-3" disabled>
                            Popular Subject
                        </button>
                        <h1 className="fw-bold">Provide It & Technology Subject For You</h1>
                        <p>
                            25+Contrary to popular belief, Lorem Ipsum is not simply random
                            text roots in a piece of classical Latin literature from 45 BC
                        </p>
                        <p>
                            25+Contrary to popular belief, Lorem Ipsum is not simply random
                            text roots in a piece of classical Latin literature from 45 BC
                        </p>
                        <button className="btn btn-outline-danger btn-lg my-4">
                            Explore More
                        </button>
                    </div>
                    <div className="col-xl-6">
                        <div className="row justify-content-around gx-0 gy-4">
                            {listSubject.map((items) => {
                                return (
                                    <>
                                        <div
                                            className="col-md-5 bg-white shadow-lg rounded-4 p-xl-4"
                                            key={items.key}
                                        >
                                            <h4 className="fw-bold">{items.label}</h4>
                                            <h6 className="text-secondary">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, enim!
                                            </h6>
                                            <button className="btn" type="button">
                                                View more
                                            </button>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subject;
