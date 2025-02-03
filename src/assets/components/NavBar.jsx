import React, { Fragment, useContext, useEffect, useState } from 'react'
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Link, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react'
import { fadeIn } from './layout/AnimationVariants';
import { DarkMode } from '../../context/DarkMode';
import Buttons from './elements/Buttons/Buttons';
import { UserAuthContext } from '../../context/UserContext';
import UserNavigationPanel from './layout/UserNavigationPanel';
import { BiGitCompare, BiHappyAlt, BiHomeAlt, BiNews, BiPhotoAlbum } from 'react-icons/bi';


const NavBar = () => {

    const location = useLocation()

    let { userAuth: { access_token, profile_img } = {} } = useContext(UserAuthContext);

    const [userNav, setUserNav] = useState(false);

    const handleUserNavPanel = () => {
        setUserNav(currentVal => !currentVal);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    const links = [
        { id: 0, link: '/', icon: <BiHomeAlt /> },
        {
            id: 1, link: 'https://faqihbahreisy.notion.site/Faqih-Bahreisy-1511497204ed801188bcca4aa2334f0d',
            title: 'project', icon: <BiGitCompare />
        },
        {
            id: 2, link: 'https://www.notion.so/faqihbahreisy/Faqih-Bahreisy-Blog-1531497204ed806cbe4efec7e76ff48c',
            title: 'blog', icon: <BiNews />
        },
        { id: 3, link: '/gallery', title: 'gallery', icon: <BiPhotoAlbum /> },
        // { id: 4, link: '/about', title: 'about', icon: <BiHappyAlt /> },
    ];


    const { isDarkMode, toggleIsDarkMode } = useContext(DarkMode);

    return (
        <Fragment>

            <nav className={'fixed top-0 z-50 flex justify-between items-center w-full h-20 md:h-24 px-4 md:px-12 dark:text-white text-slate-900 backdrop-blur-sm bg-gradient-to-r dark:from-gray-950/70 dark:to-slate-900/70 from-gray-200/70 to-slate-100/70 border-b dark:border-neutral-700/40 border-neutral-200/70 '}>

                <motion.div
                    variants={fadeIn('right', 0.25)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <Link to={"/"}>
                        <div className='z-50 flex cursor-pointer items-center font-semibold text-xl md:text-2xl'>
                            <span>
                                <img src="/faqihbahreisy-logo.svg" className="h-7 md:h-8 pr-3 md:pr-3" />
                            </span>
                            <h6 className='md:flex hidden'>
                                REILOGIC.
                            </h6>
                        </div>
                    </Link>
                </motion.div>

                <div className='flex items-center'>
                    <ul className='hidden lg:flex lg:text-lg'>
                        {links.map(({ id, title, link }) => (
                            <motion.li
                                initial={{ x: 25, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1, transition: { duration: 0.75 } }}
                                whileHover={{ y: -5, transition: { duration: 0.5 } }}
                                key={id} className='menu-item font-medium dark:text-white text-slate-900 cursor-pointer mx-4' >
                                {title === 'project' || title === 'blog' ? <Link to={link} target='_blank' rel='noopener noreferrer'>{title}</Link> : <Link to={link}>
                                    {title}
                                </Link>}
                            </motion.li>
                        ))}
                    </ul>

                    <motion.button
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        whileTap={{ rotate: -360, transition: { duration: 0.75 } }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="z-10 lg:ml-6 ml-4 p-2 rounded-full hover:bg-slate-700/10 dark:hover:bg-white/10 dark:text-white text-slate-900"
                        onClick={toggleIsDarkMode}>
                        {isDarkMode === "dark"
                            ? <MdOutlineLightMode size={28} className="w-7 h-7 m-1 text-white" />
                            : <MdOutlineDarkMode size={28} className="w-7 h-7 m-1 text-slate-900 " />}
                    </motion.button>

                    {access_token ?
                        <div className="relative lg:ml-6 ml-2" onClick={handleUserNavPanel}>
                            <button className="w-12 h-12 m-1">
                                <img src={profile_img} className="w-full hfull object-cover rounded-full" />
                            </button>
                            {userNav ? <UserNavigationPanel /> : ""}
                        </div>
                        : <motion.div
                            variants={fadeIn('left', 0.75)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.5 }}
                        >
                            {
                                location.pathname == "/support" && (
                                    <div className='flex'>
                                        <Link to={"/login"}>
                                            <Buttons variant='primary' type='submit' classname='md:flex w-28 md:w-24 ml-2 md:ml-4'>Login</Buttons>
                                        </Link>
                                        <Link to={"/register"}>
                                            <Buttons type='submit' classname='md:flex w-full hidden md:ml-2'>Register</Buttons>
                                        </Link>
                                    </div>
                                ) ||
                                <div>
                                    <Link to={"/support"}>
                                        <Buttons variant='primary' type='submit' classname='md:flex items-center lg:ml-4 ml-2'>support <span className='ml-1 hidden md:inline transition-none'>me</span></Buttons>
                                    </Link>
                                </div>
                            }
                        </motion.div>}
                </div>
            </nav >

            {
                location.pathname !== "/dashboard" && location.pathname !== "/editor" && location.pathname !== "/editor-gallery" && location.pathname !== "/editor-blog" && (
                    <div className={'lg:hidden flex mx-auto items-center justify-center'}>
                        <div className={'lg:hidden flex mx-auto items-center justify-center'}>

                            <ul className='z-50 flex fixed  md:bottom-12 bottom-6 backdrop-blur-sm bg-gradient-to-r dark:from-gray-950/50 dark:to-slate-900/50 from-gray-300/60 to-slate-200/60 border-b border border-slate-700 rounded-xl md:p-4 p-3  transition-none px-4'>
                                {links.map(({ id, title, link, icon }) => (
                                    <li key={id} className='dark:text-slate-100 text-slate-900 dark:hover:text-blue-400 hover:text-blue-900' >
                                        <a href={link}
                                            className='flex flex-col text-center md:p-4 p-2 items-center'>
                                            <span className='md:mx-3 md:text-4xl mx-1 text-3xl cursor-pointer' alt={title}>{icon}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div >
                    </div>
                )
            }

        </Fragment >
    )
}

export default NavBar