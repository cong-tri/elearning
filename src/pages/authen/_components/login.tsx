import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { setCookie } from "typescript-cookie";
import { message, Modal } from "antd";
import { keyCollection, keyInfo, keyToken } from "../../../constants/constants";
import { auth, firebaseStore } from "../../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { IUsers } from "../../../types/types";

type Login = {
    email: string;
    password: string;
};

const defaultValue: Login = {
    email: "daocongtri20031609@gmail.com",
    password: "1234567",
};
const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<Login>(defaultValue);
    const [emailResetPassword, setEmailResetPassword] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await signInWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            if (response.user) {
                setFormData(defaultValue);

                const user = response.user;

                const token: string = await user.getIdToken();

                setCookie(keyToken, token, {
                    path: "/",
                    secure: false,
                    sameSite: "strict",
                    expires: 60 * 60 * 24,
                });

                const userDocRef = doc(firebaseStore, keyCollection.users, user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const data = userDoc.data() as IUsers;
                    data.id = userDoc.id;

                    setCookie(keyInfo, JSON.stringify(data), {
                        path: "/",
                        secure: false,
                        sameSite: "strict",
                        expires: 60 * 60 * 24,
                    });
                }
            }

            message.success("Login successfully", 2, () => navigate("/admin/home"));
        } catch (error) {
            if (error instanceof Error) {
                message.error(error.message);
                return;
            }
        }
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailResetPassword(e.target.value);
    };

    const handleSubmitResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(emailResetPassword);

        try {
            await sendPasswordResetEmail(auth, emailResetPassword)
            message.success("Password reset have been send email successfully!", 2);
        } catch (error) {
            if (error instanceof Error) {
                message.error("Error sending password reset email!")
                return
            }
        }

    }
    return (
        <>
            <h1 className="text-center fw-bold mb-3">Login</h1>
            <p className="text-secondary text-center">
                Don't have an account yet?{" "}
                <span className="text-primary fw-medium">Register for free</span>
            </p>
            <form action="" onSubmit={handleSubmit} className="mt-xl-4">
                <div className="mb-3 mb-xl-4">
                    <label htmlFor="email" className="form-label fs-4">
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
                <div className="mb-3 mb-xl-4">
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
                <div className="mb-3 mb-xl-4 text-end">
                    <p
                        className="text-secondary link-primary"
                        role="button"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Forgot your password?
                    </p>
                </div>
                <div className="">
                    <button className="btn btn-lg btn-primary w-100" type="submit">
                        Login
                    </button>
                </div>
            </form>
            <Modal
                title="Forgot your password ?"
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
            >
                <form action="" onSubmit={handleSubmitResetPassword} className="mt-xl-4">
                    <div className="mb-3 mb-xl-4">
                        <label htmlFor="email_reset" className="form-label fs-4">
                            Please enter your email to reset password
                        </label>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            name="email_reset"
                            id="email_reset"
                            aria-describedby="helpId"
                            onChange={handleChangePassword}
                            value={emailResetPassword}
                            placeholder={"Your email for reset password"}
                        />
                    </div>
                    <div className="">
                        <button className="btn btn-lg btn-primary w-100" type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default Login;
