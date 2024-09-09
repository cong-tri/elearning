import React from "react";
import Lottie from "lottie-react";
import about from "./about.json";
import CountUp from "react-countup";

type Counter = {
    id: number,
    label: string;
    icon: JSX.Element;
    counter: number
}

const About = () => {
    const listCounter: Counter[] = [
        {
            id: 1,
            label: "TOTAL ACHIEVMENT",
            icon: (<i className="fa-solid fa-award fa-4x"></i>),
            counter: 30
        },
        {
            id: 2,
            label: "TOTAL STUDENTS",
            icon: (<i className="fa-solid fa-graduation-cap fa-4x"></i>),
            counter: 1000
        },
        {
            id: 3,
            label: "TOTAL INSTRUCTOR",
            icon: (<i className="fa-solid fa-user-tie fa-4x"></i>),
            counter: 20
        },
        {
            id: 4,
            label: "OVER THE WORLD",
            icon: (<i className="fa-solid fa-globe fa-4x"></i>),
            counter: 10
        }

    ];
    return (
        <div id="about" className="my-3 my-xl-5 pb-3 pb-xl-4">
            <div className="container my-5">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-5">
                        <Lottie animationData={about} loop width={400} />
                    </div>
                    <div className="col-xl-5">
                        <button className="btn btn-lg btn-outline-primary mb-3" disabled>
                            About Us
                        </button>
                        <h1 className="fw-bold">
                            Welcome to the Online Learning Center
                        </h1>
                        <p>
                            25+Contrary to popular belief, Lorem Ipsum is not simply random
                            text roots in a piece of classical Latin literature from 45 BC
                        </p>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 align-items-center gy-3 my-3 my-xl-5">
                    {listCounter.map((items) => {
                        return <>
                            <div className="col" key={items.id}>
                                <div className="row">
                                    <div className="col-3 col-xl-auto text-center text-xl-start">
                                        {items.icon}
                                    </div>
                                    <div className="col-auto">
                                        <CountUp end={items.counter} duration={5} enableScrollSpy scrollSpyDelay={5} className="fs-3 fw-bold" />
                                        <p className="fw-medium">{items.label}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </div>
    );
};

export default About;
