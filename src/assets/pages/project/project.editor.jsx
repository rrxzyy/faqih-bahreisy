import { Fragment, useContext, useEffect, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import { EditorContext } from "./editor.project";
import { uploadImage } from "../../../common/aws";
import NavBar from "../../components/NavBar";
import Buttons from "../../components/elements/Buttons/Buttons";
import defaultBanner from "../../../../public/images/blog banner.png";
import { editorTools } from "../tools.editor"
import EditorJS from "@editorjs/editorjs";

const ProjectEditor = () => {

    let projectBannerRef = useRef();

    let { project, project: { title, banner, content, desc, category, date, author } = {},
        setProject, textEditor, setTextEditor, setEditorState } = useContext(EditorContext)

    useEffect(() => {
        setTextEditor(new EditorJS({
            holder: 'editorjs',
            data: content,
            tools: editorTools,
            placeholder: 'Write your story',
        }))
    }, [])

    const handleBannerUpload = (e) => {
        let img = e.target.files[0];

        if (img) {
            let loadingToast = toast.loading("Uploading...");

            uploadImage(img).then((url) => {
                if (url) {
                    toast.dismiss(loadingToast);
                    toast.success("Image Uploaded");
                    //projectBannerRef.current.src = url;

                    setProject({ ...project, banner: url });
                }
            })
                .catch(err => {
                    toast.dismiss(loadingToast);
                    return toast.error(err);
                })
        }
    };

    const handleErrorBanner = (e) => {
        let img = e.target;
        img.src = defaultBanner;
    }

    const handleTitleKeyDown = (e) => {
        if (e.keyCode == 13) { // 13 is Enter Key Code
            e.prevemtDefault();
        }
    }

    const handleTitleKeyChange = (e) => {
        let input = e.target

        input.style.height = 'auto'
        input.style.height = input.scrollHeight + 'px'

        setProject({ ...project, title: input.value })
    }

    const handlePublishEvent = () => {
        if (!banner.length) {
            return toast.error("Banner is required to publish it");
        }

        if (!title.length) {
            return toast.error("Title is required to publish it");
        }

        if (textEditor.isReady) {
            textEditor.save().then(data => {
                if (data.blocks.length) {
                    setProject({ ...project, content: data })
                    setEditorState("publish")
                } else {
                    return toast.error("Write some content to publish it");
                }
            })
                .catch(err => {
                    return toast.error(err);
                })
        }
    }

    return (
        <Fragment>
            <NavBar />
            <Toaster />
            <section className="md:pt-36 min-h-screen pt-28 md:pb-16 pb-8 dark:text-slate-100 text-slate-900 mx-4">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col mx-auto md:flex-row justify-center gap-16">
                        <div>
                            <div className="mx-auto max-w-[540px] w-full rounded-lg">
                                <div className="relative aspect-video border-4 hover:opacity-80 border-gray-300">
                                    <label htmlFor="uploadBanner">
                                        <img
                                            src={banner || defaultBanner}
                                            className="z-20" />
                                        <input
                                            id="uploadBanner"
                                            type="file"
                                            accept=".png, .jpg, .jpeg"
                                            hidden
                                            onChange={handleBannerUpload}
                                            onError={handleErrorBanner} />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 w-full">
                            <textarea defaultValue={title}
                                placeholder="Project Title" className="w-full min-h-10 dark:bg-slate-900 bg-slate-200 font-semibold leading-tight text-3xl outline-none resize-none placeholder:opacity-90"
                                onKeyDown={handleTitleKeyDown} onChange={handleTitleKeyChange} />
                            <hr className="w-full my-2 dark:border-slate-800 border-slate-400" />

                            <div id="editorjs" className="text-xl">
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Buttons variant='primary' onClick={handlePublishEvent}>Preview</Buttons>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}

export default ProjectEditor;