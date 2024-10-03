import { useContext, useEffect, useState } from "react";

import { MainContext } from "../../../context/main-provider";

import { Modal, Table } from "antd";

import { Category, Courses } from "../../../types/types";
import FormAddNewCourse from "./_components/form-course";

const columns = [
    {
        title: "Id",
        dataIndex: "id",
        key: "id",
    },
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
        title: "Action",
        dataIndex: "",
        key: "x",
        render: () => (
            <div className="text-center">
                <button className="btn btn-primary me-3" type="button">
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="btn btn-danger" type="button">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        ),
    },
];

const AdminCourse = () => {
    const { data } = useContext(MainContext);

    const [category, setCategory] = useState<Category[]>();
    const [course, setCourse] = useState<Courses[]>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!data?.category || !data.course) return;
        setCategory(data.category);
        setCourse(data.course);
    }, [data]);

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
                                    type="button" onClick={() => setIsModalOpen(true)}
                                >
                                    <i className="fa-solid fa-plus"></i> Create New Course
                                </button>
                                <Modal
                                    title={<><h2 className="fw-bold">Create New Course</h2></>}
                                    open={isModalOpen}
                                    footer={false}
                                    onOk={() => setIsModalOpen(false)}
                                    onCancel={() => setIsModalOpen(false)}
                                    width={1000}
                                >
                                    <FormAddNewCourse category={category ?? []} />
                                </Modal>
                            </div>
                        </div>
                    </>
                )}
            />
        </section>
    );
};

export default AdminCourse;
