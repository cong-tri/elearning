import React, { createContext } from "react";
import { useGetUser } from "../hooks/user";

import { IDataAdminProvider } from "../types/types";

export const AdminContext = createContext({} as { data?: IDataAdminProvider });

export const AdminProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { users } = useGetUser();

    const data: IDataAdminProvider = {
        users: users ?? []
    }

    return (
        <AdminContext.Provider value={{ data }}>{children}</AdminContext.Provider>
    );
};
