import NavBar from '../../components/NavBar';
import { Fragment, useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Gallery from '/public/content/gallery.json';
import { motion } from 'motion/react'
import { fadeIn } from '../../components/layout/AnimationVariants';

function GalleryPage() {

    const fetchGallery = () => {
        axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/gallery-post")
            .then(({ data }) => {
                setGallery(data.gallerys)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchGallery()
    }, [])

    const [gallery, setGallery] = useState(null);
    const [image, setImage] = useState(false);
    const [tempSrc, setTempSrc] = useState('');

    const getImg = (src) => {
        setTempSrc(src)
        setImage(true)
    }

    const GalleryPostCard = ({ content }) => {
        console.log(content)
        let { title, banner, publishedAt, gallery_id: id } = content;
        return (
            <div className="w-full" onClick={() => getImg(banner)}>
                <img src={banner} className='object-cover rounded-lg' />
            </div>
        )
    }


    return (
        <Fragment>
            <NavBar />
            <Toaster />

            <section className='min-h-screen bg-gradient-to-r dark:from-gray-950 dark:to-slate-900 from-gray-300 to-slate-200 dark:text-white text-slate-900 lg:pt-32 pt-24'>

                <div className="max-w-screen-lg mx-auto flex justify-center h-full py-8 md:px-12 px-6">
                    <motion.div className="w-full text-center"
                        variants={fadeIn('up', 0.25)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.075 }}
                    >
                        <h1 className='text-3xl font-bold md:text-4xl xl:text-5xl' style={{ fontFamily: 'Poppins' }}>GALLERY</h1>
                        <p className='pt-8 pb-1'>Every picture tells a story, and this is my journey.</p>
                        <p>Explore and be inspired by mine.</p>
                        <p>TES UPDATE GITHBUB REMOTE 2</p>
                    </motion.div>
                </div>

                <div className={image
                    ? 'w-full h-full visible top-0 left-0 opacity-100 fixed flex justify-center items-center bg-black bg-opacity-70 overflow-hidden z-50 transition-all duration-300 ease-in-out'
                    : 'w-full h-full invisible top-0 left-0 opacity-0 fixed flex justify-center items-center overflow-hidden z-50 transition-all duration-300 ease-in-out'}>
                    <img src={tempSrc} className='w-auto h-auto max-w-full max-h-full block leading-none box-border p-8 m-8 z-50' />
                    <FaTimes size={30} className='cursor-pointer z-50 text-white transition-all duration-500 ease-in fixed top-5 right-4 p-1 bg-slate-700 rounded-md' onClick={() => setImage(false)} />
                </div>

                <div className="max-w-screen-xl items-center justify-center columns-1
                sm:columns-2 md:columns-3 2xl:columns-4 gap-8 p-8 mx-auto">
                    {
                        // gallery.map((img) => (
                        //     <div key={img.id} className='mx-0 md:mx-8 mb-12 break-inside-avoid cursor-pointer'>
                        //         <div className="w-full" onClick={() => getImg(img.image)}>
                        //             <img src={img.image} className='object-cover rounded-lg' />
                        //         </div>
                        //     </div>
                        // ))
                        // Gallery.map((img) => (
                        //     <div key={img.id} className='mx-0 md:mx-2 mb-12 break-inside-avoid cursor-pointer'>
                        //         <motion.div
                        //             variants={fadeIn('up', 0.25)}
                        //             initial="hidden"
                        //             whileInView={"show"}
                        //             viewport={{ once: false, amount: 0.075 }}
                        //             className="w-full" onClick={() => getImg(img.name)}>
                        //             <img src={img.name} className='object-cover rounded-lg' />
                        //         </motion.div>
                        //     </div>
                        // ))
                    }
                    {gallery == null ? null :
                        gallery.map((image_galley, index) => (
                            <motion.div
                                variants={fadeIn('up', 0.25)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.075 }}
                                key={index} className='mx-0 md:mx-2 mb-12 break-inside-avoid cursor-pointer'>
                                <GalleryPostCard content={image_galley} />
                            </motion.div>
                        ))
                    }
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default GalleryPage;