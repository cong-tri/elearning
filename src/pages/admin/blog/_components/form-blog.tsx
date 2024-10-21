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

type InputBlog = {
    id: string;
    content_first: string;
    content_second: string;
    content_third?: string;
    content_four?: string;
    created_at: Date | string;
    created_by: string;
    date: string;
    label_first: string;
    label_second: string;
    label_third?: string;
    label_four?: string;
    title: string;
};

const defaultValue: InputBlog = {
    id: "",
    content_first: "",
    content_second: "",
    content_third: "",
    content_four: "",
    created_at: moment().format(),
    created_by: "Ngo Quoc Linh",
    date: "",
    label_first: "",
    label_second: "",
    label_third: "",
    label_four: "",
    title: "",
};

const FormBlog = ({ id }: { id: string }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: admin } = useContext(AdminContext);

    const [formData, setFormData] = useState<InputBlog>(defaultValue);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
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

        const valueInput: IBlogs = {
            id: formData.id,
            content: {
                content_first: formData.content_first,
                content_second: formData.content_second,
                content_third: formData.content_third,
                content_four: formData.content_four,
            },
            label: {
                label_first: formData.label_first,
                label_second: formData.label_second,
                label_third: formData.label_third,
                label_four: formData.label_four,
            },
            created_at: formData.created_at,
            created_by: formData.created_by,
            date: formData.date,
            title: formData.title,
        };
        const { id: blo_id, ...data } = valueInput;

        if (blo_id === "") {
            await addDoc(collection(firebaseStore, keyCollection.blogs), data);

            message.success("Create new blog successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.blogs],
                refetchType: "all",
            });

            setFormData(defaultValue);
            admin?.handleCloseModal();

        } else {
            await setDoc(doc(firebaseStore, keyCollection.blogs, blo_id), data);

            message.success("Update blog successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.blogs],
                refetchType: "all",
            });

            setFormData(defaultValue);
            admin?.handleCloseModal();
        }
    };

    useEffect(() => {
        if (id !== "0") {
            getDoc(doc(collection(firebaseStore, keyCollection.blogs), id)).then(
                (snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.data() as IBlogs;
                        data.id = snapshot.id;

                        const valueInput: InputBlog = {
                            id: data.id,
                            content_first: data.content.content_first,
                            content_second: data.content.content_second,
                            content_third: data.content.content_third,
                            content_four: data.content.content_four,
                            created_at: data.created_at,
                            created_by: data.created_by,
                            date: data.date,
                            label_first: data.label.label_first,
                            label_second: data.label.label_second,
                            label_third: data.label.label_third,
                            label_four: data.label.label_four,
                            title: data.title,
                        };

                        setFormData(valueInput);
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
                                    id="label_first"
                                    label="Label First"
                                    name="label_first"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    value={formData.label_first}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="label_second"
                                    label="Label Second"
                                    name="label_second"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    value={formData.label_second}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="label_third"
                                    label="Label Third"
                                    name="label_third"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    value={formData.label_third}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="label_four"
                                    label="Label Four"
                                    name="label_four"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    value={formData.label_four}
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
                                    onChange={handleChange}
                                    readonly={true}
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
                            <div className="col-6">
                                <Input
                                    id="content_first"
                                    name="content_first"
                                    label="Content First"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg h-100"
                                    rows={4}
                                    maxlength={250}
                                    value={formData.content_first}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-6">
                                <Input
                                    id="content_second"
                                    name="content_second"
                                    label="Content Second"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg h-100"
                                    rows={4}
                                    maxlength={250}
                                    value={formData.content_second}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-6">
                                <Input
                                    id="content_third"
                                    name="content_third"
                                    label="Content Third"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg h-100"
                                    rows={4}
                                    maxlength={250}
                                    value={formData.content_third}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-6">
                                <Input
                                    id="content_four"
                                    name="content_four"
                                    label="Content Four"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg h-100"
                                    rows={4}
                                    maxlength={250}
                                    value={formData.content_four}
                                    onChange={handleChange}
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

const validateFormData = (data: InputBlog) => {
    const errors: { [key: string]: string } = {};

    if (!data.title.trim()) {
        errors.title = "Title is required";
    }

    if (!data.content_first.trim() || !data.content_second.trim()) {
        errors.content = "Contents is required";
    }

    if (!data.label_first.trim() || !data.label_second.trim()) {
        errors.label = "Labels is required";
    }

    return errors;
};
