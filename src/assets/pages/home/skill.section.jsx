import React from 'react'
import { motion } from 'motion/react'
import { fadeIn } from '../../components/layout/AnimationVariants';
import skillData from '/public/content/skill.json';
const skills = skillData;


const SkillSet = (props) => {
    const { source, alt_name, img_size = 'w-20' } = props;
    return (
        <motion.div
            whileHover={{ y: -5, transition: { duration: 0.1 } }}
            variants={fadeIn('up', 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className='w-full md:rounded-lg md:shadow-sm 
        dark:bg-slate-900 dark:md:shadow-gray-700 dark:hover:bg-slate-800
        bg-slate-100 md:shadow-gray-400 hover:bg-white py-4 px-6'>
            <img src={source} alt={alt_name} className={`${img_size} object-center mx-auto justify-center items-center`} />
        </motion.div>
    )
}


const SkillSection = () => {
    return (
        <section
            className='h-full w-full py-8 bg-gradient-to-r dark:from-gray-950 dark:to-slate-900 from-gray-300 to-slate-200 dark:text-white text-slate-900'>
            <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-normal h-full md:px-12 px-6">
                <motion.div
                    variants={fadeIn('up', 0.25)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    className="w-full py-2 text-center">
                    <h1 className='text-3xl font-bold md:text-4xl font-Poppins'>SKILL</h1>
                    <p className='py-6'>Skills That I can Develop and Master</p>
                </motion.div>
            </div>

            <div className="max-w-screen-lg md:px-12 md:mx-auto md:flex-row h-full mb-6 justify-center grid grid-cols-3 md:grid-cols-5 mx-auto gap md:gap-4 font-semibold text-sm">

                {skills.map((skill, index) => {
                    return (
                        <SkillSet key={index} source={skill.source} alt_name={skill.name} />
                    )
                })}

            </div>
        </section >
    )
}

export default SkillSection