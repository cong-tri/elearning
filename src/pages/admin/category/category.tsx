import { useContext } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { MainContext } from "../../../context/main-provider";

import { message, Modal, Table } from "antd";

import { ICategory } from "../../../types/types";

import FormAddNewCategory from "./_components/form-category";

import { deleteDoc, doc } from "firebase/firestore";
import { firebaseStore } from "../../../firebase-config";

import { keyCollection } from "../../../constants/constants";
import { AdminContext } from "../../../context/admin-provider";

const AdminCategory = () => {
    const { data } = useContext(MainContext);
    const { data: admin } = useContext(AdminContext);

    const queryClient = useQueryClient();

    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
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
            render: (record: ICategory) => (
                <div className="text-center">
                    <button
                        className="btn btn-primary me-3"
                        type="button"
                        onClick={() => {
                            admin?.handleOpenModal();
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
        await deleteDoc(doc(firebaseStore, keyCollection.categories, id));

        message.success("Delete category successfully", 2);

        await queryClient.invalidateQueries({
            queryKey: [keyCollection.categories],
            refetchType: "all",
        });
    };

    return (
        <section className="my-4">
            <Table
                dataSource={data?.categories}
                columns={columns}
                bordered
                title={() => (
                    <>
                        <div className="hstack gap-3">
                            <div>
                                <h3 className="fw-bold">List Categories</h3>
                            </div>
                            <div className="ms-auto">
                                <button
                                    className="btn btn-lg btn-outline-primary"
                                    type="button"
                                    onClick={() => {
                                        admin?.handleOpenModal();
                                        admin?.setId("0");
                                    }}
                                >
                                    <i className="fa-solid fa-plus"></i>
                                    Create new category
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
                            {admin?.id === "0" ? "Create New Category" : "Edit category"}
                        </h2>
                    </>
                }
                open={admin?.isModalOpen}
                footer={false}
                onOk={() => {
                    admin?.handleCloseModal();
                    admin?.setId("0")
                }}
                onCancel={() => {
                    admin?.handleCloseModal();
                    admin?.setId("0")
                }}
                width={1000}
            >
                <FormAddNewCategory id={admin?.id ?? ""} />
            </Modal>
        </section>
    );
};

export default AdminCategory;
