import { useContext, useEffect, useState } from "react";

import { AdminContext } from "../../../context/admin-provider";

import { message, Modal, Table } from "antd";

import FormAddNewUser from "./_components/form-user";

import { IUsers } from "../../../types/types";
import { deleteDoc, doc } from "firebase/firestore";
import { firebaseStore } from "../../../firebase-config";
import { keyCollection } from "../../../constants/constants";
import { useQueryClient } from "@tanstack/react-query";

const AdminUser = () => {
    const { data } = useContext(AdminContext);
    const queryClient = useQueryClient();

    const [users, setUsers] = useState<IUsers[]>();

    useEffect(() => {
        if (!data?.users) return;
        setUsers(data.users);
    }, [data]);

    const columns = [
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
        },
        {
            title: "Username",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
        },
        {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: (record: IUsers) => (
                <div className="text-center">
                    <button
                        className="btn btn-primary me-3"
                        type="button"
                        onClick={() => {
                            data?.handleOpenModal();
                            data?.setId(record.id);
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
        await deleteDoc(doc(firebaseStore, keyCollection.users, id));

        message.success("Delete user successfully", 2);

        await queryClient.invalidateQueries({
            queryKey: [keyCollection.users],
            refetchType: "all",
        });
    };
    return (
        <>
            <Table
                dataSource={users}
                columns={columns}
                bordered
                title={() => (
                    <>
                        <div className="hstack gap-3">
                            <div>
                                <h3 className="fw-bold">List User</h3>
                            </div>
                            <div className="ms-auto">
                                <button
                                    className="btn btn-lg btn-outline-primary"
                                    type="button"
                                    onClick={() => data?.handleOpenModal()}
                                >
                                    <i className="fa-solid fa-plus"></i> Create New User
                                </button>
                                <Modal
                                    title={
                                        <>
                                            <h2 className="fw-bold"> {data?.id ? "Update User" : "Create New User"}</h2>
                                        </>
                                    }
                                    open={data?.isModalOpen}
                                    footer={false}
                                    onOk={() => data?.handleCloseModal()}
                                    onCancel={() => data?.handleCloseModal()}
                                    width={1200}
                                >
                                    <FormAddNewUser id={data?.id ?? ""} />
                                </Modal>
                            </div>
                        </div>
                    </>
                )}
            />
        </>
    );
};

export default AdminUser;
