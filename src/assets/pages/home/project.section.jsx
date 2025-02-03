import React from 'react'
import { Link } from 'react-router-dom';
import Buttons from '../../components/elements/Buttons/Buttons';
import Card from '../../components/elements/fragments/Card';
import { motion } from 'motion/react'
import { fadeIn } from '../../components/layout/AnimationVariants';

const projects = [
    {
        id: 1,
        image: '/images/project/SatuBenih.png',
        title: 'Satu Benih Donation',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'January 12, 2023',
        read_time: '2',
        link: 'https://faqihbahreisy.notion.site/Satu-Benih-Website-Donation-1511497204ed80079b7bed11edc4ffc6?pvs=25',
        category: ['Travel', 'Technology', 'Health', 'Food', 'Game']
    },
    {
        id: 2,
        image: '/images/project/bankoo.png',
        title: 'Bankoo Mobile App',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'April 20, 2023',
        read_time: '2',
        link: 'https://www.notion.so/faqihbahreisy/Bankoo-Virtual-Bank-Mobile-1521497204ed8074b6bdf83f5af69f8a?pvs=4',
        category: ['Travel', 'Technology', 'Health', 'Food']
    },
    {
        id: 3,
        image: '/images/project/NatGeoIndonesia.png',
        title: 'Nat Geo Indonesia',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'April 10, 2023',
        read_time: '2',
        link: 'https://www.notion.so/faqihbahreisy/Nat-Geo-Wild-Indonsia-Website-1521497204ed80d9a2afcf1cbf4b3d7b?pvs=4',
        category: ['Travel', 'Technology', 'Health', 'Food']
    },
    {
        id: 4,
        image: '/images/project/Talky.png',
        title: 'Talky Messenger',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'January 12, 2023',
        read_time: '2',
        link: 'https://www.notion.so/faqihbahreisy/Talky-Messenger-Mobile-App-1521497204ed800abcc4de49021d9ff0?pvs=4',
        category: ['Travel', 'Technology', 'Health', 'Food', 'Video']
    }
];

const ProjectSection = () => {
    return (
        <section className='h-full w-full py-8 bg-gradient-to-r dark:from-gray-950 dark:to-slate-900 from-gray-300 to-slate-200 dark:text-white text-slate-900'>
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-normal h-full md:px-2 px-6">
                <motion.div
                    variants={fadeIn('up', 0.25)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="w-full py-2 text-center">
                    <h1 className='text-3xl font-bold md:text-4xl' style={{ fontFamily: 'Poppins' }}>PROJECT</h1>
                    <p className='py-6'>Showcasing My Projects and Creative Journey</p>
                </motion.div>
            </div>

            <div className="max-w-screen-lg md:mx-auto flex flex-col md:grid md:grid-cols-2 justify-center h-full md:px-8 px-6 gap-6 mb-6">
                {projects.map((project) => (
                    <Card key={project.id}>
                        <Card.Header image={project.image} link={project.link} />
                        <Card.Body title={project.title} link={project.link} category={project.category && project.category.name}
                            desc={project.desc} text={project.category.name} />
                    </Card>
                ))}
            </div>


            <motion.div
                variants={fadeIn('up', 0.25)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.5 }}
                className='p-4 flex justify-center items-center'>
                <Link to={"https://faqihbahreisy.notion.site/Faqih-Bahreisy-1511497204ed801188bcca4aa2334f0d"}
                    target='_blank' rel='noopener noreferrer'>
                    <Buttons classname="font-bold text-sm px-12">Read More</Buttons>
                </Link>
            </motion.div>
        </section >
    )
}

export default ProjectSection