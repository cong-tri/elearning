import { useContext, useEffect, useState } from "react";

import { AdminContext } from "../../../context/admin-provider";

import { Modal, Table } from "antd";

import FormAddNewUser from "./_components/form-user";

import { IUsers } from "../../../types/types";



const AdminUser = () => {
    const { data } = useContext(AdminContext);

    const [users, setUsers] = useState<IUsers[]>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!data?.users) return;
        setUsers(data.users);
        console.log(data.users);

    }, [data]);

    const columns = [
        {
            title: "Id",
            dataIndex: "user_id",
            key: "user_id",
        },
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
            title: "Role",
            dataIndex: "role",
            key: "role",
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
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    <i className="fa-solid fa-plus"></i> Create New User
                                </button>
                                <Modal
                                    title={
                                        <>
                                            <h2 className="fw-bold">Create New User</h2>
                                        </>
                                    }
                                    open={isModalOpen}
                                    footer={false}
                                    onOk={() => setIsModalOpen(false)}
                                    onCancel={() => setIsModalOpen(false)}
                                    width={1200}
                                >
                                    <FormAddNewUser />
                                </Modal>
                            </div>
                        </div>
                    </>
                )}
                expandRowByClick
                expandable={{
                    expandedRowRender: (record) => <>
                        <div>
                            <p>Firstname: <span className="ms-4">{record.name.firstname}</span></p>
                            <p>Lastname: <span className="ms-4">{record.name.lastname}</span></p>
                            <p>Phone: <span className="ms-4">{record.phone}</span></p>
                            <p>Address: <span className="ms-4">{record.address}</span></p>
                        </div>
                    </>,
                    rowExpandable: (record) => record.username !== 'Not Expandable',
                }}
            />
        </>
    );
};

export default AdminUser;
