import { Link } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
import { IoMdStopwatch } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { motion } from 'motion/react'
import { fadeIn } from "../../layout/AnimationVariants";

const Card = (props) => {
    const { children } = props;

    return (
        <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col justify-between w-full max-w-lg bg-gradient-to-r dark:from-gray-900 dark:to-slate-900 dark:shadow-gray-800 shadow-md dark:text-white text-slate-900
        from-gray-100 to-slate-100 shadow-gray-400 rounded-lg"
        >
            {children}
        </motion.div>
    )
}

const Header = (props) => {
    const { image, id, type, link } = props;
    return (
        <div className="w-full h-fit group">
            <div className="relative overflow-hidden rounded-t-lg">
                <Link to={link} target='_blank' rel='noopener noreferrer'>
                    {/* <Link to={`/${type}/${id}`}> */}
                    <img src={image} className='w-full h-56 object-cover' />
                    <div className='absolute h-full w-full bg-slate-900/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-default'>
                        <Buttons variant='secondary' text="Read More" classname='text-sm'>Read More</Buttons>
                    </div>
                </Link>
            </div>
        </div>
    )
}

const Body = (props) => {
    const { title, desc, id, category, type, link } = props;
    return (
        <div className='p-4 flex flex-col gap-2 h-full'>
            <p className='md:text-xl text-lg font-bold'>
                <Link to={link} target='_blank' rel='noopener noreferrer'>
                    {/* <Link to={`/${type}/${id}`}> */}
                    {title.substring(0, 25)}
                </Link>

            </p>
            <Categories id={id} category={category} />
            <p className='text-justify dark:text-gray-300 text-gray-500 text-md'>{desc.substring(0, 200)} ...</p>
        </div>
    )
}

const Footer = (props) => {
    const { date, read_time } = props;
    return (
        <div className="flex flex-row justify-between text-sm p-4 border-t dark:border-slate-800 border-slate-300">
            <p className='flex flex-row justify-center items-center'><span><MdOutlineDateRange className='mr-1 text-lg' /></span>{date}</p>
            <p className='flex flex-row justify-center items-center'><span><IoMdStopwatch className='mr-1 text-lg' /></span>{read_time} {""} minutes</p>
        </div>
    )
}

const Buy_Footer = (props) => {
    const { price, btn_text } = props;
    return (
        <div className="flex flex-row justify-between text-sm p-4 border-t dark:border-slate-800 border-slate-300">
            <p className='flex flex-row justify-center items-center font-semibold text-xl'>Rp.{" "}
                {price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</p>
            <Buttons variant='primary' classname='bg-blue-600 text-md text-white'>
                {btn_text}</Buttons>
        </div >
    )
}

export const Categories = (props) => {
    const { category } = props;
    return (
        <div className='min-w-full'>
            <ul className="text-xs flex flex-wrap gap-1">
                {Array.isArray(category) && category.map((cat, index) => (
                    <li key={index} className='py-1 px-3 text-xs text-center rounded-full border 
                    border-sky-600 bg-sky-200/10 text-sky-600 hover:border-sky-500 hover:text-sky-500
                    dark:bg-sky-900/10'>
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    )
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Buy_Footer = Buy_Footer;

export default Card;