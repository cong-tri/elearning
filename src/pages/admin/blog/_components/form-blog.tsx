
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../../../components/input";

import { IBlogs } from "../../../../types/types";

import moment from "moment";

import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseStore } from "../../../../firebase-config";

import { message } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { keyCollection } from "../../../../constants/constants";
import { MainContext } from "../../../../context/main-provider";

const defaultValue: IBlogs = {
    id: "",
    blog_id: "",
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

    const { data } = useContext(MainContext);

    const [formData, setFormData] = useState<IBlogs>(defaultValue);
    const [blogID, setBlogID] = useState<string>();

    useEffect(() => {
        if (!data?.blogs) {
            return;
        }
        const existingIds = data.blogs
            .map((blog) => parseInt(blog.blog_id))
            .filter((id) => !isNaN(id));
        const nextId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;

        setBlogID(nextId.toString());
    }, [data]);

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
        if (!blogID) {
            return;
        }

        data.blog_id = blogID;

        if (blo_id === "") {
            await addDoc(collection(firebaseStore, keyCollection.blogs), data);

            message.success("Create new blog successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.blogs],
                refetchType: "all",
            });
        } else {
            await setDoc(doc(firebaseStore, keyCollection.blogs, blo_id), data);

            message.success("Update blog successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.blogs],
                refetchType: "all",
            });
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
                                    id="blog_id"
                                    name="blog_id"
                                    label="Blog ID"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={10}
                                    readonly={true}
                                    value={formData.blog_id}
                                    onChange={handleChange}
                                />
                            </div>
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
                                    id="date"
                                    name="date"
                                    label="Date"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    value={formData.date}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
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
                            <div className="col">
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
                            <div className="col">
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