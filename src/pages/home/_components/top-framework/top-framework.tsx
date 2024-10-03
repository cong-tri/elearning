
type Framework = {
    id: number,
    label: string,
    icon: string;
};

const TopFramework = () => {
    const basePath = "../../../../../images";

    const listFramework: Framework[] = [
        {
            id: 1,
            label: "NextJS",
            icon: `${basePath}/nextjs-icon.png`
        },
        {
            id: 2,
            label: "ReactJS",
            icon: `${basePath}/reactjs-icon.png`
        },
        {
            id: 3,
            label: "Laravel",
            icon: `${basePath}/laravel-icon.png`
        },
        {
            id: 4,
            label: "Angular",
            icon: `${basePath}/angular-icon.png`
        },
        {
            id: 5,
            label: "VueJS",
            icon: `${basePath}/vuejs-icon.png`
        },
        {
            id: 6,
            label: "Ruby On Rails",
            icon: `${basePath}/ruby-on-rains-icon.png`
        }
    ]
    return (
        <div className="bg-light py-3 mb-5 py-xl-5 mx-3 shadow-lg rounded-4">
            <div className="row row-cols-2 row-cols-md-3 row-cols-xl-6 g-0 align-items-center">
                {listFramework.map((item) => {
                    return <>
                        <div className="col text-center my-3 my-xl-0" key={item.id}>
                            <img src={item.icon} alt={item.label} width="30%" height="50%" className="img-fluid" />
                            <h5 className="mt-2 w-auto">{item.label}</h5>
                        </div>
                    </>
                })}
            </div>
        </div>
    )
}

export default TopFramework 