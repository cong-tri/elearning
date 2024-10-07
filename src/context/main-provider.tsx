import React, { createContext } from "react";
import { useGetCategory, useGetCourse } from "../hooks/course";
import { IDataMainProvider } from "../types/types";

export const MainContext = createContext({} as { data?: IDataMainProvider });

export const MainProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { categories } = useGetCategory();
    const { courses } = useGetCourse();

    const data: IDataMainProvider = {
        categories: categories ?? [],
        course: courses ?? []
    }

    return (
        <MainContext.Provider value={{ data }}>{children}</MainContext.Provider>
    );
};
