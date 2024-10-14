import { useContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { MainContext } from "../../../context/main-provider";

import { message, Modal } from "antd";

import { ICategory } from "../../../types/types";

import FormAddNewCategory from "./_components/form-category";

import { deleteDoc, doc } from "firebase/firestore";
import { firebaseStore } from "../../../firebase-config";

import { keyCollection } from "../../../constants/constants";


const AdminCategory = () => {
    const { data } = useContext(MainContext);

    const queryClient = useQueryClient();

    const [category, setCategory] = useState<ICategory[]>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState<string>("0");

    useEffect(() => {
        if (!data?.categories) return;
        setCategory(data.categories);
    }, [data]);

    const handleDelele = async (id: string) => {
        await deleteDoc(doc(firebaseStore, keyCollection.categories, id))

        message.success("Delete category successfully", 2)

        await queryClient.invalidateQueries({
            queryKey: [keyCollection.categories],
            refetchType: "all"
        })
    }
    const handleCloseModal = () => {
        setIsModalOpen(false)
    }
    const handleOpenModal = (id: string) => {
        setIsModalOpen(true);
        setId(id);
    }
    return (
        <section className="my-4">
            <div className="card">
                <div className="card-header">
                    <div className="hstack gap-3">
                        <div>
                            <h3 className="fw-bold">List Categories</h3>
                        </div>
                        <div className="ms-auto">
                            <button
                                className="btn btn-lg btn-outline-primary"
                                type="button"
                                onClick={() => handleOpenModal("0")}
                            >
                                <i className="fa-solid fa-plus"></i> Create New Category
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Created By</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category?.map((items) => {
                                    return (
                                        <tr>
                                            <td>{items.title}</td>
                                            <td>{items.type}</td>
                                            <td>{items.created_by}</td>
                                            <td>
                                                <button
                                                    className="btn btn-primary me-3"
                                                    type="button"
                                                    onClick={() => handleOpenModal(items.id)}
                                                >
                                                    <i className="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                <button className="btn btn-danger" type="button" onClick={() => handleDelele(items.id)}>
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal
                title={
                    <>
                        <h2 className="fw-bold">
                            {id === "0" ? "Create New Category" : "Edit category"}
                        </h2>
                    </>
                }
                open={isModalOpen}
                footer={false}
                onOk={handleCloseModal}
                onCancel={handleCloseModal}
                width={1000}
            >
                <FormAddNewCategory id={id} />
            </Modal>
        </section>
    );
};

export default AdminCategory;
