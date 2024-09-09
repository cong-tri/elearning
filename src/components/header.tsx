import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleNavigateUrl = (url: string) => {
        navigate(url);
    };
    return (
        <header className="py-4 bg-light shadow-sm w-100 fixed-top">
            <nav className="d-none d-xl-block">
                <div className="mx-5">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <button className="btn" type="button" onClick={() => handleNavigateUrl("/")}>
                                <h3 className="text-primary-emphasis">E-LEARNING PROGRAMMING</h3>
                            </button>
                        </div>
                        <div className="col-auto">
                            <div className="row">
                                <div className="col">
                                    <h5>COURSE</h5>
                                </div>
                                <div className="col">
                                    <h5>PRATICE</h5>
                                </div>
                                <div className="col">
                                    <h5>ABOUT</h5>
                                </div>
                                <div className="col">
                                    <h5>BLOG</h5>
                                </div>
                                <div className="col">
                                    <h5>EVENT</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-lg" type="button">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                            <button
                                className="btn btn-lg btn-outline-primary ms-3 me-4"
                                type="button"
                                onClick={() => handleNavigateUrl("/account")}
                            >
                                <i className="fa-solid fa-user"></i>
                            </button>
                            <button className="btn btn-primary btn-lg" type="button">
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="navbar fixed-top d-block d-xl-none">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Offcanvas navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="offcanvas offcanvas-end"
                        tabIndex={-1}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div className="offcanvas-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Link
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex mt-3" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
