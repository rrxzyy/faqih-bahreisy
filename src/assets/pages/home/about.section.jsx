import React from 'react'
import { motion } from 'motion/react'
import { fadeIn } from '../../components/layout/AnimationVariants';
import experienceData from '/public/content/experience.json';
const Experience = experienceData;

const FavBar = () => {
    console.log(Experience);
    return (
        <section className='w-full h-full md:py-8 py-4 bg-gradient-to-r dark:from-gray-950 dark:to-slate-900 from-gray-300 to-slate-200 dark:text-white text-slate-900'>
            <div className="lg:max-w-screen-lg max-w-screen-md flex flex-col lg:flex-row md:mx-auto mt-10 item-center lg:items-start justify-center gap-4 md:px-6 px-4">
                <motion.div
                    variants={fadeIn('up', 0.25)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 1 }}
                    className="flex items-cemter justify-center lg:py-10 py-2 lg:pr-8">
                    <h1 className='text-3xl font-bold md:text-4xl font-Poppins'><span className='hidden md:inline'>WORK </span>EXPERIENCE
                    </h1>
                </motion.div>
                <div>
                    {
                        Experience.map((exp) => (
                            <motion.div
                                variants={fadeIn('up', 0.25)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.05 }}
                                className='mt-4 flex flex-row rounded-lg dark:bg-slate-800/20 bg-slate-100/70 px-6 py-10 border-blue-500 border-b-4'>
                                <div>
                                    <div className='flex md:flex-row flex-col'>
                                        <div className='flex items-start justify-center mr-6'>
                                            <img src={exp.icon} className={`w-20 h-20 mb-4 md:mb-0 md:w-20 md:h-20 mx-auto justify-center items-center`} />
                                        </div>
                                        <div className='mr-0 md:mr-6'>
                                            <div>
                                                <h3 className='text-[22px] font-bold font-Poppins'>{exp.title}</h3>
                                                <p className='text-md mt-2 font-semibold'>
                                                    {exp.company_name}
                                                </p>
                                                <p className='text-secondary text-sm font-normal'>
                                                    {exp.date}
                                                </p>
                                            </div>
                                            <div>
                                                <ul className='mt-2 md:mt-5 list-disc ml-5 md:0 space-y-2'>
                                                    {exp.description.map((point, index) => (
                                                        <li key={index} className='text-white-100 pl-1 tracking-wider font-light text-sm leading-relaxed text-justify'>
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div >
                            </motion.div>
                        ))
                    }
                </div>

            </div>

            {/* Youtube Section */}
            {/* 
                <div className="max-w-screen-lg md:mx-auto mx-6 flex flex-col md:flex-row justify-normal h-full">
                <div className="w-full h-full md:w-3/5 flex flex-col md:pr-12 py-4">
                    <iframe src="https://www.youtube.com/embed/KO6ctaGgIh0?si=_en_OXc7V7rlEhA0&amp;" width="100%" height="320" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="w-full md:w-2/5 p-6 bg-slate-500/10 rounded-xl">
                    <h1 className='text-xl font-bold md:text-2xl py-2 md:pb-8 font-Poppins'>a glimpse into me</h1>
                    <p className='text-justify text-sm'>aku membuat video di youtube (dulu), namun untuk saat ini sedang dalam masa rehat karena banyaknya aktivitas yang harus di jalanin. semoga, secepatnya akan dilanjutkan!</p> <p className='font-bold'>SOON!! xixixi</p>
                    <p className='text-justify text-sm my-6'>mending subcribe dulu dah wkwk</p>
                    <Buttons>Subscribe</Buttons>
        </div>
                </div> */}
        </section >
    )
}



export default FavBar