import Embed from '@editorjs/embed';
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import Header from '@editorjs/header';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import InlineCode from '@editorjs/inline-code';
import LinkTool from '@editorjs/link';
import ColorPicker from 'editorjs-color-picker';

import { uploadImage } from '../../common/aws';

const uploadImageByFile = (e) => {
    return uploadImage(e).then(url => {
        if (url) {
            return {
                success: 1,
                file: { url }
            }
        }
    })
}

const uploadImageByURL = (e) => {
    let link = new Promise((resolve, reject) => {
        try {
            resolve(e)
        }
        catch (error) {
            reject(error);
        }
    })

    return link.then(url => {
        return {
            success: 1,
            file: { url }
        }
    })
}

export const editorTools = {
    embed: Embed,

    link: {
        class: LinkTool,
        config: {

        }
    },

    list: {
        class: List,
        inlineToolbar: true,
    },

    header: {
        inlineToolbar: ['link'],
        class: Header,
        config: {
            placeholder: 'Type Heading',
            levels: [1, 2, 3, 4],
            defaultLevel: 3,
        },
    },

    image: {
        class: ImageTool,
        config: {
            uploader: {
                uploadByUrl: uploadImageByURL,
                uploadByFile: uploadImageByFile
            }
        }
    },

    quote: {
        class: Quote,
        inlineToolbar: true
    },

    inlineCode: {
        class: InlineCode,
    },

    Marker: {
        class: Marker,
    },


    ColorPicker: {
        class: ColorPicker,
    }
}