import Input from "../../../../components/input";

import { Category } from "../../../../types/types";

import moment from "moment";

const FormAddNewCourse = ({ category }: { category: Category[] }) => {
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
                                    value={31}
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
                                    id="price"
                                    label="Price"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={10}
                                />
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <select
                                        className="form-select form-select-lg"
                                        name="tag"
                                        id="tag"
                                    >
                                        <option selected>Select tag</option>
                                        {category?.map((items) => {
                                            return (
                                                <>
                                                    <option value={items.type}>{items.title}</option>
                                                </>
                                            );
                                        })}
                                    </select>
                                    <label htmlFor="tag">Tag</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <select
                                        className="form-select form-select-lg"
                                        name="level"
                                        id="level"
                                    >
                                        <option selected>Select level</option>
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </select>
                                    <label htmlFor="level">Level</label>
                                </div>
                            </div>
                            <div className="col">
                                <Input
                                    id="lessons"
                                    label="Lessons"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="number"
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="image"
                                    label="Image Url"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
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
                            <div className="col">
                                <Input
                                    id="description"
                                    label="Description"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control h-100"
                                    rows={5}
                                    maxlength={250}
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

export default FormAddNewCourse;
