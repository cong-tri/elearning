const Comment = () => {
    return (
        <div id="comment" className="my-4 my-xl-5">
            <div className="container">
                <div className="row justify-content-around gy-4 align-items-center">
                    <div className="col-xl-4 mb-md-4 mb-xl-0">
                        <button className="btn btn-lg btn-outline-primary mb-3" disabled>
                            Comment
                        </button>
                        <h1 className="fw-bold mb-3">What They Say About us</h1>
                        <p className="text-secondary mb-3">
                            Construction is a general term meaning the art and science to form
                            systems organizations and comes from Latin Construction is
                        </p>
                    </div>
                    <div className="col-md-5 col-xl-3">
                        <div className="shadow-lg bg-white p-3 p-xl-4 mb-4 position-relative">
                            <p className="text-secondary">
                                “The other hand we denounce righteou indg ation men who are so
                                beguiled and demoraliz by the the mo ment. Dislike men who so
                                development co”
                            </p>
                            <span className="position-absolute top-0 start-0 translate-middle bg-primary p-2">
                                <i className="fa-regular fa-comments fa-1x text-white"></i>
                            </span>
                        </div>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-3">
                                <img
                                    src="https://doodleipsum.com/200x200/avatar?bg=63C8D9&i=8f8802a6b20ab4b3237b1374a46c9434"
                                    height="100%"
                                    width="100%"
                                    className=" rounded-circle"
                                    alt="Avatar"
                                />
                            </div>
                            <div className="col">
                                <h5 className="fw-bold">Robin John</h5>
                                <h6 className="text-secondary">Developer</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-xl-3">
                        <div className="shadow-lg p-3 p-xl-4 bg-white mb-4 position-relative">
                            <p className="text-secondary">
                                “The other hand we denounce righteou indg ation men who are so
                                beguiled and demoraliz by the the mo ment. Dislike men who so
                                development co”
                            </p>
                            <span className="position-absolute top-0 start-0 translate-middle bg-primary p-2">
                                <i className="fa-regular fa-comments fa-1x text-white"></i>
                            </span>
                        </div>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-3">
                                <img
                                    src="https://doodleipsum.com/200x200/avatar?bg=63C8D9&i=8f8802a6b20ab4b3237b1374a46c9434"
                                    height="100%"
                                    width="100%"
                                    className=" rounded-circle"
                                    alt="Avatar"
                                />
                            </div>
                            <div className="col">
                                <h5 className="fw-bold">Robin John</h5>
                                <h6 className="text-secondary">Developer</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
