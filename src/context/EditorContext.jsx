import { createContext, useState } from "react";

const EditorContext = createContext();

const EditorContextProvider = ({ children }) => {

    const [project, setProject] = useState({
        image: "",
        title: "",
        desc: "",
        date: "",
        category: "",
        author: "",
    });

    return (
        <EditorContext.Provider value={{ project, setProject }}>
            {children}
        </EditorContext.Provider>
    );
};

export const EditorProvider = EditorContext;
export default EditorContextProvider;