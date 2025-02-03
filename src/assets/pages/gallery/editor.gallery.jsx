import { createContext, useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { UserAuthContext } from '../../../context/UserContext';
import GalleryEditor from "./gallery.editor";


const galleryStructure = {
    title: "",
    banner: "",
    date: "",
    author: { personal_info: {} },
}

export const GalleryEditorContext = createContext({});

const EditorGalleryPage = () => {

    let { userAuth: { access_token } = {} } = useContext(UserAuthContext);
    const [editorState, setEditorState] = useState('gallery-editor')
    const [gallery, setGallery] = useState(galleryStructure)

    return (
        <GalleryEditorContext.Provider value={{ gallery, setGallery, editorState, setEditorState }}>
            <section className="dark:bg-slate-900 bg-slate-200 dark:text-white text-slate-900">
                <div>
                    {access_token === null ? <Navigate to={'/login'} />
                        : editorState == "gallery-editor" ? <GalleryEditor /> : null
                    }
                </div>
            </section>
        </GalleryEditorContext.Provider>
    )
}

export default EditorGalleryPage;