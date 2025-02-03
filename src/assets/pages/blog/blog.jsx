import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Card from '../components/elements/fragments/Card';


export const blogs_data = [
    {
        id: 1,
        image: 'public/images/arga.png',
        title: 'Arga Putra Bumi',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'January 12, 2023',
        read_time: '2',
        category: { name: ['Travel', 'Technology', 'Health', 'Food'] }
    },
    {
        id: 2,
        image: 'public/images/aurora.png',
        title: 'Aurora',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'April 20, 2023',
        read_time: '2',
        category: { name: ['Travel', 'Technology', 'Health', 'Food'] }
    },
    {
        id: 3,
        image: 'public/images/selena.png',
        title: 'Selena Admajaya',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'April 10, 2023',
        read_time: '2',
        category: { name: ['Technology', 'Health', 'Food', 'Video'] }
    },
    {
        id: 1,
        image: 'public/images/arga.png',
        title: 'Arga Putra Bumi',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'January 12, 2023',
        read_time: '2',
        category: { name: ['Travel', 'Technology', 'Health', 'Food'] }
    },
    {
        id: 2,
        image: 'public/images/aurora.png',
        title: 'Aurora',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'April 20, 2023',
        read_time: '2',
        category: { name: ['Travel', 'Technology', 'Health'] }
    },
    {
        id: 3,
        image: 'public/images/selena.png',
        title: 'Selena Admajaya',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas adipisci et, quis itaque officiis perspiciatis.',
        date: 'April 10, 2023',
        read_time: '2',
        category: { name: ['Technology', 'Health', 'Food', 'Video'] }
    },
];



function BlogPage() {

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
                        <h1 className='text-3xl font-bold md:text-4xl xl:text-5xl' style={{ fontFamily: 'Poppins' }}>BLOG</h1>
                        <p className='py-6'>disini aku menulis sesuatu seperti</p>
                    </div>
                </div>

                <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto justify-center items-center flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 h-full px-4 py-6 gap-4">

                    {blogs_data.map((blog) => (
                        <Card key={blog.id}>
                            <Card.Header image={blog.image} type={`blog`} />
                            <Card.Body title={blog.title} type={`blog`}
                                desc={blog.desc}
                                category={blog.category && blog.category.name} />
                            <Card.Footer date={blog.date} read_time={blog.read_time} />
                        </Card>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default BlogPage;
