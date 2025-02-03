import { IoMdMail } from 'react-icons/io';

const TextAreaForm = (props) => {
    const { placeholder, name, label } = props;


    return (
        <div>
            <label className='dark:text-slate-200 text-slate-700 font-semibold block mb-2'>{label}</label>
            <div className='relative'>
                <div className='absolute dark:text-slate-200 text-slate-700 inset-y-3 start-0 flex justify-center items-start ps-3 pointer-events-none'>
                    <IoMdMail />
                </div>
                <div className='flex flex-col gap-2 mb-4'>
                    <textarea
                        maxLength={100}
                        placeholder={placeholder}
                        name={name}
                        id=""
                        className="h-32 resize-none  w-full text-md p-2 ps-10 font-normal rounded-md min-w-full dark:text-white text-black border dark:border-slate-700 border-slate-300 dark:bg-slate-800 bg-slate-50 placeholder: opacity-100 focus:ring-blue-500 focus:border-blue-300">
                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default TextAreaForm;