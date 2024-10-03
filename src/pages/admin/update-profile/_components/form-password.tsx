import Input from "../../../../components/input"

const FormPassword = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3 className="fw-bold">Update Your Password</h3>
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="mb-4">
                            <Input
                                id="currentpassword"
                                label="Current Password"
                                classnameDiv="form-floating mb-4"
                                classnameInput="form-control form-control-lg"
                                type="password"
                                maxlength={10}
                                readonly={true}
                                value={12334567}
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                id="newpassword"
                                label="New Password"
                                classnameDiv="form-floating mb-4"
                                classnameInput="form-control form-control-lg"
                                type="password"
                                maxlength={100}
                                autofocus={true}
                                value={111111111}
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                id="reenternewpassword"
                                label="Re-enter New Password"
                                classnameDiv="form-floating mb-4"
                                classnameInput="form-control form-control-lg"
                                type="password"
                                value={111111111}
                            />
                        </div>
                        <button className="btn btn-primary btn-lg w-100">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormPassword