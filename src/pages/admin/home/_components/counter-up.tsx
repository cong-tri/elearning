import CountUp from 'react-countup';


type Counter = {
    id: number,
    label: string;
    icon: JSX.Element;
    counter: number
}
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
        label: "TOTAL INSTRUCTOR",
        icon: (<i className="fa-solid fa-user-tie fa-4x"></i>),
        counter: 20
    },
    {
        id: 5,
        label: "TOTAL INSTRUCTOR",
        icon: (<i className="fa-solid fa-user-tie fa-4x"></i>),
        counter: 20
    },
    {
        id: 6,
        label: "OVER THE WORLD",
        icon: (<i className="fa-solid fa-globe fa-4x"></i>),
        counter: 10
    }

];
const CounterUp = () => {
    return (
        <>
            <div className='row row-cols-3 g-0 my-2'>
                {listCounter.map((items) => {
                    return <>
                        <div className="col mx-auto my-4" key={items.id}>
                            <div className="row align-items-center">
                                <div className="col-3 text-center text-danger">
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
        </>
    )
}

export default CounterUp