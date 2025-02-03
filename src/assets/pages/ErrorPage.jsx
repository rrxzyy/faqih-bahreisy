import { useNavigate, useRouteError } from "react-router-dom";
import Buttons from "../components/elements/Buttons/Buttons";

const ErrorPage = () => {

    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center text-center min-h-screen dark:bg-slate-900 bg-slate-200">
            <div className="w-full max-w-xs md:max-w-md">
                <h1 className="text-lg  font-medium mb-4 text-blue-500">Oopss</h1>
                <p className="text-4xl md:text-5xl font-bold text-red-500 mb-4">Page {error.statusText || error.message}</p>
                <p className="text-md font-medium dark:text-slate-400 text-slate-500 mb-4">Sorry, we couldn’t find the page you’re looking for.</p>
                <img className="my-8" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2UyZm1vdjkxdmxxeDVjemFvejhlYmFvcGtxcWlwcmY5eTlvNHVlYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6zaiXkx0jDgmQ/giphy.webp" alt="naruto sorry gif" />


                <Buttons classname='h-12' onClick={() => navigate(-1)}>Go Back</Buttons>
            </div>
        </div>
    )
}

export default ErrorPage;