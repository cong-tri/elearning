// tao file event.tsx trong folder event

import { useContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { MainContext } from "../../../context/main-provider";
import { AdminContext } from "../../../context/admin-provider";

import { message, Modal, Table } from "antd";

import { IEvents } from "../../../types/types";

import { deleteDoc, doc } from "firebase/firestore";
import { firebaseStore } from "../../../firebase-config";

import { keyCollection } from "../../../constants/constants";
import FormEvent from "./_components/form-event";

const AdminEvent = () => {
    const { data } = useContext(MainContext);
    const { data: admin } = useContext(AdminContext);

    const queryClient = useQueryClient();

    const [events, setEvents] = useState<IEvents[]>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!data?.events) return;
        setEvents(data.events);
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
            render: (record: IEvents) => (
                <div className="text-center">
                    <button
                        className="btn btn-primary me-3"
                        type="button"
                        onClick={() => {
                            setIsModalOpen(true);
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
        await deleteDoc(doc(firebaseStore, keyCollection.events, id));

        message.success("Delete event successfully", 2);

        await queryClient.invalidateQueries({
            queryKey: [keyCollection.events],
            refetchType: "all",
        });
    };
    return (
        <section className="my-4">
            <Table
                dataSource={events}
                columns={columns}
                bordered
                title={() => (
                    <>
                        <div className="hstack gap-3">
                            <div>
                                <h3 className="fw-bold">List Events</h3>
                            </div>
                            <div className="ms-auto">
                                <button
                                    className="btn btn-lg btn-outline-primary"
                                    type="button"
                                    onClick={() => {
                                        setIsModalOpen(true);
                                        admin?.setId("0");
                                    }}
                                >
                                    <i className="fa-solid fa-plus"></i>
                                    Create new event
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
                                                data-bs-target="#content"
                                                aria-expanded="true"
                                                aria-controls="content"
                                            >
                                                Content
                                            </button>
                                        </p>
                                        <div
                                            id="content"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>{record.content.content_first}</p>
                                                <p>{record.content.content_second}</p>
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
                                                data-bs-target="#label"
                                                aria-expanded="true"
                                                aria-controls="label"
                                            >
                                                Label
                                            </button>
                                        </p>
                                        <div
                                            id="label"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>{record.label.label_first}</p>
                                                <p>{record.label.label_second}</p>
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
                            {admin?.id === "0" ? "Create New Event" : "Edit event"}
                        </h2>
                    </>
                }
                open={isModalOpen}
                footer={false}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                width={1000}
            >
                <FormEvent id={admin?.id ?? ""} />
            </Modal>
        </section>
    );
};

export default AdminEvent;