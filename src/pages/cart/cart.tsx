import { useNavigate } from "react-router-dom"
import Breadcrumb from "../../components/user/breadcrumb"

const Cart = () => {
    const navigate = useNavigate()
    return (
        <>
            <Breadcrumb data={{ label: "Cart", path: "Cart" }} />
            <section className="container my-4 my-xl-5">
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">IMAGE</th>
                                <th scope="col">PRODUCT</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">QUANTITY</th>
                                <th scope="col">TOTAL</th>
                                <th scope="col">REMOVE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="https://via.placeholder.com/50" alt="Product 1" /></td>
                                <td>Web Dictionary</td>
                                <td>$50.00</td>
                                <td>
                                    1
                                </td>
                                <td>$50.00</td>
                                <td><button className="btn btn-danger btn-sm"><i className="fas fa-trash" /></button></td>
                            </tr>
                            <tr>
                                <td><img src="https://via.placeholder.com/50" alt="Product 1" /></td>
                                <td>Web Dictionary</td>
                                <td>$50.00</td>
                                <td>
                                    1
                                </td>
                                <td>$50.00</td>
                                <td><button className="btn btn-danger btn-sm"><i className="fas fa-trash" /></button></td>
                            </tr>
                            <tr>
                                <td><img src="https://via.placeholder.com/50" alt="Product 1" /></td>
                                <td>Web Dictionary</td>
                                <td>$50.00</td>
                                <td>
                                    1
                                </td>
                                <td>$50.00</td>
                                <td><button className="btn btn-danger btn-sm"><i className="fas fa-trash" /></button></td>
                            </tr>
                            <tr>
                                <td><img src="https://via.placeholder.com/50" alt="Product 1" /></td>
                                <td>Web Dictionary</td>
                                <td>$50.00</td>
                                <td>
                                    1
                                </td>
                                <td>$50.00</td>
                                <td><button className="btn btn-danger btn-sm"><i className="fas fa-trash" /></button></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total:</td>
                                <td colSpan={5}>$200</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="mt-4 text-end">
                    <button className="btn btn-lg btn-primary w-25" type="button" onClick={() => navigate("/checkout")}>Checkout Total</button>
                </div>
            </section>
        </>
    )
}

export default Cart