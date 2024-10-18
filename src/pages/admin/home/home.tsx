import { useContext } from "react";
import CounterUp from "./_components/counter-up";
import { MainContext } from "../../../context/main-provider";
import { AdminContext } from "../../../context/admin-provider";

const AdminHome = () => {
  const { data } = useContext(MainContext);
  const { data: admin } = useContext(AdminContext);
  return (
    <>
      <section className="my-4">
        <h1 className="w-100 border-bottom py-4">Dashboard</h1>
        <CounterUp />
        <div className="row my-4 gy-5 row-cols-4 border-top">
          <div className="col">
            <h3 className="text-center border-end border-2 text-danger">
              Course:{" "}
              <span className="text-secondary ms-3">{data?.course.length}</span>
            </h3>
          </div>
          <div className="col">
            <h3 className="text-center border-end border-2 text-danger">
              User:{" "}
              <span className="text-secondary ms-3">{admin?.users.length}</span>
            </h3>
          </div>
          <div className="col">
            <h3 className="text-center border-end border-2 text-danger">
              Category:{" "}
              <span className="text-secondary ms-3">{data?.categories.length}</span>
            </h3>
          </div>
          <div className="col">
            <h3 className="text-center text-danger">
              Blog:{" "}
              <span className="text-secondary ms-3">{data?.blogs.length}</span>
            </h3>
          </div>
          <div className="col">
            <h3 className="text-center border-end border-2 text-danger">
              Event:{" "}
              <span className="text-secondary ms-3">{data?.events.length}</span>
            </h3>
          </div>
          <div className="col">
            <h3 className="text-center border-end border-2 text-danger">
              Zoom:{" "}
              <span className="text-secondary ms-3">{data?.zooms.length}</span>
            </h3>
          </div>
          <div className="col">
            <h3 className="text-center border-end border-2 text-danger">
              Quizs:{" "}
              <span className="text-secondary ms-3">{data?.quizs.length}</span>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminHome;
