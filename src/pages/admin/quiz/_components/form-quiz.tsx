import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../../../components/input";

import { IQuizs } from "../../../../types/types";

import moment from "moment";

import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseStore } from "../../../../firebase-config";

import { message } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { keyCollection } from "../../../../constants/constants";

const defaultValue: IQuizs = {
    id: "",
    attemps: 0,
    created_at: moment().format(),
    created_by: "Ngo Quoc Linh",
    start_time: "",
    end_time: "",
    host_by: "",
    questions: 0,
    type: "",
    title: "",
};

const FormQuiz = ({ id }: { id: string }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState<IQuizs>(defaultValue);

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

        const { id: qui_id, ...data } = formData;

        if (qui_id === "") {
            await addDoc(collection(firebaseStore, keyCollection.quizs), data);

            message.success("Create new quiz successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.quizs],
                refetchType: "all",
            });
        } else {
            await setDoc(doc(firebaseStore, keyCollection.quizs, qui_id), data);

            message.success("Update quiz successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.quizs],
                refetchType: "all",
            });
        }
    };

    useEffect(() => {
        if (id !== "0") {
            getDoc(doc(collection(firebaseStore, keyCollection.quizs), id)).then(
                (snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.data() as IQuizs;
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
                                    id="attemps"
                                    name="attemps"
                                    label="Attemps"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="number"
                                    value={formData.attemps}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="questions"
                                    name="questions"
                                    label="Questions"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="number"
                                    value={formData.questions}
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
                                    value={formData.type}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="host_by"
                                    name="host_by"
                                    label="Host_by"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    value={formData.host_by}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="start_time"
                                    name="start_time"
                                    label="Start Time"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="time"
                                    value={formData.start_time}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="end_time"
                                    name="end_time"
                                    label="End Time"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="time"
                                    value={formData.end_time}
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
                                {id === "0" ? "Create New Quiz" : "Update quiz"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormQuiz;

const validateFormData = (data: IQuizs) => {
    const errors: { [key: string]: string } = {};

    if (!data.title.trim()) {
        errors.title = "Title is required";
    }
    if (data.attemps <= 0) {
        errors.attemps = "Attemps must be greater 0";
    }
    if (data.questions <= 0) {
        errors.questions = "Questions must be greater 0";
    }
    if (!data.type.trim()) {
        errors.type = "Type is required";
    }
    if (!data.host_by.trim()) {
        errors.host_by = "Host_by is required";
    }
    if (!data.start_time.trim()) {
        errors.start_time = "Start_time is required";
    }
    if (!data.end_time.trim()) {
        errors.end_time = "End_time is required";
    }

    return errors;
};
