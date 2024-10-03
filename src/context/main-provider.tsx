"use client";

import React, { createContext } from "react";
import { useGetCategory, useGetCourse } from "../hooks/course";
import { DataMainProvider } from "../types/types";
import { useGetUser } from "../hooks/user";
// import { useGetUser } from "../hooks/user";

export const MainContext = createContext({} as { data?: DataMainProvider });

export const MainProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { category } = useGetCategory();
    const { course } = useGetCourse();
    const { users } = useGetUser();

    const data: DataMainProvider = {
        category,
        course,
        users
    }

    return (
        <MainContext.Provider value={{ data }}>{children}</MainContext.Provider>
    );
};
