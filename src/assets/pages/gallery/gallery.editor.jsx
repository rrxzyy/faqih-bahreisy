import { Fragment, useContext, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import { GalleryEditorContext } from "./editor.gallery";
import { uploadImage } from "../../../common/aws";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Buttons from "../../components/elements/Buttons/Buttons";
import defaultBanner from "../../../../public/images/blog banner.png";
import { UserAuthContext } from "../../../context/UserContext";
import axios from "axios";

const GalleryEditor = () => {

    let galleryBannerRef = useRef();

    let { gallery, gallery: { title, banner, date, author } = {},
        setGallery, setEditorState } = useContext(GalleryEditorContext);
    let { userAuth: { access_token } = {} } = useContext(UserAuthContext);
    let navigate = useNavigate();

    const handleBannerUpload = (e) => {
        let img = e.target.files[0];

        if (img) {
            let loadingToast = toast.loading("Uploading...");

            uploadImage(img).then((url) => {
                if (url) {
                    toast.dismiss(loadingToast);
                    toast.success("Image Uploaded");
                    //galleryBannerRef.current.src = url;

                    setGallery({ ...gallery, banner: url });
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

        setGallery({ ...gallery, title: input.value })
    }

    const handleUploadGallery = (e) => {

        if (e.target.className.includes('disable')) {
            return;
        }

        if (!banner.length) {
            return toast.error("Banner is required to upload it");
        }

        if (!title.length) {
            return toast.error("Title is required to upload it");
        }

        let loadingToast = toast.loading("Publishing...");

        e.target.classList.add('disable');

        let galleryObj = {
            title, banner
        }

        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/create-gallery-post", galleryObj, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        })
            .then(() => {
                e.target.classList.remove('disable')
                toast.dismiss(loadingToast);
                toast.success("Gallery uploaded successfully");

                setTimeout(() => {
                    navigate("/dashboard");
                }, 1500);
            })
            .catch(({ response }) => {
                e.target.classList.remove('disable')
                toast.dismiss(loadingToast);
                return toast.error(response.data.error);
            })
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
                        <div className="flex flex-col justify-between">
                            <div>
                                <textarea defaultValue={title}
                                    placeholder="Gallery Title" className="w-full min-h-10 dark:bg-slate-900 bg-slate-200 font-semibold leading-tight text-3xl outline-none resize-none placeholder:opacity-90"
                                    onKeyDown={handleTitleKeyDown} onChange={handleTitleKeyChange} />
                                <hr className="w-full my-2 dark:border-slate-800 border-slate-400" />
                            </div>
                            <div className="md:flex mt-12 lg:mt-0 lg:justify-normal justify-center">
                                <Buttons variant='primary' onClick={handleUploadGallery}>Upload</Buttons>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}

export default GalleryEditor;