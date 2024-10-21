import { useContext, useEffect, useState } from "react";

import Input from "../../../../components/input";

import { IEvents } from "../../../../types/types";

import moment from "moment";

import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseStore } from "../../../../firebase-config";

import { message } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { keyCollection } from "../../../../constants/constants";
import { AdminContext } from "../../../../context/admin-provider";

type InputEvent = {
    id: string;
    content_first: string;
    content_second: string;
    created_at: Date | string;
    created_by: string;
    date: string;
    label_first: string;
    label_second: string;
    title: string;
};

const defaultValue: InputEvent = {
    id: "",
    content_first: "",
    content_second: "",
    created_at: moment().format(),
    created_by: "Ngo Quoc Linh",
    date: "",
    label_first: "",
    label_second: "",
    title: "",
};

const FormEvent = ({ id }: { id: string }) => {
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState<InputEvent>(defaultValue);
    const { data: admin } = useContext(AdminContext)

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

        const valueInput: IEvents = {
            id: formData.id,
            content: {
                content_first: formData.content_first,
                content_second: formData.content_second,
            },
            label: {
                label_first: formData.label_first,
                label_second: formData.label_second,
            },
            created_at: formData.created_at,
            created_by: formData.created_by,
            date: formData.date,
            title: formData.title,
        };
        const { id: eve_id, ...data } = valueInput;

        if (eve_id === "") {
            await addDoc(collection(firebaseStore, keyCollection.events), data);

            message.success("Create new event successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.events],
                refetchType: "all",
            });

            setFormData(defaultValue);
            admin?.handleCloseModal();

        } else {
            await setDoc(doc(firebaseStore, keyCollection.events, eve_id), data);

            message.success("Update event successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.events],
                refetchType: "all",
            });

            setFormData(defaultValue)
            admin?.handleCloseModal();
        }
    };

    useEffect(() => {
        if (id !== "0") {
            getDoc(doc(collection(firebaseStore, keyCollection.events), id)).then(
                (snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.data() as IEvents;
                        data.id = snapshot.id;

                        const valueInput: InputEvent = {
                            id: data.id,
                            content_first: data.content.content_first,
                            content_second: data.content.content_second,
                            created_at: data.created_at,
                            created_by: data.created_by,
                            date: data.date,
                            label_first: data.label.label_first,
                            label_second: data.label.label_second,
                            title: data.title,
                        };
                        setFormData(valueInput);
                    } else setFormData(defaultValue);
                }
            );
        }
    }, [id]);

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
                        </div>
                        <div>
                            <button className="btn btn-primary btn-lg w-100" type="submit">
                                {id === "0" ? "Create New Event" : "Update event"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormEvent;

const validateFormData = (data: InputEvent) => {
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