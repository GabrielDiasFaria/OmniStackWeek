import React, { useState } from 'react'
import CKEditor from 'ckeditor4-react';
import FormPost from '../../../components/FormPost'

export default function NewPost(props) {

    const initialFormState = { id: 0, description: '', tag: 'SAP', category: '', html: '' }
    const [post, setPost] = useState(initialFormState)

    const editorInputChange = event => {
        setPost({ ...post, html: event.editor.getData() })
    }

    const handleInputChange = event => {
        const { name, value } = event.target

        setPost({ ...post, [name]: value })
    }

    const handleDropChange = (value, name) => {
        setPost({ ...post, [name]: value })
    }

    return (
        <form className="col-sm-12"
            onSubmit={event => {
                event.preventDefault()

                props.endAddRegister(post)
                setPost(initialFormState)
            }}
        >
            <div className="row">
                <div className="col-sm-8">
                    <CKEditor
                        data={post.html}
                        // type="inline"
                        onChange={editorInputChange} />
                </div>

                <div className="col-sm-4">
                    <FormPost post={post} handleDropChange={handleDropChange} handleInputChange={handleInputChange} typeChange="Editar Post" />
                </div>

            </div>

            <button type="submit" className="btn btn-round btn-primary">
                Salvar
            </button>
        </form>
    )
}