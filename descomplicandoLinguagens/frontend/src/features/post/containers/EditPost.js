import React, { useState, useEffect } from 'react'
import CKEditor from 'ckeditor4-react';
import FormPost from '../../../components/FormPost'

export default function EditPost(props) {

    const [post, setPost] = useState(props.post)

    useEffect(
        () => {
            setPost(props.post)
        },
        [props]
    )

    const editorInputChange = event => {
        setPost({ ...post, html: event.editor.getData() })
    }

    const handleInputChange = event => {
        const { name, value } = event.target

        setPost({ ...post, [name]: value })
    }

    return (
        <form className="col-sm-12"
            onSubmit={event => {
                event.preventDefault()

                props.endEditRow(post.id, post)
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
                    <FormPost post={post} handleInputChange={handleInputChange} typeChange="Editar Post" />
                </div>
            </div>

            <button type="submit" className="btn btn-round btn-primary">
                Salvar
            </button>
        </form>
    )
}