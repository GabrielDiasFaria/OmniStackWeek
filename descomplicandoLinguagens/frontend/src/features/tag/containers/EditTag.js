import React, { useState, useEffect } from 'react';
import FormTag from '../../../components/FormTag'

export default function EditTag(props) {

    const [tag, setTag] = useState(props.currentTag)

    useEffect(
        () => {
            setTag(props.currentTag)
        },
        [props]
    )

    const handleInputChange = event => {
        const { name, value } = event.target

        setTag({ ...tag, [name]: value })
    }

    return (
        <form className="col-sm-12"
            onSubmit={event => {
                event.preventDefault()

                props.endEditRow(tag._id, tag)
            }}
        >
            <FormTag tag={tag} handleInputChange={handleInputChange} typeChange="Editar Tag" />
        </form>
    )
}
