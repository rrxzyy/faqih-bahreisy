import React from 'react'
import Inputs from "./Input";
import { FaAt, FaKey, FaQuestionCircle, FaUser } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaDollarSign } from 'react-icons/fa6';

const InputForm = (props) => {
    const { label, type, placeholder, name } = props;
    return (
        <div>
            <label className='dark:text-slate-200 text-slate-700 font-semibold block mb-2'>{label}</label>
            <div className='relative'>
                <div className='absolute dark:text-slate-200 text-slate-700 inset-y-0 start-0 flex justify-center items-center ps-3 pointer-events-none'>
                    {
                        name === "email" ? (
                            <IoMdMail />
                        ) : name === "username" ? (
                            <FaAt />
                        ) : name === "fullname" ? (
                            <FaUser />
                        ) : name === "password" ? (
                            <FaKey />
                        ) : name === "price" ? (
                            <FaDollarSign />
                        ) : (
                            <FaQuestionCircle />
                        )
                    }
                </div>
                <div className="flex flex-col gap-2 mb-4">
                    <Inputs name={name} type={type} placeholder={placeholder} />
                </div>
            </div>
        </div>

    )
}

export default InputForm;