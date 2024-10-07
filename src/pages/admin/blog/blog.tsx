// tao file blog.tsx

import { useContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { MainContext } from "../../../context/main-provider";

import { message, Modal, Table } from "antd";

import { IBlogs } from "../../../types/types";

import { deleteDoc, doc } from "firebase/firestore";
import { firebaseStore } from "../../../firebase-config";

import { keyCollection } from "../../../constants/constants";
import FormBlog from "./_components/form-blog";

const AdminBlog = () => {
    const { data } = useContext(MainContext);

    const queryClient = useQueryClient();

    const [blogs, setBlogs] = useState<IBlogs[]>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState<string>("0");

    useEffect(() => {
        if (!data?.blogs) return;
        setBlogs(data.blogs);
    }, [data]);

    const columns = [
        // {
        //     title: "Id",
        //     dataIndex: "blog_id",
        //     key: "blog_id",
        // },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
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
            render: (record: IBlogs) => (
                <div className="text-center">
                    <button
                        className="btn btn-primary me-3"
                        type="button"
                        onClick={() => {
                            setIsModalOpen(true);
                            setId(record.id);
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
        await deleteDoc(doc(firebaseStore, keyCollection.blogs, id));

        message.success("Delete blog successfully", 2);

        await queryClient.invalidateQueries({
            queryKey: [keyCollection.blogs],
            refetchType: "all",
        });
    };
    return (
        <section className="my-4">
            <Table
                dataSource={blogs}
                columns={columns}
                bordered
                title={() => (
                    <>
                        <div className="hstack gap-3">
                            <div>
                                <h3 className="fw-bold">List Blogs</h3>
                            </div>
                            <div className="ms-auto">
                                <button
                                    className="btn btn-lg btn-outline-primary"
                                    type="button"
                                    onClick={() => {
                                        setIsModalOpen(true);
                                        setId("0");
                                    }}
                                >
                                    <i className="fa-solid fa-plus"></i>
                                    Create new blog
                                </button>
                            </div>
                        </div>
                    </>
                )}
                expandable={{
                    expandedRowRender: (record) => (
                        <>
                            <div>
                                <h4>Content:</h4>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <p className="accordion-header">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#content1"
                                                aria-expanded="true"
                                                aria-controls="content1"
                                            >
                                                Content 1
                                            </button>
                                        </p>
                                        <div
                                            id="content1"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>{record.content_1}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <p className="accordion-header">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#content2"
                                                aria-expanded="false"
                                                aria-controls="content2"
                                            >
                                                Content 2
                                            </button>
                                        </p>
                                        <div
                                            id="content2"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>{record.content_2}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <p className="accordion-header">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#content3"
                                                aria-expanded="false"
                                                aria-controls="content3"
                                            >
                                                Content 3
                                            </button>
                                        </p>
                                        <div
                                            id="content3"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>{record.content_3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4>Label:</h4>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <p className="accordion-header">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#label1"
                                                aria-expanded="true"
                                                aria-controls="label1"
                                            >
                                                Label 1
                                            </button>
                                        </p>
                                        <div
                                            id="label1"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>{record.label_1}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <p className="accordion-header">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#label2"
                                                aria-expanded="false"
                                                aria-controls="label2"
                                            >
                                                Label 2
                                            </button>
                                        </p>
                                        <div
                                            id="label2"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>{record.label_2}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ),
                    rowExpandable: (record) => record.title !== "Not Expandable",
                }}
                expandRowByClick
            />
            <Modal
                title={
                    <>
                        <h2 className="fw-bold">
                            {id === "0" ? "Create New Blog" : "Edit blog"}
                        </h2>
                    </>
                }
                open={isModalOpen}
                footer={false}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                width={1000}
            >
                <FormBlog id={id} />
            </Modal>
        </section>
    );
};

export default AdminBlog;
