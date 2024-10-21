import { useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "typescript-cookie";
import { key } from "../../constants/constants";
import { Dropdown, MenuProps, message } from "antd";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";

type Link = {
    label: string;
    pathname: string;
};

const listLink: Link[] = [
    {
        label: "COURSE",
        pathname: "/course",
    },
    {
        label: "ZOOM",
        pathname: "/zoom",
    },
    {
        label: "ABOUT",
        pathname: "/about",
    },
    {
        label: "BLOG",
        pathname: "/blog",
    },
    {
        label: "EVENT",
        pathname: "/event",
    },
];

const Header = () => {
    const navigate = useNavigate();

    const token = getCookie(key.uid) ?? "";
    const user = token !== "" ? JSON.parse(token) : null;
    const items: MenuProps["items"] = user && user.role === "admin" ?
        [
            {
                key: "profile",
                label: (
                    <button className="btn" type="button" onClick={() => navigate("/profile")}>Profile</button>
                ),
            },
            {
                key: "admin",
                label: (
                    <button className="btn" type="button" onClick={() => navigate("/admin/home")}>Admin Page</button>
                ),
            },
            {
                key: "logout",
                label: (
                    <button className="btn btn-outline-danger" type="button" onClick={() => handleLogout()}>Logout</button>
                ),
            },
        ] : [
            {
                key: "profile",
                label: (
                    <button className="btn" type="button" onClick={() => navigate("/profile")}>Profile</button>
                ),
            },
            {
                key: "logout",
                label: (
                    <button className="btn btn-outline-danger" type="button" onClick={() => handleLogout()}>Logout</button>
                ),
            },
        ]
    const handleLogout = async (): Promise<void> => {
        try {
            await signOut(auth);

            removeCookie(key.info, {
                path: "/",
            });
            removeCookie(key.token, {
                path: "/",
            });
            removeCookie(key.uid, {
                path: "/",
            });

            message.success("User signed out successfully", 2, () => navigate("/authen"));

        } catch (error) {
            if (error instanceof Error) {
                message.error(error.message)
                return
            }
        }
    };
    return (
        <header className="bg-light shadow-sm w-100 fixed-top">
            <nav className="d-none d-xl-block py-4">
                <div className="mx-5">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <h3
                                className="text-primary-emphasis"
                                role="button"
                                onClick={() => navigate("/")}
                            >
                                E-LEARNING PROGRAMMING
                            </h3>
                        </div>
                        <div className="col-auto">
                            <div className="row">
                                {listLink.map((items, index) => {
                                    return (
                                        <>
                                            <div className="col" key={index}>
                                                <h5
                                                    className="text-black link-primary"
                                                    role="button"
                                                    onClick={() => {
                                                        if (items.pathname !== "") {
                                                            navigate(items.pathname);
                                                        }
                                                    }}
                                                >
                                                    {items.label}
                                                </h5>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="col-auto">
                            <button
                                className="btn btn-lg btn-outline-primary"
                                type="button"
                                onClick={() => navigate("/cart")}
                            >
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                            {!user ? (
                                <button
                                    className="btn btn-lg btn-outline-primary ms-3 me-4"
                                    type="button"
                                    onClick={() => navigate("/authen")}
                                >
                                    <i className="fa-solid fa-user"></i>
                                </button>
                            ) : (
                                <Dropdown menu={{ items }}>
                                    <button
                                        className="btn btn-lg btn-outline-primary ms-3 me-4"
                                        type="button"
                                    // onClick={() => navigate("/authen")}
                                    >
                                        <i className="fa-solid fa-user"></i>
                                    </button>
                                </Dropdown>
                            )}

                            <button
                                className="btn btn-primary btn-lg"
                                type="button"
                                onClick={() => navigate("/course")}
                            >
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="navbar py-4 shadow-lg bg-light fixed-top d-block d-xl-none">
                <div className="container-fluid">
                    <h5
                        className="navbar-brand text-primary-emphasis"
                        role="button"
                        onClick={() => navigate("/")}
                    >
                        E-LEARNING PROGRAMMING
                    </h5>
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
                                    <h5
                                        className="nav-link active text-black link-primary"
                                        role="button"
                                        onClick={() => navigate("/")}
                                    >
                                        HOME
                                    </h5>
                                </li>
                                {listLink.map((items, index) => {
                                    return (
                                        <>
                                            <li className="nav-item" key={index}>
                                                <h5
                                                    className="nav-link text-black link-primary"
                                                    role="button"
                                                    onClick={() => navigate(items.pathname)}
                                                >
                                                    {items.label}
                                                </h5>
                                            </li>
                                        </>
                                    );
                                })}
                                <li className="nav-item">
                                    <button
                                        className="btn btn-outline-primary"
                                        type="button"
                                        onClick={() => navigate("/cart")}
                                    >
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </button>
                                    <button
                                        className="btn btn-outline-primary ms-3 me-4"
                                        type="button"
                                        onClick={() => navigate("/authen")}
                                    >
                                        <i className="fa-solid fa-user"></i>
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={() => navigate("/course")}
                                    >
                                        Get started
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
