import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../../../components/input";

import { ICategory } from "../../../../types/types";

import moment from "moment";

import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseStore } from "../../../../firebase-config";

import { message } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { keyCollection } from "../../../../constants/constants";
import { MainContext } from "../../../../context/main-provider";

const defaultValue: ICategory = {
    id: "",
    category_id: "",
    title: "",
    type: "",
    created_at: moment().format(),
    created_by: "Dao Cong Tri",
};

const FormAddNewCategory = ({ id }: { id: string }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data } = useContext(MainContext)

    const [formData, setFormData] = useState<ICategory>(defaultValue);
    const [categoryId, setCategoryId] = useState<string>();

    useEffect(() => {
        if (!data?.categories) {
            return
        }
        const existingIds = data.categories
            .map((category) => parseInt(category.category_id))
            .filter((id) => !isNaN(id));
        const nextId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;
        setCategoryId(nextId.toString());
        console.log(nextId);
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

        const errors = validateFormData(formData);
        if (Object.keys(errors).length > 0) {
            Object.keys(errors).forEach((key) => {
                message.error(errors[key], 2);
            });
            return;
        }

        const { id: cate_id, ...data } = formData;
        if (!categoryId) {
            return
        }
        data.category_id = categoryId;

        if (cate_id === "") {
            await addDoc(collection(firebaseStore, keyCollection.categories), data);

            message.success("Create new category successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.categories],
                refetchType: "all",
            });
        } else {
            await setDoc(doc(firebaseStore, keyCollection.categories, cate_id), data);

            message.success("Update category successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.categories],
                refetchType: "all"
            })
        }
    };

    useEffect(() => {
        if (id !== "0") {
            getDoc(doc(collection(firebaseStore, keyCollection.categories), id)).then(
                (snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.data() as ICategory;
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
                                    id="category_id"
                                    name="category_id"
                                    label="Category ID"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={10}
                                    readonly={true}
                                    value={formData.category_id}
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
                                    id="type"
                                    name="type"
                                    label="Type"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    autofocus={true}
                                    value={formData.type}
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
                                {id === "0" ? "Create New Category" : "Update category"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormAddNewCategory;

const validateFormData = (data: ICategory) => {
    const errors: { [key: string]: string } = {};

    if (!data.title.trim()) {
        errors.title = "Title is required";
    }

    if (!data.type.trim()) {
        errors.tag = "Type is required";
    }

    return errors;
};