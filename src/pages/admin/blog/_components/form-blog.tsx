
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { AdminContext } from "../../../../context/admin-provider";

import Input from "../../../../components/input";

import { IBlogs } from "../../../../types/types";

import moment from "moment";

import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseStore } from "../../../../firebase-config";

import { message } from "antd";

import { keyCollection } from "../../../../constants/constants";

const defaultValue: IBlogs = {
    id: "",
    title: "",
    content_1: "",
    content_2: "",
    content_3: "",
    label_1: "",
    label_2: "",
    created_at: moment().format(),
    created_by: "Dao Cong Tri",
    date: "",
};

const FormBlog = ({ id }: { id: string }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: admin } = useContext(AdminContext)

    const [formData, setFormData] = useState<IBlogs>(defaultValue);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        const errors = validateFormData(formData);
        if (Object.keys(errors).length > 0) {
            Object.keys(errors).forEach((key) => {
                message.error(errors[key], 2);
            });
            return;
        }

        const { id: blo_id, ...data } = formData;

        if (blo_id === "") {
            await addDoc(collection(firebaseStore, keyCollection.blogs), data);

            message.success("Create new blog successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.blogs],
                refetchType: "all",
            });

            setFormData(defaultValue);
            admin?.handleCloseModal()
        } else {
            await setDoc(doc(firebaseStore, keyCollection.blogs, blo_id), data);

            message.success("Update blog successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.blogs],
                refetchType: "all",
            });

            setFormData(defaultValue);
            admin?.handleCloseModal()
        }
    };

    useEffect(() => {
        if (id !== "0") {
            getDoc(doc(collection(firebaseStore, keyCollection.blogs), id)).then(
                (snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.data() as IBlogs;
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
                                    label="Title"
                                    name="title"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    autofocus={true}
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="label_1"
                                    label="Label 1"
                                    name="label_1"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    value={formData.label_1}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="label_2"
                                    label="Label 2"
                                    name="label_2"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    value={formData.label_2}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12">
                                <Input
                                    id="content_1"
                                    name="content_1"
                                    label="Content 1"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg h-100"
                                    rows={4}
                                    maxlength={250}
                                    value={formData.content_1}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12">
                                <Input
                                    id="content_2"
                                    name="content_2"
                                    label="Content 2"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg h-100"
                                    rows={4}
                                    maxlength={250}
                                    value={formData.content_2}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-12">
                                <Input
                                    id="content_3"
                                    name="content_3"
                                    label="Content 3"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg h-100"
                                    rows={4}
                                    maxlength={250}
                                    value={formData.content_3}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="date"
                                    name="date"
                                    label="Date"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="date"
                                    maxlength={100}
                                    value={formData.date}
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
                                    readonly={true}
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
                                    onChange={handleChange}
                                    readonly={true}
                                />
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary btn-lg w-100" type="submit">
                                {id === "0" ? "Create New Blog" : "Update blog"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormBlog;

const validateFormData = (data: IBlogs) => {
    const errors: { [key: string]: string } = {};

    if (!data.title.trim()) {
        errors.title = "Title is required";
    }

    if (
        !data.content_1.trim() ||
        !data.content_2.trim() ||
        !data.content_3.trim()
    ) {
        errors.content = "Contents is required";
    }

    if (!data.label_1.trim() || !data.label_2.trim()) {
        errors.content = "Labels is required";
    }

    return errors;
};