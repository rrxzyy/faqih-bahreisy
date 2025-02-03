import { createContext, useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { UserAuthContext } from "../../../context/UserContext";
import ProjectEditor from "./project.editor";
import PublishProjectEditor from "./publish.project.editor";


const projectStructure = {
    title: "",
    banner: "",
    desc: "",
    content: [],
    category: [],
    author: { personal_info: {} },
}

export const EditorContext = createContext({});

const ProjectEditorPage = () => {

    let { userAuth: { access_token } = {} } = useContext(UserAuthContext);
    const [editorState, setEditorState] = useState('project-editor')
    const [project, setProject] = useState(projectStructure)
    const [textEditor, setTextEditor] = useState({ isReady: false })

    // console.log(access_token)

    return (
        <EditorContext.Provider value={{ project, setProject, editorState, setEditorState, textEditor, setTextEditor }}>
            <section className="dark:bg-slate-900 bg-slate-200 dark:text-white text-slate-900">
                {access_token === null ? <Navigate to={'/login'} />
                    : editorState == "project-editor" ? <ProjectEditor /> : <PublishProjectEditor />
                }
            </section>
        </EditorContext.Provider>
    )
}

export default ProjectEditorPage;