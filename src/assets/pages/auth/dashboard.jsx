import { Fragment, useContext, useEffect, useState } from 'react';
import { UserAuthContext } from '../../../context/UserContext';
import NavBar from '../../components/NavBar';
import { motion } from 'motion/react'
import { fadeIn } from '../../components/layout/AnimationVariants';
import axios from 'axios';


function DashboardPage() {

    const { userAuth: { access_token, fullname, username } = {}, setUserAuth } = useContext(UserAuthContext);

    if (access_token === undefined || access_token === null) {
        window.location.href = '/login';
    }

    const [totalGallery, getGallery] = useState(null);

    const fetchGallery = () => {
        axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/gallery-post")
            .then(({ data }) => {
                getGallery(data.gallerys.length)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchGallery()
    }, [])

    const dashboardReport = [
        {
            title: "Project",
            total: totalGallery,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid rerum animi ducimus aut voluptates.",
        },
        {
            title: "Blog",
            total: totalGallery,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid rerum animi ducimus aut voluptates.",
        },
        {
            title: "Gallery",
            total: totalGallery,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid rerum animi ducimus aut voluptates.",
        },
        {
            title: "Support",
            total: totalGallery,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid rerum animi ducimus aut voluptates.",
        },
        {
            title: "Campaign",
            total: totalGallery,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid rerum animi ducimus aut voluptates.",
        },
        {
            title: "Donation",
            total: totalGallery,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid rerum animi ducimus aut voluptates.",
        }
    ];


    return (
        <Fragment>
            <NavBar />
            <section className='min-h-screen bg-gradient-to-r dark:from-gray-900 dark:to-slate-900 dark:text-slate-50 text-slate-900 from-gray-300 to-slate-300 lg:pt-32 lg:py-0 py-24'>
                <div className='md:max-w-screen-lg h-full md:mx-auto mb-8'>
                    <div className='flex flex-col md:grid md:grid-cols-3 justify-center items-center gap-4 p-4'>
                        {dashboardReport.map((report, index) => (
                            <motion.div
                                variants={fadeIn('up', 0.25)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.075 }}
                                key={index} className=" w-full lg:h-fit h-full rounded-lg dark:hover:bg-slate-800/50 hover:bg-slate-100/50 transition-all duration-200 border dark:border-neutral-700/40 border-neutral-400/40 p-6">
                                <div className="flex">
                                    <div>
                                        <h5 className='text-xl font-semibold'>Total {report.title}</h5>
                                        <h5 className='text-4xl my-3 font-semibold'>{report.total}</h5>
                                    </div>
                                </div>
                                <div className='flex mt-3 '><p className='font-light text-sm leading-relaxed text-justify'>{report.description}</p></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment >
    )
}

export default DashboardPage;
