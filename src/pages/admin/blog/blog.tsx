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
import { AdminContext } from "../../../context/admin-provider";

const AdminBlog = () => {
    const { data } = useContext(MainContext);
    const { data: admin } = useContext(AdminContext);

    const queryClient = useQueryClient();

    const [blogs, setBlogs] = useState<IBlogs[]>();

    useEffect(() => {
        if (!data?.blogs) return;
        setBlogs(data.blogs);
    }, [data]);

    const columns = [
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
                                        admin?.handleOpenModal()
                                        admin?.setId("0");
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
                    expandedRowRender: (record, index) => (
                        <>
                            <div key={index}>
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
                                                Content
                                            </button>
                                        </p>
                                        <div
                                            id="content1"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>{record.content.content_first}</p>
                                                <p>{record.content.content_second}</p>
                                                <p>{record.content.content_third}</p>
                                                <p>{record.content.content_four}</p>
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
                                                Label
                                            </button>
                                        </p>
                                        <div
                                            id="label1"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>{record.label.label_first}</p>
                                                <p>{record.label.label_second}</p>
                                                <p>{record.label.label_third}</p>
                                                <p>{record.label.label_four}</p>
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
                            {admin?.id === "0" ? "Create New Blog" : "Edit blog"}
                        </h2>
                    </>
                }
                open={admin?.isModalOpen}
                footer={false}
                onOk={() => admin?.handleCloseModal()}
                onCancel={() => admin?.handleCloseModal()}
                width={1000}
            >
                <FormBlog id={admin?.id ?? ""} />
            </Modal>
        </section>
    );
};

export default AdminBlog;
