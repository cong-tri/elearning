import { useNavigate } from "react-router-dom";

type BreadcrumbItem = {
    label: string;
    path: string;
};

const Breadcrumb = ({ data }: { data: BreadcrumbItem }) => {
    const navigate = useNavigate();
    return (
        <div id="breadcrumb">
            <div id="breadcrumb-content" className="row align-items-center g-0">
                <div className="col">
                    <h1 className="text-white fw-bold display-4">{data.label}</h1>
                    <p className="mt-3 fw-medium fs-4">
                        <span
                            className="text-black link-primary"
                            role="button"
                            onClick={() => navigate("/")}
                        >
                            Home{" "}
                        </span>
                        <span className="mx-2">
                            <i className="fa-solid fa-chevron-right"></i>
                        </span>{" "}
                        {data.path}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
