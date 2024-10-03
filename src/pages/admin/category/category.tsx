import { useContext, useEffect, useState } from "react";

import { MainContext } from "../../../context/main-provider";

import { Modal, Table } from "antd";

import { Category } from "../../../types/types";
import FormAddNewCategory from "./_components/form-category";

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
        title: "Type",
        dataIndex: "type",
        key: "type",
    },
    {
        title: "Created By",
        dataIndex: "createBy",
        key: "createBy",
    },
    {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
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
const AdminCategory = () => {

    const { data } = useContext(MainContext);

    const [category, setCategory] = useState<Category[]>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (!data?.category) return;
        setCategory(data.category);
    }, [data]);

    return (
        <section className="my-4">
            <Table
                dataSource={category}
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
                                    type="button" onClick={() => setIsModalOpen(true)}
                                >
                                    <i className="fa-solid fa-plus"></i> Create New Category
                                </button>
                                <Modal
                                    title={<><h2 className="fw-bold">Create New Category</h2></>}
                                    open={isModalOpen}
                                    footer={false}
                                    onOk={() => setIsModalOpen(false)}
                                    onCancel={() => setIsModalOpen(false)}
                                    width={1000}
                                >
                                    <FormAddNewCategory />
                                </Modal>
                            </div>
                        </div>
                    </>
                )}
            />
        </section>
    )
}

export default AdminCategory