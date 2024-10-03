import { useContext, useEffect, useState } from "react";

import { MainContext } from "../../../context/main-provider";
import { Users } from "../../../types/types";
import { Modal, Table } from "antd";
import FormAddNewUser from "./_components/form-user";

type DataSource = {
    key: number;
    id: number;
    username: string;
    email: string;
    fullname: string;
    phone: string;
    address: string;
};

const columns = [
    {
        title: "Id",
        dataIndex: "id",
        key: "id",
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
        title: "Full Name",
        dataIndex: "fullname",
        key: "fullname",
    },
    {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
    },
    {
        title: "address",
        dataIndex: "address",
        key: "address",
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

const AdminUser = () => {
    const { data } = useContext(MainContext);

    const [users, setUsers] = useState<Users[]>();
    const [dataSource, setDataSource] = useState<DataSource[]>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!data?.users) return;
        setUsers(data.users)
        const datasource: DataSource[] = data.users.map((items, index) => {
            return {
                key: index + 1,
                id: items.id,
                username: items.username,
                email: items.email,
                fullname: `${items.name.firstname} ${items.name.lastname}`,
                phone: items.phone,
                address: `${items.address.number} ${items.address.street} ${items.address.city} City`,
            };
        });

        setDataSource(datasource);
    }, [data]);

    return <>
        <Table dataSource={dataSource} columns={columns} bordered
            title={() => (
                <>
                    <div className="hstack gap-3">
                        <div>
                            <h3 className="fw-bold">List User</h3>
                        </div>
                        <div className="ms-auto">
                            <button
                                className="btn btn-lg btn-outline-primary"
                                type="button" onClick={() => setIsModalOpen(true)}
                            >
                                <i className="fa-solid fa-plus"></i> Create New User
                            </button>
                            <Modal
                                title={<><h2 className="fw-bold">Create New User</h2></>}
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
            )} />
    </>
};

export default AdminUser;
