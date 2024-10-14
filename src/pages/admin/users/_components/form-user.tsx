import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { IUsers } from "../../../../types/types";

import moment from "moment";

import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseStore } from "../../../../firebase-config";

import Input from "../../../../components/input";
import { message } from "antd";

import { keyCollection } from "../../../../constants/constants";

type InputUser = {
    id: string;
    user_id: string;
    code: string;
    address: string;
    email: string;
    username: string;
    firstname: string;
    lastname: string;
    phone: string;
    role: "admin" | "user",
    created_at: Date | string,
    created_by: string,
}

const defaultValue: InputUser = {
    id: "",
    user_id: "",
    code: "",
    address: "",
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    phone: "",
    role: "user",
    created_at: moment().format(),
    created_by: "Dao Cong Tri",
}

const FormUser = ({ id }: { id: string }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [formData, setFormData] = useState<InputUser>(defaultValue);

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


        const newData: IUsers = {
            address: formData.address,
            user_id: formData.user_id,
            code: formData.code,
            id: formData.id,
            email: formData.email,
            username: formData.username,
            name: {
                firstname: formData.firstname,
                lastname: formData.lastname,
            },
            phone: formData.phone,
            created_at: formData.created_at,
            created_by: formData.created_by,
            role: formData.role
        }
        console.log(formData);

        const { id: userID, ...data } = newData;
        if (userID === "") {
            console.log(data);

            await addDoc(collection(firebaseStore, keyCollection.users), data);
            message.success("Create new user successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.users],
                refetchType: "all",
            });
            setFormData(defaultValue)
        } else {
            await setDoc(doc(firebaseStore, keyCollection.users, userID), data);
            message.success("Update user successfully", 2);

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.users],
                refetchType: "all"
            })
            setFormData(defaultValue)
        }
    };

    useEffect(() => {
        if (!id) return
        if (id !== "0") {
            getDoc(doc(collection(firebaseStore, keyCollection.users), id)).then(
                (snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.data() as IUsers;
                        data.id = snapshot.id;
                        console.log(data);

                        const inputValue: InputUser = {
                            id: data.id,
                            user_id: data.user_id,
                            code: data.code,
                            address: data.address,
                            email: data.email,
                            username: data.username,
                            firstname: data.name.firstname,
                            lastname: data.name.lastname,
                            phone: data.phone,
                            role: data.role,
                            created_at: data.created_at,
                            created_by: data.created_by,
                        }

                        setFormData(inputValue);
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
                                    id="code"
                                    name="code"
                                    label="Code"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    autofocus={true}
                                    onChange={handleChange}
                                    value={formData.code}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="username"
                                    name="username"
                                    label="Username"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    maxlength={100}
                                    autofocus={true}
                                    onChange={handleChange}
                                    value={formData.username}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="email"
                                    name="email"
                                    label="email"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                            </div>
                            <div className="col">
                                <div className="form-floating">
                                    <select
                                        className="form-select form-select-lg"
                                        name="role"
                                        id="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                    >
                                        <option selected>Select role</option>
                                        <option value={"admin"}>Admin</option>
                                        <option value={"user"}>User</option>
                                    </select>
                                    <label htmlFor="tag">Role</label>
                                </div>
                            </div>
                            <div className="col">
                                <Input
                                    id="phone"
                                    name="phone"
                                    label="Phone"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="tel"
                                    onChange={handleChange}
                                    value={formData.phone}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="firstname"
                                    name="firstname"
                                    label="Firstname"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    onChange={handleChange}
                                    value={formData.firstname}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="lastname"
                                    name="lastname"
                                    label="Lastname"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="address"
                                    name="address"
                                    label="Address"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    value={formData.address}
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
                        </div>
                        <div>
                            <button className="btn btn-primary btn-lg w-100" type="submit">
                                {id === "0" ? "Create New User" : "Update user"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormUser;

const validateFormData = (data: InputUser) => {
    const errors: { [key: string]: string } = {};

    if (!data.username.trim()) {
        errors.username = "Username is required";
    }
    if (!data.code.trim()) {
        errors.code = "Code is required";
    }
    if (!data.address.trim()) {
        errors.address = "Address is required";
    }
    if (!data.firstname.trim()) {
        errors.firstname = "Firstname is required";
    }
    if (!data.lastname.trim()) {
        errors.lastname = "Lastname is required";
    }
    if (!data.phone.trim()) {
        errors.phone = "Phone is required";
    }
    if (!data.role.trim()) {
        errors.role = "Role is required";
    }
    return errors;
};
