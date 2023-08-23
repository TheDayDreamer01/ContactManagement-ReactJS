import MaintenanceSvg from "../../assets/svg/Maintenance.svg";

const Errors = () => {
    return (
        <div className="flex flex-col items-center p-6">
            <img src={MaintenanceSvg} alt="Internal Server Error" className="h-72 my-10"/>
            <h1 className="text-red-600 font-bold text-lg md:text-2xl">500 - Internal Server Error</h1>
            <p className="text-red-600 text-sm md:text-md">Please refresh this page or try again try.</p>
        </div>
    );
};

export default Errors;