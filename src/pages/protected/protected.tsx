import React, { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";

import { MainContext } from "../../context/main-provider";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { userProfile } = useContext(MainContext);

    if (!userProfile || userProfile.role !== "admin") {
        return <Navigate to="/authen" />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
