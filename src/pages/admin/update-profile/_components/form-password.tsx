import { useState } from "react";
import Input from "../../../../components/input";
import { message } from "antd";
import { EmailAuthProvider, getAuth, reauthenticateWithCredential, updatePassword } from "firebase/auth";

type InputConfirmPassword = {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
};
const defaultValue: InputConfirmPassword = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
};
const FormPassword = () => {
    const auth = getAuth()
    const user = auth.currentUser;

    const [formData, setFormData] = useState<InputConfirmPassword>(defaultValue);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        if (!user) {
            throw new Error("No user is currently logged in.");
        }

        if (
            formData.currentPassword.trim() !== "" ||
            formData.newPassword.trim() !== "" ||
            formData.confirmNewPassword.trim()
        ) {
            message.error("Please enter full of field!")

            if (formData.newPassword !== formData.confirmNewPassword) {
                message.error("New password not match confirm password!");
                return
            }
        }

        const credential = EmailAuthProvider.credential(user.email!, formData.currentPassword);
        try {
            await reauthenticateWithCredential(user, credential);

        } catch (error) {

            if (error instanceof Error) {
                message.error("Re-authentication failed. Please check your current password.")
            }
        }

        try {
            await updatePassword(user, formData.newPassword);
            message.success("Password changed successfully!", 2);

        } catch (error) {
            if (error instanceof Error) {
                message.error(error.message || "Failed to change password. Please try again.");
                return
            }
        }
    };
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3 className="fw-bold">Update Your Password</h3>
                </div>
                <div className="card-body">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <Input
                                id="currentPassword"
                                name="currentPassword"
                                label="Current Password"
                                classnameDiv="form-floating mb-4"
                                classnameInput="form-control form-control-lg"
                                type="password"
                                onChange={handleChange}
                                value={formData.currentPassword}
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                id="newPassword"
                                name="newPassword"
                                label="New Password"
                                classnameDiv="form-floating mb-4"
                                classnameInput="form-control form-control-lg"
                                type="password"
                                value={formData.newPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                id="confirmNewPassword"
                                name="confirmNewPassword"
                                label="Re-enter New Password"
                                classnameDiv="form-floating mb-4"
                                classnameInput="form-control form-control-lg"
                                type="password"
                                value={formData.confirmNewPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-primary btn-lg w-100">
                            Save password
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormPassword;
