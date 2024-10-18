import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { MainContext } from "../../context/main-provider";

import Breadcrumb from "../../components/user/breadcrumb";
import { message } from "antd";

import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { firebaseStore } from "../../firebase-config";

import { ICourses } from "../../types/types";
import { keyCollection } from "../../constants/constants";

const Cart = () => {
    const queryClient = useQueryClient();
    const { userProfile } = useContext(MainContext);

    const navigate = useNavigate();

    const [cart, setCart] = useState<ICourses[]>();

    useEffect(() => {
        if (!userProfile) return;
        console.log(userProfile.carts);
        setCart(userProfile.carts);
    }, [userProfile]);

    const handleRemoveFromCart = async (courseId: string): Promise<void> => {
        try {
            if (!userProfile) return;

            const userRef = doc(
                firebaseStore,
                keyCollection.users,
                userProfile.user_id
            );

            const courseToRemove = cart?.find((course) => course.id === courseId);

            if (courseToRemove) {
                await updateDoc(userRef, {
                    carts: arrayRemove(courseToRemove),
                });

                await queryClient.invalidateQueries({
                    queryKey: [keyCollection.users, userProfile.user_id],
                    refetchType: "all",
                });

                message.success("Course removed from cart successfully!");
            } else {
                message.error("Course not found in cart.");
                return;
            }
        } catch (error) {
            if (error instanceof Error) {
                message.error(error.message);
                return;
            }
        }
    };

    const total = cart?.reduce((sum, item) => {
        const price = parseFloat(item.price);
        return sum + (isNaN(price) ? 0 : price);
    }, 0);

    const handleCheckout = async () => {
        try {
            if (!userProfile) return;
            const userRef = doc(
                firebaseStore,
                keyCollection.users,
                userProfile?.user_id
            );

            await updateDoc(userRef, {
                carts: [],
            });

            await queryClient.invalidateQueries({
                queryKey: [keyCollection.users, userProfile.user_id],
                refetchType: "all",
            });

            message.success("Checkout successful. Cart cleared.");
        } catch (error) {
            if (error instanceof Error) {
                message.error(error.message);
                return;
            }
        }
    };
    return (
        <>
            <Breadcrumb data={{ label: "Cart", path: "Cart" }} />
            <section className="container my-4 my-xl-5">
                {!userProfile ? (
                    <div>You have to login to buy course</div>
                ) : userProfile.carts.length === 0 ? (
                    <div>Your cart is empty</div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover table-striped">
                            <thead>
                                <tr>
                                    <th scope="col" className="fs-4">
                                        IMAGE
                                    </th>
                                    <th scope="col" className="fs-4">
                                        COURSE
                                    </th>
                                    <th scope="col" className="fs-4">
                                        LESSONS
                                    </th>
                                    <th scope="col" className="fs-4">
                                        LEVEL
                                    </th>
                                    <th scope="col" className="fs-4">
                                        TAG
                                    </th>
                                    <th scope="col" className="fs-4">
                                        TOTAL
                                    </th>
                                    <th scope="col" className="fs-4">
                                        REMOVE
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart?.map((items) => {
                                    return (
                                        <tr>
                                            <td className="text-center">
                                                <img
                                                    src={items.image}
                                                    width={50}
                                                    height={50}
                                                    alt={items.title}
                                                />
                                            </td>
                                            <td>{items.title}</td>
                                            <td>{items.lessons}</td>
                                            <td className="text-uppercase">{items.level}</td>
                                            <td className="text-uppercase">{items.tag}</td>
                                            <td>${items.price}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleRemoveFromCart(items.id)}
                                                >
                                                    <i className="fas fa-trash" />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td className="fw-bold fs-4">Total:</td>
                                    <td colSpan={4}></td>
                                    <td className="text-success fw-bold fs-4">${total}</td>
                                    <td>
                                        <button
                                            className="btn btn-success w-100"
                                            type="button"
                                            onClick={() => handleCheckout()}
                                        >
                                            Checkout
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                )}
            </section>
        </>
    );
};

export default Cart;
