const Register = () => {
    return (
        <>
            <h1 className="text-center fw-bold mb-3">Register</h1>
            <p className="text-secondary text-center">
                Already have an account?{" "}
                <span className="text-primary fw-medium">
                    Login
                </span>
            </p>
            <form action="" className="mt-xl-4">
                <div className="row row-cols-1 row-cols-md-2 gy-3 gy-xl-4 mb-4">
                    <div className="col">
                        <label htmlFor="firstname" className="form-label fs-4">
                            First Name
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            name="firstname"
                            id="firstname"
                            aria-describedby="helpId"
                            placeholder={"Your first name"}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="lastname" className="form-label fs-4">
                            Last Name
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            name="lastname"
                            id="lastname"
                            aria-describedby="helpId"
                            placeholder={"Your last name"}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="username" className="form-label fs-4">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            name="username"
                            id="username"
                            aria-describedby="helpId"
                            placeholder={"Your username"}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="email" className="form-label fs-4">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            name="email"
                            id="email"
                            aria-describedby="helpId"
                            placeholder={"Your email"}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="password" className="form-label fs-4">
                            Password
                        </label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            name="password"
                            id="password"
                            aria-describedby="helpId"
                            placeholder={"Your password"}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="password" className="form-label fs-4">
                            Confirm password
                        </label>
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            name="password"
                            id="password"
                            aria-describedby="helpId"
                            placeholder={"Your password"}
                        />
                    </div>
                </div>
                <div className="form-check mb-4">
                    <div>
                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" value={"check"} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Accept the Terms and Privacy Policy
                        </label>
                    </div>
                </div>
                <div className="">
                    <button className="btn btn-lg btn-primary w-100" type="button">Register</button>
                </div>
            </form>
        </>
    )
}

export default Register