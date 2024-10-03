import FormPassword from "./_components/form-password";
import FormProfile from "./_components/form-profile";

const AdminUpdateProfile = () => {
    return (
        <>
            <div className="border-bottom pb-4">
                <h2 className="fw-bold">My Profile</h2>
            </div>
            <div className="mt-4">
                <ul className="nav nav-pills mb-3 text-center" id="pills-tab" role="tablist">
                    <li className="nav-item w-25 shadow-lg rounded-2" role="presentation">
                        <button
                            className="nav-link active w-100 py-4 fs-3"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="true"
                        >
                            Profile
                        </button>
                    </li>
                    <li className="nav-item w-25 ms-4 shadow-lg rounded-2" role="presentation">
                        <button
                            className="nav-link w-100 py-4 fs-3"
                            id="pills-password-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-password"
                            type="button"
                            role="tab"
                            aria-controls="pills-password"
                            aria-selected="false"
                        >
                            Password
                        </button>
                    </li>
                </ul>
                <div className="tab-content mt-5" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabIndex={0}
                    >
                        <FormProfile />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-password"
                        role="tabpanel"
                        aria-labelledby="pills-password-tab"
                        tabIndex={0}
                    >
                        <FormPassword />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminUpdateProfile;
