import { useNavigate, useRouteError } from "react-router-dom";
import Buttons from "../components/elements/Buttons/Buttons";

const MaintenancePage = () => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center text-center min-h-screen dark:bg-slate-900 bg-slate-200">
            <div className="w-full max-w-xs md:max-w-md">
                <h1 className="text-lg  font-medium mb-4 text-blue-500">Oopss</h1>
                <p className="text-4xl md:text-5xl font-bold text-red-500 mb-4">Maintenance Page</p>
                <p className="text-md font-medium dark:text-slate-400 text-slate-500 mb-4">This page is currently under maintenance. please come back later.</p>
                <img className="my-8" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTNmeTl1dHdkZnRvbmE0OG54Z3R5MWY1dnZqd2dlMXpxaGFseW1sZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3fNmJ20ErpkjK/giphy.webp" alt="sasuke sorry gif" />

                <Buttons classname='h-12' onClick={() => navigate(-1)}>Go Back</Buttons>
            </div>
        </div>
    )
}

export default MaintenancePage;