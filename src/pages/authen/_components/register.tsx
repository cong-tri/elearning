import React, { useState } from "react";

import { message } from "antd";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firebaseStore } from "../../../firebase-config";

import { keyCollection } from "../../../constants/constants";
import { IUsers } from "../../../types/types";

import moment from "moment";

type InputRegister = {
    email: string;
    password: string;
    confirmpassword: string;
};
const defaultValue: InputRegister = {
    email: "",
    password: "",
    confirmpassword: "",
};
const Register = () => {
    const [formData, setFormData] = useState<InputRegister>(defaultValue);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.email === "" || formData.password === "" || formData.confirmpassword === "") {
            message.error("Please entered full field.")
            return
        }

        if (formData.password !== formData.confirmpassword) {
            message.error("Your password and confirm password are not correct.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );
            const user = userCredential.user;

            const username = formData.email.replace("@gmail.com", "");

            const newUser: IUsers = {
                address: "",
                user_id: user.uid,
                code: "",
                id: "",
                email: formData.email,
                username,
                name: { firstname: "", lastname: "" },
                phone: "",
                created_at: moment().format(),
                created_by: "Dao Cong Tri",
                role: "user",
                description: "",
                carts: []
            };
            const { id, ...data } = newUser;

            await setDoc(doc(firebaseStore, keyCollection.users, user.uid), data);

            message.success(
                "Successfully created account. Please login to signin!",
                2,
                () => setFormData(defaultValue)
            );
        } catch (error) {
            console.error("Error during registration:", error);

            if (error instanceof Error) {
                message.error(error.message)
            }
        }
    };
    return (
        <>
            <h1 className="text-center fw-bold mb-3">Register</h1>
            <p className="text-secondary text-center">
                Already have an account?{" "}
                <span className="text-primary fw-medium">Login</span>
            </p>
            <form action="" className="mt-xl-4" onSubmit={handleSubmit}>
                <div className="">
                    <div className="mb-xl-4">
                        <label htmlFor="username" className="form-label fs-4">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            name="email"
                            id="email"
                            aria-describedby="helpId"
                            onChange={handleChange}
                            value={formData.email}
                            placeholder={"Your email"}
                        />
                    </div>
                    <div className="mb-xl-4">
                        <label htmlFor="password" className="form-label fs-4">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            name="password"
                            id="password"
                            aria-describedby="helpId"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder={"Your password"}
                        />
                    </div>
                    <div className="mb-xl-4">
                        <label htmlFor="confirmpassword" className="form-label fs-4">
                            Confirm password
                        </label>
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            name="confirmpassword"
                            id="confirmpassword"
                            value={formData.confirmpassword}
                            onChange={handleChange}
                            placeholder={"Your confirm password"}
                        />
                    </div>
                </div>
                <div className="form-check mb-4">
                    <div>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            value={"check"}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Accept the Terms and Privacy Policy
                        </label>
                    </div>
                </div>
                <div className="">
                    <button className="btn btn-lg btn-primary w-100" type="submit">
                        Register
                    </button>
                </div>
            </form>
        </>
    );
};

export default Register;
