import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setCookie } from "typescript-cookie";

type Login = {
    username: string;
    password: string;
};

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<Login>({
        username: "daocongtri20031609@gmail.com",
        password: "123456",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const auth = getAuth();
        const response = await signInWithEmailAndPassword(
            auth,
            formData.username,
            formData.password
        );
        console.log(response);

        if (response.user) {
            if (typeof window !== "undefined")
                setCookie("userInfo", JSON.stringify(response.user), {
                    path: "/",
                    secure: false,
                    sameSite: "strict",
                    expires: 3600
                });
            navigate("/admin/home");
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
                    <label htmlFor="username" className="form-label fs-4">
                        Username or Email
                    </label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        name="username"
                        id="username"
                        aria-describedby="helpId"
                        onChange={handleChange}
                        value={formData.username}
                        placeholder={"Your username or email"}
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
