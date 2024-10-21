import React, { ReactNode, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { MainContext } from "../../context/main-provider";
import { getCookie } from "typescript-cookie";
import { key } from "../../constants/constants";
import { message } from "antd";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    // const { userProfile, isAdmin } = useContext(MainContext);

    const token = getCookie(key.uid) ?? "";
    const user = token !== "" ? JSON.parse(token) : null;

    // useEffect(() => {
    //     if (!userProfile || !isAdmin) {
    //         return
    //     }
    // }, [userProfile, isAdmin]);

    if (!user || user.role !== "admin") {
        message.error("Cannot enter admin page", 2);
        return <Navigate to="/authen" />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
