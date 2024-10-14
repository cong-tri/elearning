import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/user/breadcrumb";
import { useContext } from "react";
import { MainContext } from "../../context/main-provider";

const ZoomPage = () => {
    const navigate = useNavigate();
    const { data } = useContext(MainContext)
    return (
        <>
            <Breadcrumb data={{ label: "Zoom", path: "Zoom" }} />
            <section className="container my-4 my-xl-5">
                <div className="row row-cols-1 row-col-md-2 row-cols-xl-3 gy-4">
                    {data?.zooms.map((items) => {
                        return <>
                            <div
                                className="col"
                                role="button"
                                onClick={() => navigate(`/zoom/${items.id}`)}
                            >
                                <div className="card">
                                    <img
                                        src="https://i.ibb.co/K2R2685/img2.jpg"
                                        className="card-img-top"
                                        alt={items.title}
                                    />
                                    <div className="card-body h-100">
                                        <h5 className="card-title">{items.title}</h5>
                                        <p className="card-text">Meeting Time: {items.start_time}</p>
                                        <p className="card-text">Meeting ID: {items.meet_id}</p>
                                        <p className="card-text">Host by: {items.host_by}</p>
                                        <p className="card-text">Hours: {items.hours}</p>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-primary w-100" type="button">Join meeting</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </section>
        </>
    );
};

export default ZoomPage;
