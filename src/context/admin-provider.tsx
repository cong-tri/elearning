import React, { createContext, useState } from "react";
import { useGetUser } from "../hooks/user";

import { IDataAdminProvider } from "../types/types";

export const AdminContext = createContext({} as { data?: IDataAdminProvider });

export const AdminProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { users } = useGetUser();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [id, SetID] = useState<string>("0");

    const data: IDataAdminProvider = {
        id,
        users: users ?? [],
        isModalOpen,
        handleCloseModal: () => setIsModalOpen(false),
        handleOpenModal: () => setIsModalOpen(true),
        setId: (event: string) => SetID(event)
    }

    return (
        <AdminContext.Provider value={{ data }}>{children}</AdminContext.Provider>
    );
};
