const FormReviews = () => {
    return (
        <>
            <div className="bg-white shadow-lg p-xl-4 h-100">
                <h2 className="fw-bold mb-4">Add a Review</h2>
                <form action="">
                    <div className="row row-cols-1 row-cols-md-2 gx-3 mb-4">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                name="name"
                                id="name"
                                aria-describedby="helpId"
                                placeholder={"Your name"}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                name="email"
                                id="email"
                                aria-describedby="helpId"
                                placeholder={"Your email"}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            name="website"
                            id="website"
                            aria-describedby="helpId"
                            placeholder={"Your website"}
                        />
                    </div>
                    <div className="mb-4">
                        <textarea name="comment" className="form-control-lg w-100" rows={5} id=""></textarea>
                    </div>
                    <div className="mb-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="save" id="save" />
                            <label className="form-check-label" htmlFor="save">Save my name, email, and website in this browser for the next time I comment. </label>
                        </div>
                    </div>
                    <div className="">
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormReviews;
