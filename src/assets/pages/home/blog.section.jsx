import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../../components/elements/fragments/Card';
import Buttons from '../../components/elements/Buttons/Buttons';
import { motion } from 'motion/react'
import { fadeIn } from '../../components/layout/AnimationVariants';


const blogs = [
    {
        id: 1,
        image: '/images/arga.png',
        title: 'Son of Earth',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'January 12, 2023',
        read_time: '1',
        category: {
            name: ['Story', 'Nature', 'Universe']
        }
    },
    {
        id: 2,
        image: '/images/aurora.png',
        title: 'Aurora from West',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'April 20, 2023',
        read_time: '1',
        category: {
            name: ['Story', 'Nature', 'Universe']
        }
    },
    {
        id: 3,
        image: '/images/selena.png',
        title: 'Twilight Saga',
        //title: 'Selena Admajaya',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'April 10, 2023',
        read_time: '1',
        category: {
            name: ['Story', 'Nature', 'Universe']
        }
    },
];

const BlogSection = () => {
    return (
        <section className='h-full w-full py-8 bg-gradient-to-r dark:from-gray-950 dark:to-slate-900 from-gray-300 to-slate-200 dark:text-white text-slate-900'>
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center h-full md:px-12 px-6">
                <motion.div
                    variants={fadeIn('up', 0.25)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="w-full py-2 text-center">
                    <h1 className='text-3xl font-bold md:text-4xl' style={{ fontFamily: 'Poppins' }}>BLOG</h1>
                    <p className='py-6'>Sharing My World Through Words</p>
                </motion.div>
            </div>

            <div className="max-w-screen-xl md:mx-auto grid sm:grid-cols-2 lg:grid-cols-3 grid-row items-center justify-center h-full md:px-8 px-6 gap-4 mb-6">

                {blogs.map((blog) => (
                    <Card key={blog.id}>
                        <Card.Header image={blog.image} type={`blog`} />
                        <Card.Body title={blog.title} type={`blog`}
                            desc={blog.desc}
                            category={blog.category && blog.category.name} />
                        <Card.Footer date={blog.date} read_time={blog.read_time} />
                    </Card>
                ))}

            </div>
            <motion.div
                variants={fadeIn('up', 0.25)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className='p-4 flex justify-center items-center'>
                <Link to={"https://www.notion.so/faqihbahreisy/Faqih-Bahreisy-Blog-1531497204ed806cbe4efec7e76ff48c"}
                    target='_blank' rel='noopener noreferrer'>
                    <Buttons classname="font-bold text-sm px-12">Read More</Buttons>
                </Link>
            </motion.div>
        </section >
    )
}

const Categories = [
    { id: 1, text: 'done', link: '/done' },
    { id: 2, text: 'blog', link: '/blog' },
    { id: 3, text: 'gallery', link: '/gallery' },
    { id: 4, text: 'about', link: '/about' },
    { id: 5, text: 'prediction', link: '/prediction' },
];

export default BlogSection