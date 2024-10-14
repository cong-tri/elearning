import { useContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { MainContext } from "../../../context/main-provider";

import { message, Modal, Table } from "antd";

import { IZooms } from "../../../types/types";

import { deleteDoc, doc } from "firebase/firestore";
import { firebaseStore } from "../../../firebase-config";

import { keyCollection } from "../../../constants/constants";
import FormZoom from "./_components/form-zoom";

const AdminZoom = () => {
    const { data } = useContext(MainContext);

    const queryClient = useQueryClient();

    const [zoom, setZoom] = useState<IZooms[]>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState<string>("0");

    useEffect(() => {
        if (!data?.zooms) return;
        setZoom(data.zooms);

        console.log(data.zooms);
    }, [data]);

    const columns = [
        {
            title: "Meet ID",
            dataIndex: "meet_id",
            key: "meet_id",
        },
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
            title: "Date",
            dataIndex: "host_by",
            key: "host_by",
        },
        {
            title: "Start time",
            dataIndex: "start_time",
            key: "start_time",
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
            render: (record: IZooms) => (
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
        await deleteDoc(doc(firebaseStore, keyCollection.zoom, id));
        message.success("Delete zoom successfully", 2);

        await queryClient.invalidateQueries({
            queryKey: [keyCollection.zoom],
            refetchType: "all",
        });
    };
    return (
        <section className="my-4">
            <Table
                dataSource={zoom}
                columns={columns}
                bordered
                title={() => (
                    <>
                        <div className="hstack gap-3">
                            <div>
                                <h3 className="fw-bold">List Zooms</h3>
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
                                    Create new zoom
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
                            {id === "0" ? "Create New Zoom" : "Edit zoom"}
                        </h2>
                    </>
                }
                open={isModalOpen}
                footer={false}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                width={1000}
            >
                <FormZoom id={id} />
            </Modal>
        </section>
    );
};

export default AdminZoom;
