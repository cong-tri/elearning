import Input from "../../../../components/input";
import moment from "moment";

const FormAddNewCategory = () => {
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
                                    value={6}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="title"
                                    label="Title"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    autofocus={true}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="type"
                                    label="Type"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={10}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="createBy"
                                    label="Create By"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    readonly={true}
                                    value={"Dao Cong Tri"}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="createAt"
                                    label="Create At"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    value={moment().format()}
                                    readonly={true}
                                />
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary btn-lg w-100" type="button">
                                Create New Category
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormAddNewCategory;
