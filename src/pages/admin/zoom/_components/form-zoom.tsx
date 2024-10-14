import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../../../components/input";

import moment from "moment";

import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseStore } from "../../../../firebase-config";

import { message } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { keyCollection } from "../../../../constants/constants";
import { IZooms } from "../../../../types/types";

const defaultValue: IZooms = {
    id: "",
    meet_id: "",
    start_time: "",
    hours: "",
    host_by: "",
    title: "",
    created_at: moment().format(),
    created_by: "Hoang Kim Ngoc",
    date: "",
};

const FormZoom = ({ id }: { id: string }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState<IZooms>(defaultValue);

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

        const { id: zoom_id, ...data } = formData;

        if (zoom_id === "") {
            await addDoc(collection(firebaseStore, keyCollection.zoom), data);

            message.success("Create new zoom successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.zoom],
                refetchType: "all",
            });

            setFormData(defaultValue);
        } else {
            await setDoc(doc(firebaseStore, keyCollection.zoom, zoom_id), data);

            message.success("Update zoom successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.zoom],
                refetchType: "all",
            });

            setFormData(defaultValue);
        }
    };

    useEffect(() => {
        if (id !== "0") {
            getDoc(doc(collection(firebaseStore, keyCollection.zoom), id)).then(
                (snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.data() as IZooms;
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
                                    id="meet_id"
                                    label="Meet ID"
                                    name="meet_id"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    autofocus={true}
                                    value={formData.meet_id}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="start_time"
                                    label="Start Time"
                                    name="start_time"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="time"
                                    maxlength={100}
                                    autofocus={true}
                                    value={formData.start_time}
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
                                    id="host_by"
                                    name="host_by"
                                    label="Host By"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={250}
                                    value={formData.host_by}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="hours"
                                    name="hours"
                                    label="Hours"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={250}
                                    value={formData.hours}
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
                                {id === "0" ? "Create New Zoom" : "Update zoom"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormZoom;

const validateFormData = (data: IZooms) => {
    const errors: { [key: string]: string } = {};

    if (!data.title.trim()) {
        errors.title = "Title is required";
    }

    if (!data.meet_id.trim()) {
        errors.meet_id = "Meet ID is required";
    }

    if (!data.hours.trim()) {
        errors.hours = "Hours is required";
    }

    if (!data.host_by.trim()) {
        errors.host_by = "Host by is required";
    }

    if (!data.start_time.trim()) {
        errors.start_time = "Start time is required";
    }

    if (!data.date.trim()) {
        errors.date = "Date is required";
    }

    return errors;
};
