import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { EditorContext } from "../../../pages/project/editor.project";


const Category = ({ tag = '' }) => {

    let { project, project: { category } = {}, setProject } = useContext(EditorContext);

    const handleDeleteCategory = () => {

        category = category.filter(t => t !== tag);
        setProject({ ...project, category });
    };

    return (
        <div className='relative m-1 inline-block'>
            <p className='py-1 px-3 text-sm font-semibold text-center rounded-full border 
                    border-sky-600 bg-sky-100/20 text-sky-700 hover:border-sky-600 hover:text-sky-600
                    dark:bg-sky-900/10'>
                {tag}
                <button><FaTimes size={12} className="ml-3 items-center justify-center" onClick={handleDeleteCategory} /></button>
            </p>
        </div>
    )
}

export default Category;