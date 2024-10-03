import Input from "../../../../components/input"

const FormProfile = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3 className="fw-bold">Update Your Profile</h3>
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="row row-cols-2">
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
                                    value={"Dao Cong Tri"}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="password"
                                    label="Password"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="password"
                                    value={"123456"}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="phone"
                                    label="Phone"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="tel"
                                    value={"0326034561"}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="firstname"
                                    label="Firstname"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    value={"Dao Cong"}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="lastname"
                                    label="Lastname"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    value={"Tri"}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="city"
                                    label="City"
                                    type="text"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    value={"Ho Chi Minh"}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="street"
                                    label="Street"
                                    type="text"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    value={"Le Duc Tho"}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="number"
                                    label="Number"
                                    type="number"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    value={"999"}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="zipcode"
                                    label="Zipcode"
                                    type="text"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    value={"xxxxxxxx"}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="desc"
                                    label="Description"
                                    rows={5}
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg h-100"
                                    value={"Not thing special"}
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary btn-lg w-100">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormProfile