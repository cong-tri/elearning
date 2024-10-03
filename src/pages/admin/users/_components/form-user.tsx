import Input from "../../../../components/input";

const FormAddNewUser = () => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <form action="">
                        <div className="row row-cols-3">
                            <div className="col">
                                <Input
                                    id="id"
                                    label="ID"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={10}
                                    readonly={true}
                                    value={11}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="username"
                                    label="Username"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    autofocus={true}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="password"
                                    label="Password"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="password"
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="phone"
                                    label="Phone"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="tel"
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="firstname"
                                    label="Firstname"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="lastname"
                                    label="Lastname"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="city"
                                    label="City"
                                    type="text"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="street"
                                    label="Street"
                                    type="text"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="number"
                                    label="Number"
                                    type="number"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="zipcode"
                                    label="Zipcode"
                                    type="text"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary btn-lg w-100" type="button">
                                Create New Course
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormAddNewUser;
