import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { ICategory, ICourses } from "../../../../types/types";

import moment from "moment";

import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseStore } from "../../../../firebase-config";

import Input from "../../../../components/input";
import { message } from "antd";

import { keyCollection } from "../../../../constants/constants";

const defaultValue: ICourses = {
    id: "",
    title: "",
    tag: "",
    level: "",
    lessons: 0,
    image: "",
    description: "",
    price: "",
    created_at: moment().format(),
    created_by: "",
}

const FormAddNewCourse = ({ category, id }: { category: ICategory[]; id: string }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState<ICourses>(defaultValue);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors = validateFormData(formData);
        if (Object.keys(errors).length > 0) {
            Object.keys(errors).forEach((key) => {
                message.error(errors[key], 2);
            });
            return;
        }

        const { id: cour_id, ...data } = formData;

        if (cour_id === "") {
            console.log(data);

            await addDoc(collection(firebaseStore, keyCollection.courses), data);
            message.success("Create new course successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.courses],
                refetchType: "all",
            });
            setFormData(defaultValue)
        } else {
            await setDoc(doc(firebaseStore, keyCollection.courses, cour_id), data);
            message.success("Update course successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.courses],
                refetchType: "all"
            })
            setFormData(defaultValue)
        }
    };

    useEffect(() => {
        if (id !== "0") {
            getDoc(doc(collection(firebaseStore, keyCollection.courses), id)).then(
                (snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.data() as ICourses;
                        data.id = snapshot.id;
                        console.log(data);

                        setFormData(data);
                    } else setFormData(defaultValue);
                }
            );
        }
    }, [id, navigate]);
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row row-cols-3">
                            <div className="col">
                                <Input
                                    id="title"
                                    name="title"
                                    label="Title"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    autofocus={true}
                                    onChange={handleChange}
                                    value={formData.title}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="price"
                                    name="price"
                                    label="Price"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    onChange={handleChange}
                                    value={formData.price}
                                />
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <select
                                        className="form-select form-select-lg"
                                        name="tag"
                                        id="tag"
                                        value={formData.tag}
                                        onChange={handleChange}
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
                                        onChange={handleChange}
                                        value={formData.level}
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
                                    name="lessons"
                                    label="Lessons"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="number"
                                    onChange={handleChange}
                                    value={formData.lessons}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="image"
                                    name="image"
                                    label="Image Url"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    value={formData.image}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="created_by"
                                    name="created_by"
                                    label="Create By"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    value={formData.created_by}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="created_at"
                                    name="created_at"
                                    label="Create At"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    value={formData.created_at as string}
                                    readonly={true}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="description"
                                    name="description"
                                    label="Description"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control h-100"
                                    rows={5}
                                    maxlength={250}
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary btn-lg w-100" type="submit">
                                {id === "0" ? "Create New Course" : "Update course"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormAddNewCourse;

const validateFormData = (data: ICourses) => {
    const errors: { [key: string]: string } = {};

    if (!data.title.trim()) {
        errors.title = "Title is required";
    }

    if (!data.price.trim()) {
        errors.price = "Price is required";
    } else if (isNaN(Number(data.price)) || Number(data.price) < 0) {
        errors.price = "Price must be a valid number and non-negative";
    }

    if (!data.tag.trim()) {
        errors.tag = "Tag is required";
    }

    if (!data.level.trim()) {
        errors.level = "Level is required";
    }

    if (data.lessons < 1) {
        errors.lessons = "Lessons must be at least 1";
    }

    if (!data.image.trim()) {
        errors.image = "Image URL is required";
    }

    if (!data.description.trim()) {
        errors.description = "Description is required";
    } else if (data.description.length > 250) {
        errors.description = "Description must be 250 characters or less";
    }

    return errors;
};
