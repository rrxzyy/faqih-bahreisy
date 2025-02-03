import React from 'react'
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";
import Buttons from '../../components/elements/Buttons/Buttons';
import { motion } from 'motion/react'
import { fadeIn } from '../../components/layout/AnimationVariants';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <motion.section
            name='home' className='justify-normal items-center w-full bg-gradient-to-r dark:from-gray-950 dark:to-slate-900 from-gray-300 to-slate-200'>
            <div className='md:max-w-screen-lg lg:min-h-screen mx-auto flex flex-col md:flex-row pt-24 md:pt-32 lg:pb-0 pb-12 lg:pt-20 justify-normal items-center px-6 md:px-12'>
                <div
                    className='px-1 mr-0 md:mr-4 dark:text-white text-slate-900'>
                    <motion.div
                        className='font-bold text-4xl md:text-5xl lg:text-7xl py-2 md:pb-0 pb-8'>
                        <motion.div
                            variants={fadeIn('down', 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.5 }}>
                            faqih bahreisy
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className='max-w-[270px] mx-auto p-3 md:hidden block'>
                        <motion.img
                            variants={fadeIn('up', 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.5 }}
                            whileHover={{ y: -6 }}
                            src="/images/bahreisy.jpg" alt="faqih bahreisy profile"
                            className='rounded-full mx-auto' />
                    </motion.div>
                    <motion.p
                        variants={fadeIn('up', 0.1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.5 }}
                        className='text-sm lg:text-base text-justify font-normal pr-0 md:pr-8 md:py-6 py-4'>Fresh graduate of Information Systems with interests in UI/UX Design, Web Development, and some Machine Learning, particularly Artificial Intelligence. In my free time, I focus on Graphic Design and Filmmaking. Currently seeking opportunities to contribute to innovative technology projects.</motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.25)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.5 }}
                        className='flex md:justify-normal gap-3 py-4'>
                        <Link to="https://drive.google.com/file/d/13NLZfinaQxnfQk05sfQOFZK0nKVBZ_Ec/view?usp=sharing" target='_blank' rel='noopener noreferrer'>
                            <Buttons variant='primary' classname='flex items-center'>
                                Download
                                <FaAngleRight className=' ml-2 -mr-2 text-lg md:text-xl ' />
                            </Buttons>
                        </Link>
                        <Link to={"mailto:reikun1207@gmail.com"}>
                            <Buttons classname='flex items-center'>
                                Contact Me
                            </Buttons>
                        </Link>
                    </motion.div>
                </div>
                <div className='w-full py-2 pt-5 pb-5 hidden md:block'>
                    <motion.img
                        variants={fadeIn('right', 0.25)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.5 }}
                        src="/images/bahreisy.jpg" alt="faqih bahreisy profile"
                        className='rounded-full mx-auto' />
                </div>
            </div>
        </motion.section >
    )
}

export default Home