import React from 'react'
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from 'motion/react'
import { fadeIn } from './layout/AnimationVariants';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer name='footer' className='items-center w-full bg-gradient-to-r dark:from-gray-950 dark:to-slate-900 from-gray-300 to-slate-200 dark:text-white text-slate-900 md:pb-0 pb-24'>
            <div className='h-full w-full justify-center items-center md:px-12  py-6'>

                <motion.div
                    variants={fadeIn('down', 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.75 }}
                >
                    <div className='flex flex-row justify-center items-center social-media px-6 md:px-2 py-2'>
                        <Link to='https://www.instagram.com/faqihbahreisy' target='_blank' rel='noopener noreferrer'>
                            <AiFillInstagram className='hover:-translate-y-1 transition-all duration-200 text-5xl px-2' />
                        </Link>
                        <Link to='https://www.github.com/rrxzyy' target='_blank' rel='noopener noreferrer'>
                            <AiFillGithub className='hover:-translate-y-1 transition-all duration-200 text-5xl px-2' />
                        </Link>
                        <Link to='https://www.linkedin.com/in/faqihbahreisy' target='_blank' rel='noopener noreferrer'>
                            <AiFillLinkedin className='hover:-translate-y-1 transition-all duration-200 text-5xl px-2' />
                        </Link>

                    </div>
                    <p className='text-center'>Copyright © 2025. Only Rei Reserved.</p>
                </motion.div>
            </div>
        </footer >
    )
}

export default Footer