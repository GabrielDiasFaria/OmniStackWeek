import React, { useState } from 'react';
import FormTag from '../../../components/FormTag'

export default function NewTag(props) {

    const initialFormState = { id: 0, name: '', description: '', slug: '' }
    const [tag, setTag] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target

        setTag({ ...tag, [name]: value })
    }

    return (
        <form className="col-sm-12"
            onSubmit={event => {
                event.preventDefault()

                props.endAddTag(tag)
                setTag(initialFormState)
            }}
        >
            <FormTag tag={tag} handleInputChange={handleInputChange} typeChange="Adicionar Tag" />
        </form>
    )
}

