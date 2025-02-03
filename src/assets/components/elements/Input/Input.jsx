import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Inputs = (props) => {
    const { type, placeholder, name } = props;

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div>
            <input
                type={type == "password" ? passwordVisible ? "text" : "password" : type}
                required min="10000" step="1"
                className="block w-full h-12 text-md p-2 ps-10 font-normal rounded-md min-w-full dark:text-white text-black border dark:border-slate-700 border-slate-300 dark:bg-slate-800 bg-slate-50 placeholder: opacity-100 focus:ring-blue-500 focus:border-blue-300"
                placeholder={placeholder}
                name={name} />
            {
                type === "password" ? <i onClick={() => setPasswordVisible(curremtValue => !curremtValue)} className='absolute dark:text-slate-200 text-slate-700 inset-y-0 end-0 flex justify-center items-center pe-4 cursor-pointer'> {passwordVisible ? <FaRegEyeSlash /> : <  FaRegEye />}</i> : ""
            }

        </div>
    )
}

export default Inputs;