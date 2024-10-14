import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setCookie } from "typescript-cookie";
import { message } from "antd";
import { keyInfo, keyToken } from "../../../constants/constants";

type Login = {
    email: string;
    password: string;
};

const defaultValue: Login = {
    email: "daocongtri20031609@gmail.com",
    password: "123456",
}
const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<Login>(defaultValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const auth = getAuth();
        const response = await signInWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
        );

        if (response.user) {
            setFormData(defaultValue)

            const user = response.user;

            const token: string = await user.getIdToken()

            const userInfo = {
                email: user.email,
                uid: user.uid
            }

            if (typeof window !== "undefined") {
                setCookie(keyToken, token, {
                    path: "/",
                    secure: false,
                    sameSite: "strict",
                    expires: 60 * 60 * 24
                });

                setCookie(keyInfo, JSON.stringify(userInfo), {
                    path: "/",
                    secure: false,
                    sameSite: "strict",
                    expires: 60 * 60 * 24
                });
            } else {
                console.log("Yout window don't support");
                return
            }

            message.success("Login successfully", 2, () => navigate("/admin/home"))
        } else {
            message.error("Login unsuccessfully", 2, () => navigate("/authen"))
        }
    };

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
                    <p className="text-secondary link-primary" role="button">
                        Forgot your password?
                    </p>
                </div>
                <div className="">
                    <button className="btn btn-lg btn-primary w-100" type="submit">
                        Login
                    </button>
                </div>
            </form>
        </>
    );
};

export default Login;
