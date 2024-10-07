import React, { createContext } from "react";
import { useGetCategory, useGetCourse } from "../hooks/course";
import { IDataMainProvider } from "../types/types";
import { useGetBlog } from "../hooks/blog";

export const MainContext = createContext({} as { data?: IDataMainProvider });

export const MainProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { categories } = useGetCategory();
    const { courses } = useGetCourse();
    const { blogs } = useGetBlog();

    const data: IDataMainProvider = {
        categories: categories ?? [],
        course: courses ?? [],
        blogs: blogs ?? []
    }

    return (
        <MainContext.Provider value={{ data }}>{children}</MainContext.Provider>
    );
};
