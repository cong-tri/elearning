import React, { createContext } from "react";

import { IDataMainProvider, IUsers } from "../types/types";

import { useGetCategory, useGetCourse } from "../hooks/course";
import { useGetBlog } from "../hooks/blog";
import { useGetEvent } from "../hooks/event";
import { useGetZoom } from "../hooks/zoom";
import { useGetQuiz } from "../hooks/quiz";
import { useGetInfoUser } from "../hooks/user";

export const MainContext = createContext(
    {} as { data?: IDataMainProvider; userProfile: IUsers | undefined; isAdmin?: boolean }
);

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
    const { categories } = useGetCategory();
    const { courses } = useGetCourse();
    const { blogs } = useGetBlog();
    const { events } = useGetEvent();
    const { zoom } = useGetZoom();
    const { quizs } = useGetQuiz();
    const { userProfile, isAdmin } = useGetInfoUser()

    const data: IDataMainProvider = {
        categories: categories ?? [],
        course: courses ?? [],
        blogs: blogs ?? [],
        events: events ?? [],
        zooms: zoom ?? [],
        quizs: quizs ?? [],
    };

    return (
        <MainContext.Provider value={{ data, userProfile, isAdmin }}>{children}</MainContext.Provider>
    );
};