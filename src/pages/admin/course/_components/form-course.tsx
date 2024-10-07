import { useContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { ICategory, ICourses } from "../../../../types/types";

import moment from "moment";

import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseStore } from "../../../../firebase-config";

import Input from "../../../../components/input";
import { message } from "antd";

import { keyCollection } from "../../../../constants/constants";
import { MainContext } from "../../../../context/main-provider";

const defaultValue: ICourses = {
    id: "",
    course_id: "",
    title: "",
    tag: "",
    level: "",
    lessons: 0,
    image: "",
    description: "",
    price: "",
    createAt: moment().format(),
    createBy: "Dao Cong Tri",
}

const FormAddNewCourse = ({ category, id }: { category: ICategory[]; id: string }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { data } = useContext(MainContext)

    const [formData, setFormData] = useState<ICourses>(defaultValue);
    const [userId, setUserId] = useState<string>();

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
    };

    useEffect(() => {
        if (!data?.course) {
            return
        }
        const existingIds = data.course
            .map((courses) => parseInt(courses.course_id))
            .filter((id) => !isNaN(id));
        const nextId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;
        setUserId(nextId.toString());
        console.log(nextId);
    }, [data]);


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
        if (!userId) {
            return
        }

        data.course_id = userId
        console.log(data);

        if (cour_id === "") {
            await addDoc(collection(firebaseStore, keyCollection.courses), data);
            message.success("Create new course successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.courses],
                refetchType: "all",
            });
        } else {
            await setDoc(doc(firebaseStore, keyCollection.courses, cour_id), data);
            message.success("Update course successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.courses],
                refetchType: "all"
            })
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
                                    id="course_id"
                                    label="ID"
                                    name="course_id"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={10}
                                    readonly={true}
                                    value={formData.course_id}
                                    onChange={handleChange}
                                />
                            </div>
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
                                    id="createBy"
                                    name="createBy"
                                    label="Create By"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    value={formData.createBy}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="createAt"
                                    name="createAt"
                                    label="Create At"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    value={formData.createAt as string}
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

    // if (!data.course_id.trim()) {
    //     errors.course_id = "Course ID is required";
    // } else if (data.course_id.length > 10) {
    //     errors.course_id = "Course ID must be 10 characters or less";
    // }

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
