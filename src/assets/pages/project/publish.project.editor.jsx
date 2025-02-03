import { FaTimes } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserAuthContext } from "../../../context/UserContext";
import { EditorContext } from "./editor.project";
import axios from "axios";
import Category from "../../components/elements/fragments/Tag"
import Buttons from "../../components/elements/Buttons/Buttons";

const PublishProjectEditor = () => {

    let tagLimit = 7;
    let characterLimit = 200;
    let { userAuth: { access_token } = {} } = useContext(UserAuthContext);
    let { project, project: { title, banner, content, desc, category } = {}, setProject, setEditorState
    } = useContext(EditorContext);
    let navigate = useNavigate();

    const handleCloseEvent = () => {
        setEditorState('project-editor')
    }

    const handleProjectTitleChange = (e) => {
        let input = e.target

        setProject({ ...project, title: input.value })
    }

    const handleProjectDescChange = (e) => {
        let input = e.target

        setProject({ ...project, desc: input.value })
    }

    const handleTitleKeyDown = (e) => {
        if (e.keyCode == 13) { // 13 is Enter Key Code
            e.preventDefault();
        }
    }

    const handleCategoryKeyDown = (e) => {
        if (e.keyCode == 13 || e.keyCode == 188) {
            e.preventDefault();

            let tag = e.target.value;

            if (category.length < tagLimit) {
                if (!category.includes(tag) && tag.length) {
                    if (tag.length >= 2 && tag.length <= 20) {
                        setProject({ ...project, category: [...category, tag] });
                    } else {
                        toast.error("Category must be between 2 and 20 characters");
                    }
                }
            } else {
                toast.error(`Cannot add more than ${tagLimit} tags`);
            }
            e.target.value = "";
        }
    }

    const PublishProject = (e) => {

        if (e.target.className.includes('disable')) {
            return;
        }

        if (!title.length) {
            return toast.error("Title is required to publish it");
        }
        if (!desc.length || desc.length > characterLimit) {
            return toast.error(`Write some description abot the project with maximumin ${characterLimit} characters to publish it`);
        }
        if (!category.length) {
            return toast.error("Category is required to publish it");
        }

        let loadingToast = toast.loading("Publishing...");

        e.target.classList.add('disable');

        let projectObj = {
            title, desc, banner, category, content, draft: false
        }

        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/create-project", projectObj, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
            .then(() => {
                e.target.classList.remove('disable')
                toast.dismiss(loadingToast);
                toast.success("Project published successfully");

                setTimeout(() => {
                    navigate("/dashboard");
                }, 500);
            })
            .catch(({ response }) => {
                e.target.classList.remove('disable')
                toast.dismiss(loadingToast);
                return toast.error(response.data.error);
            })
    }

    return (
        <section className="max-w-screen-xl lg:mx-12 md:mx-8 mx-4 py-12 min-h-screen grid lg:grid-cols-2 lg:gap-4">
            <Toaster />
            <button className="w-12 h-12 absolute top-4 right-4 p-2 rounded-full hover:bg-slate-600/10 dark:hover:bg-white/10  transition-all duration-200 ease-in" onClick={handleCloseEvent}><FaTimes className="w-6 h-6 m-1" /></button>

            <div className="max-w-full block">
                <p className="mb-2 mt-4">Preview</p>
                <div className="w-full lg:w-[90%] aspect-video rounded-lg overflow-hidden dark:bg-gray-800 bg-gray-100">
                    <img src={banner} />
                </div>
                <h1 className="text-3xl font-bold mt-8 leading-tight line-clamp-2">{title}</h1>
                <p className="text-lg font-gelasio font-normal mt-4 leading-7 line-clamp-4">{desc}</p>
            </div>
            <div className="dark:border-gray-700 border-gray-50 lg:border-1 lg:pl-8">
                <p className="mb-2 mt-4">Project Title</p>
                <input type="text" defaultValue={title} placeholder="Input Project Title" onChange={handleProjectTitleChange} className="w-[100%] rounded-md p-3 dark:bg-gray-800 bg-gray-100 pl-4 border  dark:border-gray-700 border-gray-50 focus:bg-transparent dark:placeholder:text-gray-400 placeholder:text-gray-400 dark:focus:bg-slate-600 focus:bg-white" />

                <p className="mb-2 mt-8">Description about the project</p>
                <textarea maxLength={characterLimit} defaultValue={desc} placeholder="Input Project Description" className="h-36 resize-none leading-7 w-[100%] rounded-md p-3 dark:bg-gray-800 bg-gray-100 pl-4 border  dark:border-gray-700 border-gray-50 focus:bg-transparent dark:placeholder:text-gray-400 placeholder:text-gray-400 dark:focus:bg-slate-600 focus:bg-white" onChange={handleProjectDescChange} onKeyDown={handleTitleKeyDown}></textarea>
                <p className="text-sm mt-2">{characterLimit - desc.length} characters left</p>
                <p className="mb-2 mt-8">Category</p>
                <div className="realtive w-[100%] rounded-md p-3 dark:bg-gray-800 bg-gray-100 dark:border-gray-700 border-gray-50 pl-4 border border-grey focus:bg-transparent dark:placeholder:text-gray-400 placeholder:text-gray-400 dark:focus:bg-slate-600 focus:bg-white">
                    <input type="text" placeholder="Input Category" className="sticky top-0 left-0 mb-3 w-[100%] rounded-md p-3 pl-4 border dark:bg-slate-700 bg-slate-200 dark:border-gray-700 border-gray-50 dark:placeholder:text-gray-400 placeholder:text-gray-400 dark:focus:bg-slate-600 focus:bg-white" onKeyDown={handleCategoryKeyDown} />
                    {category.map((tag, i) => {
                        return <Category tag={tag} key={i} />
                    })}
                </div>
                <p className=" text-sm mt-2 mb-8">{tagLimit - category.length} category left</p>
                <div className="flex gap-4">
                    <Buttons variant='primary' onClick={PublishProject}>Publish</Buttons>
                    {/* <Buttons variant='secondary' onClick={SaveDraftProject}>Save to Draft</Buttons> */}
                </div>
            </div>
        </section>
    )
}

export default PublishProjectEditor;   