import React from 'react'
import { MdOutlineAnalytics, MdOutlineCamera, MdOutlineDesignServices, MdOutlineDeveloperBoard, MdOutlineVideoSettings } from 'react-icons/md';
import { motion } from 'motion/react'
import { fadeIn } from '../../components/layout/AnimationVariants';

const features = [
    {
        icon: <MdOutlineDesignServices />,
        title: "Design Your Ideas",
        description: "Craft your creativity into meaningful designs that inspire innovation, captivate audiences, and turn your unique vision into life",
    },
    {
        icon: <MdOutlineAnalytics />,
        title: "Analyze Your Data",
        description: "Explore the depths of your data to uncover trends, generate valuable insights,  and shape more genius opportunities",
    },
    {
        icon: <MdOutlineDeveloperBoard />,
        title: "Develop Your Code",
        description: "Write the future with code that solves problems, builds possibilities, and transforms ideas into tangible, impactful solutions",
    },
    {
        icon: <MdOutlineCamera />,
        title: "Freeze Your Moments",
        description: "Preserve the beauty of life’s most precious memories by capturing them in vivid detail, ensuring they last for generations",
    },
    {
        icon: <MdOutlineVideoSettings />,
        title: "Capture Your Story",
        description: "Create a visual narrative of your unique journey, expressing your experiences and emotions in a way words alone cannot convey",
    }
];


const FeatureSection = () => {

    return (

        <section className='h-full w-full py-4 bg-gradient-to-r dark:from-gray-950 dark:to-slate-900 from-gray-300 to-slate-200 dark:text-white text-slate-900'>
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-normal h-full md:px-2 px-6">
                <motion.div
                    variants={fadeIn('up', 0.25)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="w-full py-2 text-center">
                    <h1
                        className='text-3xl font-bold md:text-4xl font-Poppins'>READY FOR ?
                    </h1>
                    <p className='pt-6'>Create Your Projects From One Place</p>
                </motion.div>
            </div>
            <div className='max-w-screen-xl md:mx-auto mb-8'>
                <div
                    className="flex flex-wrap mt-10 items-center justify-center gap-8 md:p-0 p-6">

                    {features.map((feature, index) => (
                        <motion.div
                            variants={fadeIn('up', 0.25)}
                            initial="hidden"
                            whileHover={{ y: -3 }}
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.25 }}
                            key={index} className="lg:w-1/4 md:w-1/3 w-full rounded-lg dark:bg-slate-800/20 bg-slate-100/70 border-blue-500 border-b-4 p-4 md:p-2 lg:p-1">
                            <div
                                className="flex px-8 mt-6">
                                <div className="flex h-10 w-10 text-xl py-2 rounded-full">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h5 className='mt-1 mb-4 text-xl font-semibold'>{feature.title}</h5>
                                </div>
                            </div>
                            <div className='flex px-8 lg:mb-12 md:mb-10 mb-8'><p className='font-light text-md leading-relaxed text-justify'>{feature.description} </p></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default FeatureSection