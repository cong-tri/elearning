
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getCookie } from 'typescript-cookie';
import { keyToken } from '../../constants/constants';
interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

    const isAuthenticated = (): boolean => {

        const userInfo = getCookie(keyToken)

        if (userInfo) {
            return true
        }
        return false
    }
    if (!isAuthenticated()) {
        return <Navigate to="/authen" />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
