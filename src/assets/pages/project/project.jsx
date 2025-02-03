import Card from '../../components/elements/fragments/Card';
import NavBar from '../../components/NavBar';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';


const projects = [
    {
        id: 1,
        image: 'public/images/arga.png',
        title: 'Arga Putra Bumi',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'January 12, 2023',
        read_time: '2',
        category: ['Game']
    },
    {
        id: 2,
        image: 'public/images/aurora.png',
        title: 'Aurora',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'April 20, 2023',
        read_time: '2',
        category: ['Travel', 'Technology', 'Health', 'Food']
    },
    {
        id: 3,
        image: 'public/images/selena.png',
        title: 'Selena Admajaya',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'April 10, 2023',
        read_time: '2',
        category: ['Travel', 'Technology', 'Health', 'Food']
    },
    {
        id: 4,
        image: 'public/images/arga.png',
        title: 'Arga Putra Bumi',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'January 12, 2023',
        read_time: '2',
        category: ['Travel', 'Technology', 'Health', 'Food']
    },
    {
        id: 5,
        image: 'public/images/aurora.png',
        title: 'Aurora',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'April 20, 2023',
        read_time: '2',
        category: ['Travel', 'Technology', 'Health', 'Food']
    },
    {
        id: 6,
        image: 'public/images/selena.png',
        title: 'Selena Admajaya',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'April 10, 2023',
        read_time: '2',
        category: ['Travel', 'Technology', 'Health', 'Food']
    },
];



function ProjectPage() {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        getBlogs((data) => {
            setBlogs(data)
        })
    })

    return (
        <div>
            <NavBar />
            <section className='bg-gradient-to-r dark:from-gray-950 dark:to-slate-900 from-gray-300 to-slate-200 lg:pt-32 pt-24'>
                <div className="max-w-screen-lg mx-auto flex justify-center h-full py-8 md:px-12 px-6 dark:text-white text-slate-900">
                    <div className="w-full text-center">
                        <h1 className='text-3xl font-bold md:text-4xl xl:text-5xl' style={{ fontFamily: 'Poppins' }}>PROJECT</h1>
                        <p className='py-6'>disini aku menyimpan proyek rancanganku</p>
                    </div>
                </div>

                <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto justify-center items-center flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 h-full px-4 py-6 gap-4">

                    {projects.map((project) => (
                        <Card key={project.id}>
                            <Card.Header image={project.image} type={`project`} />
                            <Card.Body title={project.title} type={`project`} category={project.category}
                                desc={project.desc} text={project.category} />
                        </Card>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ProjectPage;
