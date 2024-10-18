import { useContext, useEffect, useState } from "react";

import { MainContext } from "../../../context/main-provider";

import { message, Modal, Table } from "antd";

import { ICategory, ICourses } from "../../../types/types";
import FormAddNewCourse from "./_components/form-course";
import { deleteDoc, doc } from "firebase/firestore";
import { firebaseStore } from "../../../firebase-config";
import { useQueryClient } from "@tanstack/react-query";
import { keyCollection } from "../../../constants/constants";
import { AdminContext } from "../../../context/admin-provider";

const AdminCourse = () => {
    const { data } = useContext(MainContext);
    const { data: admin } = useContext(AdminContext);

    const queryClient = useQueryClient();

    const [category, setCategory] = useState<ICategory[]>();
    const [course, setCourse] = useState<ICourses[]>();

    useEffect(() => {
        if (!data?.categories || !data.course) return;
        setCategory(data.categories);
        setCourse(data.course);
    }, [data]);

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Tag",
            dataIndex: "tag",
            key: "tag",
        },
        {
            title: "Level",
            dataIndex: "level",
            key: "level",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Lessons",
            dataIndex: "lessons",
            key: "lessons",
        },
        {
            title: "Created By",
            dataIndex: "created_by",
            key: "created_by",
        },
        {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: (record: ICourses) => (
                <div className="text-center">
                    <button
                        className="btn btn-primary me-3"
                        type="button"
                        onClick={() => {
                            admin?.handleOpenModal()
                            admin?.setId(record.id);
                        }}
                    >
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => handleDelele(record.id)}
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            ),
        },
    ];

    const handleDelele = async (id: string) => {
        await deleteDoc(doc(firebaseStore, keyCollection.courses, id));

        message.success("Delete course successfully", 2);

        await queryClient.invalidateQueries({
            queryKey: [keyCollection.courses],
            refetchType: "all",
        });
    };
    return (
        <section className="my-4">
            <Table
                dataSource={course}
                columns={columns}
                bordered
                title={() => (
                    <>
                        <div className="hstack gap-3">
                            <div>
                                <h3 className="fw-bold">List Courses</h3>
                            </div>
                            <div className="ms-auto">
                                <button
                                    className="btn btn-lg btn-outline-primary"
                                    type="button"
                                    onClick={() => {
                                        admin?.handleOpenModal()
                                        admin?.setId("0")
                                    }}
                                >
                                    <i className="fa-solid fa-plus"></i>
                                    Create new course
                                </button>
                            </div>
                        </div>
                    </>
                )}
            />
            <Modal
                title={
                    <>
                        <h2 className="fw-bold">
                            {admin?.id === "0" ? "Create New Course" : "Edit course"}
                        </h2>
                    </>
                }
                open={admin?.isModalOpen}
                footer={false}
                onOk={() => admin?.handleCloseModal()}
                onCancel={() => admin?.handleCloseModal()}
                width={1000}
            >
                <FormAddNewCourse category={category ?? []} id={admin?.id ?? ""} />
            </Modal>
        </section>
    );
};

export default AdminCourse;
