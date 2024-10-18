import { useContext, useState, useEffect } from "react";

import { MainContext } from "../../../../context/main-provider";

import Input from "../../../../components/input"

import moment from "moment";

import { message } from "antd";

import { InputUser, IUsers } from "../../../../types/types";
import { doc, updateDoc } from "firebase/firestore";
import { firebaseStore } from "../../../../firebase-config";
import { keyCollection, keyInfo } from "../../../../constants/constants";
import { setCookie } from "typescript-cookie";

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
    description: ""
}

const FormProfile = () => {
    const { userProfile } = useContext(MainContext)

    const [formData, setFormData] = useState<InputUser>(defaultValue);

    useEffect(() => {
        if (!userProfile) return

        const value: InputUser = {
            id: userProfile.id,
            user_id: userProfile.user_id,
            code: userProfile.code,
            address: userProfile.address,
            email: userProfile.email,
            username: userProfile.username,
            firstname: userProfile.name.firstname,
            lastname: userProfile.name.lastname,
            phone: userProfile.phone,
            role: userProfile.role,
            created_at: userProfile.created_at,
            created_by: userProfile.created_by,
            description: userProfile.description
        }

        setFormData(value)
    }, [userProfile])

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(formData);

        const errors = validateFormData(formData);
        if (Object.keys(errors).length > 0) {
            Object.keys(errors).forEach((key) => {
                message.error(errors[key], 2);
            });
            return;
        }

        if (!userProfile || !userProfile.id) {
            message.error("User is not authorized!");
            return
        }

        const dataUser: IUsers = {
            id: formData.id,
            user_id: formData.user_id,
            code: formData.code,
            address: formData.address,
            email: formData.email,
            username: formData.username,
            name: {
                firstname: formData.firstname,
                lastname: formData.lastname,
            },
            phone: formData.phone,
            role: formData.role,
            created_at: formData.created_at,
            created_by: formData.created_by,
            description: formData.description
        }

        const { id: uid, ...data } = dataUser

        try {
            await updateDoc(doc(firebaseStore, keyCollection.users, uid), data);

            setCookie(keyInfo, JSON.stringify(data), {
                path: "/", secure: false,
                sameSite: "strict",
                expires: 60 * 60 * 24,
            })

            message.success("Successfully updated user's profile!", 2);

        } catch (error) {
            if (error instanceof Error) {
                message.error(error.message, 2)
            }
        }

    }
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3 className="fw-bold">Update Your Profile</h3>
                </div>
                <div className="card-body">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row row-cols-2">
                            <div className="col">
                                <Input
                                    id="code"
                                    name="code"
                                    label="Code"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    onChange={handleChange}
                                    readonly
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
                                    onChange={handleChange}
                                    autofocus={true}
                                    value={formData.username}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="email"
                                    name="email"
                                    label="Email"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                            </div>
                            <div className="col">
                                <Input
                                    id="phone"
                                    name="phone"
                                    label="Phone"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="tel"
                                    value={formData.phone}
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
                                    id="firstname"
                                    name="firstname"
                                    label="Firstname"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    type="text"
                                    value={formData.firstname}
                                    onChange={handleChange}
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
                                    id="role"
                                    name="role"
                                    label="Role"
                                    type="text"
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg"
                                    readonly
                                    onChange={handleChange}
                                    value={formData.role}
                                />
                            </div>
                            <div className="col-12">
                                <Input
                                    id="desc"
                                    name="desc"
                                    label="Description"
                                    rows={5}
                                    classnameDiv="form-floating mb-4"
                                    classnameInput="form-control form-control-lg h-100"
                                    value={formData.description}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary btn-lg w-100" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormProfile

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