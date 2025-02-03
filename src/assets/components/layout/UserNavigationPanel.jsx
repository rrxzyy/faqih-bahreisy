import { useContext } from "react";
import { UserAuthContext } from "../../../context/UserContext";
import { Link, useLocation } from "react-router-dom";
import { LuFileCode, LuFileEdit, LuImage, LuLayoutDashboard, LuLogOut, LuUserCircle } from "react-icons/lu";
import { RemoveFromSession } from "../../../common/sessions";
import { motion } from 'motion/react'
import { fadeIn } from "./AnimationVariants";

const UserNavigationPanel = () => {
    const location = useLocation()
    let { userAuth: { username }, setUserAuth } = useContext(UserAuthContext);

    const handleLogout = () => {
        RemoveFromSession("user");
        setUserAuth({ access_token: null });
        window.location.href = '/login';
    }

    const links = [
        { id: 1, link: '/editor-project', title: 'Create Project', icon: <LuFileCode /> },
        { id: 2, link: '/editor-blog', title: 'Create Blog', icon: <LuFileEdit /> },
        { id: 3, link: '/editor-gallery', title: 'Upload Gallery', icon: <LuImage /> },
        { id: 4, link: `/user/${username}`, title: 'Profile', icon: <LuUserCircle /> }
    ];


    return (
        <motion.div
            variants={fadeIn('up', 0.01)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.01 }}
            className="dark:bg-slate-900 bg-slate-100 absolute right-0 border dark:border-slate-700 border-slate-400 w-60 overflow-hidden rounded-md mt-2">

            {location.pathname !== "/dashboard" && (
                <Link to='/dashboard' className="flex items-center gap-4 pl-6 py-4 dark:hover:bg-slate-800 hover:bg-slate-300">
                    <LuLayoutDashboard />
                    <p>Dashboard</p>
                </Link>
            )}

            {links.map(({ id, link, title, icon }) => (
                <Link key={id} to={link} className="flex items-center gap-4 pl-6 py-4 dark:hover:bg-slate-800 hover:bg-slate-300">
                    {icon}
                    <p>{title}</p>
                </Link>

            )
            )}
            <button className="w-full flex items-center gap-4 pl-6 py-4 dark:hover:bg-slate-800 hover:bg-slate-300" onClick={handleLogout}>
                <LuLogOut />
                <p>Logout</p>
            </button>
        </motion.div>
    )

}

export default UserNavigationPanel;