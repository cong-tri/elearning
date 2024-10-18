import { useContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { MainContext } from "../../../context/main-provider";
import { AdminContext } from "../../../context/admin-provider";

import { message, Modal, Table } from "antd";

import { IQuizs } from "../../../types/types";

import { deleteDoc, doc } from "firebase/firestore";
import { firebaseStore } from "../../../firebase-config";

import { keyCollection } from "../../../constants/constants";
import FormQuiz from "./_components/form-quiz";

const AdminQuiz = () => {
    const { data } = useContext(MainContext);
    const { data: admin } = useContext(AdminContext);

    const queryClient = useQueryClient();

    const [quizs, setQuizs] = useState<IQuizs[]>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!data?.quizs) return;
        setQuizs(data.quizs);
    }, [data]);

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Attemps",
            dataIndex: "attemps",
            key: "attemps",
        },
        {
            title: "Questions",
            dataIndex: "questions",
            key: "questions",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Host_by",
            dataIndex: "host_by",
            key: "host_by",
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
            render: (record: IQuizs) => (
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
        await deleteDoc(doc(firebaseStore, keyCollection.quizs, id));

        message.success("Delete quiz successfully", 2);

        await queryClient.invalidateQueries({
            queryKey: [keyCollection.quizs],
            refetchType: "all",
        });
    };
    return (
        <section className="my-4">
            <Table
                dataSource={quizs}
                columns={columns}
                bordered
                title={() => (
                    <>
                        <div className="hstack gap-3">
                            <div>
                                <h3 className="fw-bold">List Quizs</h3>
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
                                    Create new quiz
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
                            {admin?.id === "0" ? "Create New Quiz" : "Edit quiz"}
                        </h2>
                    </>
                }
                open={isModalOpen}
                footer={false}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                width={1000}
            >
                <FormQuiz id={admin?.id ?? ""} />
            </Modal>
        </section>
    );
};

export default AdminQuiz;
