import { Fragment, useContext } from "react"
import { Link } from "react-router-dom";
import { DarkMode } from "../../../context/DarkMode";
import { MdOutlineLightMode, MdOutlineDarkMode, MdOutlineDoorBack, MdOutlineArrowBackIos } from "react-icons/md";



const AuthLayout = (props) => {
    const { title, children, type } = props;
    const { isDarkMode, toggleIsDarkMode } = useContext(DarkMode);

    return (
        <Fragment>

            <div className={`flex justify-center h-screen items-center
                ${isDarkMode && "bg-[url('https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-r dark:before:from-slate-950 dark:before:to-slate-900 before:from-slate-400 before:to-slate-300 before:opacity-80 before:z-[0]"}`}>
                <div className="z-10 md:mt-8 mt-0 mx-4 w-full justify-center items-center max-w-sm md:max-w-md">
                    <div className="w-full md:dark:bg-slate-950/50 md:border md:dark:border-slate-800 md:bg-slate-50/50 md:border-slate-400 md:p-12 p-4 md:rounded-xl">
                        <h1 className="text-3xl font-bold mb-4 dark:text-blue-500 text-blue-600">{title}</h1>

                        <p className="text-md font-medium dark:text-slate-300 text-slate-600 mb-4">
                            {type === 'login' ? "Selamat Datang. Silakan login untuk melanjutkan" : "Selamat Datang. Silakan daftar sesuai data anda."}
                        </p>
                        {children}
                        < Navigation type={type} />

                    </div>
                    <div className="top-0 justify-between">
                        <button className="z-10 absolute top-8 right-6 p-2 rounded-full hover:bg-slate-100/30 dark:hover:bg-white/10 dark:text-white text-slate-900 transition-all duration-200 ease-in"
                            onClick={toggleIsDarkMode}>
                            {isDarkMode === "dark"
                                ? <MdOutlineLightMode size={32} className=" text-white" />
                                : <MdOutlineDarkMode size={32} className=" text-slate-900 " />}
                        </button>
                        <button className="z-10 dark:text-white text-slate-900 font-bold absolute top-8 left-6 p-2 rounded-full hover:bg-slate-100/20 dark:hover:bg-white/10 transition-all duration-200 ease-in">
                            <Link to={"/"}>
                                <MdOutlineArrowBackIos size={28} className=" dark:text-white text-slate-900" />
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}

const Navigation = ({ type }) => {
    if (type === "login") {
        return (
            <p className="text-md text-center mt-2 font-medium dark:text-slate-300 text-slate-500">
                Don't have an account? {""}
                <Link className="dark:text-blue-500 text-blue-600 font-bold" to={"/register"}>
                    Register
                </Link>
            </p>
        )
    } else {
        return (
            <p className="text-md text-center mt-2 font-medium dark:text-slate-300 text-slate-500">
                Have an account? {""}
                <Link className="dark:text-blue-500 text-blue-600 font-bold" to={"/login"}>
                    Login
                </Link>
            </p>
        )
    }
}

export default AuthLayout;