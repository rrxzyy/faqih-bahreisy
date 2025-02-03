import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { IoMdEye } from "react-icons/io";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const DetailBlogPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        getDetailBlog(id, (data) => {
            setBlog(data);
        })
    }
    )
    // console.log(blog.tags);
    return (
        <Fragment>
            <NavBar />
            <section className="bg-gradient-to-r dark:from-gray-950 dark:to-slate-900 from-gray-300 to-slate-200 h-full flex justify-center min-h-screen items-center">

                <div className="max-w-screen-xl py-8 md:px-12 px-6 dark:text-white text-slate-900">
                    <div className="w-full">

                        <h1 className="text-center text-3xl md:text-4xl title-font font-bold mb-6">{blog.title}</h1>
                        <h2 className="text-center text-lg title-font dark:text-gray-300 text-gray-700 tracking-widest mb-12">
                            {Array.isArray(blog.tags) && blog.tags.map((tag, index) => (
                                <span key={index}>{tag} </span>
                            ))}
                        </h2>

                        <p class="text-center leading-relaxed font-normal text-lg mb-8">{blog.body}</p>

                        <div className="flex font-bold items-center justify-center text-lg gap-8">
                            <p className="flex items-center"><IoMdEye size={24} className="mx-2" /> {blog.views} views</p>
                            <p className="flex items-center"><AiFillLike size={24} className="mx-2" /> {blog.reactions && blog.reactions.likes} likes</p>
                            <p className="flex items-center"><AiFillDislike size={24} className="mx-2" /> {blog.reactions && blog.reactions.dislikes} dislikes</p>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default DetailBlogPage;