import NavBar from '../components/NavBar';
import { motion } from 'motion/react'
import { fadeIn } from '../components/layout/AnimationVariants';
import Buttons from '../components/elements/Buttons/Buttons';
import Inputs from '../components/elements/Input/Input';
import InputForm from '../components/elements/Input/InputForm';
import TextAreaForm from '../components/elements/textarea/TextArea';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function SupportPage() {

    return (
        <div>
            <NavBar />
            <section className='bg-gradient-to-r min-h-screen dark:from-gray-950 dark:to-slate-900 from-gray-300 to-slate-200 dark:text-white text-slate-900 md:pt-24 pt-20 flex flex-col md:flex-row mx-auto gap-0 md:gap-6 lg:gap-16 justify-center px-8 lg:px-16'>
                <div className="max-w-screen-sm flex flex-col justify-center h-full">
                    <motion.div
                        variants={fadeIn('up', 0.25)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.05 }}
                        className='mt-12 flex md:flex-row flex-col rounded-xl w-full h-full dark:bg-slate-800/20 bg-slate-100/70 dark:border-neutral-500/30 border-neutral-400/50 border relative overflow-hidden'>
                        <div className='flex flex-col'>
                            <div className=''>
                                <img src="/images/arga.png" className='w-full h-48 md:h-56 lg:h-72 object-cover' />
                            </div>
                            <div className='mx-6 mb-6 md:mx-8 md:mb-12'>
                                <img src="/images/bahreisy.jpg" alt="" className='flex w-32 md:w-36 lg:w-40 mt-[-80px] md:mt-[-100px] left-8 rounded-full border-2 md:border-4 z-50 border-slate-900' />
                                <h1 className='text-3xl md:text-4xl font-bold mt-4 md:mt-6'>Faqih Bahreisy</h1>
                                <p className='text-sm md:text-md text-justify font-normal mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis earum voluptate ipsum, facilis dolorum ab distinctio vero exercitationem? Nam sint deleniti aliquid accusantium est cumque! Reiciendis numquam sit deleniti esse?</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="w-full lg:w-fit flex flex-col justify-center h-full mb-6">
                    <motion.div
                        variants={fadeIn('up', 0.25)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.05 }}
                        className='mt-12 flex flex-col w-full h-full'>
                        <h1 className='text-2xl lg:text-3xl font-bold mb-6 text-center'>Buy Me A Coffe</h1>

                        <div className='rounded-lg flex flex-col'>
                            <div className='mx-0 md:mx-6 w-full md:w-72 lg:w-96'>
                                <InputForm label='Nominal' name='price' type='number' placeholder='10.000'>
                                </InputForm>
                                <InputForm label='Name' type='text' name='username' placeholder='Enter your name'></InputForm>
                                <TextAreaForm label='Message' placeholder='Enter your message'>
                                </TextAreaForm>
                                <Buttons text="Buy Me A Coffe" variant='primary' classname='w-full'>Support</Buttons>
                                <p className='m-4 text-sm md:text-md text-slate-300 text-justify'>Semua hasil dari support digunakan untuk kebutuhan pribadi, penyaluran donasi yang lain, atau keperluan yang lain.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* support footer */}

            <footer name='footer' className='items-center w-full bg-gradient-to-r dark:from-gray-950 dark:to-slate-900 from-gray-300 to-slate-200 dark:text-white text-slate-900 md:pb-0 pb-24'>
                <div
                    className='h-full w-full justify-center items-center md:px-12  py-12'>
                    <motion.div
                        variants={fadeIn('down', 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.75 }}
                    >
                        <div className='flex flex-row justify-center items-center social-media px-6 md:px-2 py-2'>
                            <AiFillInstagram className='hover:-translate-y-1 transition-all duration-200 text-5xl px-2' />
                        </div>
                        <p className='text-center font-light'>This page interface is inspired by
                            <Link target='_blank' to={'https://dribbble.com/shots/7679682-New-Buy-Me-a-Coffee-Page'}>
                                <span className='font-semibold'> Jijo Sunny</span>
                            </Link>
                        </p>
                        <p className='text-center font-light'>from
                            <Link target='_blank' to={'https://www.buymeacoffee.com'}>
                                <span className='font-semibold'> www.buymeacoffee.com</span>
                            </Link>
                        </p>
                    </motion.div>
                </div>
            </footer >
        </div >
    )
}

export default SupportPage;
