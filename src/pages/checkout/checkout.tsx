import Breadcrumb from "../../components/user/breadcrumb"

const Checkout = () => {
    return (
        <>
            <Breadcrumb data={{ label: "Checkout", path: "Checkout" }} />
            <section className="container my-4 my-xl-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Billing Details</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="firstName" className="form-label">First Name *</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="lastName" className="form-label">Last Name *</label>
                                            <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="companyName" className="form-label">Company Name</label>
                                        <input type="text" className="form-control" id="companyName" placeholder="Company Name" />
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label htmlFor="email" className="form-label">Email Address*</label>
                                            <input type="email" className="form-control" id="email" placeholder="Your email" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="phone" className="form-label">Phone Number*</label>
                                            <input type="text" className="form-control" id="phone" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label">Address *</label>
                                        <input type="text" className="form-control" id="address" placeholder="Address" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="city" className="form-label">Town/City *</label>
                                        <input type="text" className="form-control" id="city" placeholder="Town/City" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="postcode" className="form-label">Post Code/Zip Code*</label>
                                        <input type="text" className="form-control" id="postcode" placeholder="Post Code/Zip Code" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="orderNotes" className="form-label">Order Notes</label>
                                        <input type="text" className="form-control" id="orderNotes" placeholder="Order Notes" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Your Order</h4>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Web Dictiona × 1</td>
                                            <td>$80</td>
                                        </tr>
                                        <tr>
                                            <td>Design Minoi × 1</td>
                                            <td>$60</td>
                                        </tr>
                                        <tr>
                                            <td>Crash Course × 1</td>
                                            <td>$70</td>
                                        </tr>
                                        <tr>
                                            <td>Book stand a × 1</td>
                                            <td>$32</td>
                                        </tr>
                                        <tr>
                                            <td>Nice stand a × 1</td>
                                            <td>$56</td>
                                        </tr>
                                        <tr>
                                            <td>Nided minid × 1</td>
                                            <td>$57</td>
                                        </tr>
                                        <tr>
                                            <td className="total">Subtotal</td>
                                            <td className="total">$355.00</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <td>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="shipping" id="flatRate" defaultChecked />
                                                    <label className="form-check-label" htmlFor="flatRate">
                                                        Flat Rate: $3.00
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="shipping" id="freeShipping" />
                                                    <label className="form-check-label" htmlFor="freeShipping">
                                                        Free Shipping
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="total">Total</td>
                                            <td className="total">$358.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="bankTransfer" />
                                        <label className="form-check-label" htmlFor="bankTransfer">
                                            Direct Bank Transfer
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="chequePayment" />
                                        <label className="form-check-label" htmlFor="chequePayment">
                                            Cheque Payment
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="cashOnDelivery" />
                                        <label className="form-check-label" htmlFor="cashOnDelivery">
                                            Cash on Delivery
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="paymentMethod" id="paypal" defaultChecked />
                                        <label className="form-check-label" htmlFor="paypal"> Paypal </label>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary w-100">
                                    Place order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout