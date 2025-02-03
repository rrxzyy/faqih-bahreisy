import React, { useState } from 'react'
import { motion } from "motion/react"

function Buttons(props) {
    const { children, onClick = () => { }, classname, type = 'button', variant } = props;
    let button;

    const [isHovered, setIsHovered] = useState(false);


    if (variant === 'google') {
        button = (
            <motion.button
                onMouseEnter={(e) => setIsHovered(true)}
                onMouseLeave={(e) => setIsHovered(false)}
                animate={{
                    translateY: isHovered ? -5 : 0,
                    transition: { duration: 0.2 }
                }}
                className={`${classname} w-full text-slate-900 lg:h-12 lg:font-semibold lg:text-md text-md h-12 font-medium rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-50 border shadow-md border-slate-400 dark:border-slate-50 hover:dark:bg-slate-300 flex items-center justify-center gap-2 capitalize`}
                type={type} onClick={onClick} >
                <img src="/Google__G__logo.svg" className='items-center justify-center' />
                Login with Google
            </motion.button>
        )
    }
    else if (variant === 'primary') {
        button = (
            <motion.button
                onMouseEnter={(e) => setIsHovered(true)}
                onMouseLeave={(e) => setIsHovered(false)}
                animate={{
                    translateY: isHovered ? -3 : 0,
                    transition: { duration: 0.2 }
                }}
                className={`${classname} lg:h-12 lg:px-6 lg:font-semibold lg:text-md text-center items-center justify-center text-md h-12 px-6 font-medium rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-700 hover:to-slate-500 dark:from-blue-900 dark:to-blue-700 hover:dark:from-blue-950 hover:dark:to-blue-800 text-white`}
                type={type} onClick={onClick} >
                {children}
            </motion.button>
        );
    } else if (variant === 'secondary') {
        button = (
            <motion.button
                onMouseEnter={(e) => setIsHovered(true)}
                onMouseLeave={(e) => setIsHovered(false)}
                animate={{
                    translateY: isHovered ? -3 : 0,
                    transition: { duration: 0.2 }
                }}
                className={`${classname} lg:h-12 lg:px-6 lg:font-semibold lg:text-md text-center items-center justify-center text-md h-12 px-6 font-medium rounded-xl bg-slate-50/70 hover:bg-slate-300/70 dark:bg-blue-600/70 dark:hover:bg-blue-700/70  hover:-translate-y-1 dark:text-white text-black`}
                type={type} onClick={onClick} >
                {children}
            </motion.button>
        );
    } else {
        button = (
            <motion.button
                onMouseEnter={(e) => setIsHovered(true)}
                onMouseLeave={(e) => setIsHovered(false)}
                animate={{
                    translateY: isHovered ? -3 : 0,
                    transition: { duration: 0.2 }
                }}
                className={`${classname} lg:h-12 lg:px-6 lg:font-semibold lg:text-md text-center items-center justify-center text-md h-12 px-6 font-medium rounded-xl dark:text-white text-black dark:bg-transparent dark:hover:bg-slate-800 bg-transparent hover:bg-slate-100 border-2 border-slate-900 dark:border-slate-100`}
                type={type} onClick={onClick} >
                {children}
            </motion.button>
        );
    }

    return button;

}

export default Buttons;