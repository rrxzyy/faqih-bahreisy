import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../../context/UserContext";
import UserNavigationPanel from "./UserNavigationPanel";
//import { useLogin } from "../../../hooks/useLogin";



const links = [
    { id: 1, link: '/dashboard', title: 'dashboard' },
    { id: 2, link: '/product', title: 'product' },
    { id: 3, link: '/project', title: 'project' },
    { id: 4, link: '/blog', title: 'blog' }
];

const Navigation = () => {

    let { userAuth } = useContext(UserAuthContext);

    let access_token = userAuth?.access_token;
    let profile_img = userAuth?.profile_img;

    if (access_token === undefined || access_token === null) {
        window.location.href = '/login';
    }

    const [userNav, setUserNav] = useState(false);

    // const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0)
        setTotalCart(sum)
    }, [cart])


    const handleUserNavPanel = () => {
        setUserNav(currentVal => !currentVal);
    }

    return (
        <nav className='font-bold flex h-28 bg-blue-950 text-white justify-between items-center px-10 fixed z-50 w-full'>
            <div className=''>
                <ul className='hidden md:flex items-center lg:text-lg'>
                    {links.map(({ id, title, link }) => (
                        <li key={id} className='cursor-pointer menu-item' >
                            <Link to={link} className='font-normal text-white'>{title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center">
                <div className="flex items-center bg-red-500 px-4 py-2 rounded-md mr-8">
                    {totalCart}
                </div>
                {access_token ?
                    <div className="relative" onClick={handleUserNavPanel}>
                        <button className="w-12 h-12 m-1">
                            <img src={profile_img} className="w-full hfull object-cover rounded-full" />
                        </button>
                        {userNav ? <UserNavigationPanel></UserNavigationPanel> : ""}
                    </div>
                    : null}
            </div>
        </nav>
    )
}



export default Navigation;