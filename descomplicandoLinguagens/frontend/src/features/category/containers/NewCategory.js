import React, { useState } from 'react';
import FormCategory from '../../../components/FormCategory'

export default function NewCategory(props) {

    const initialFormState = { id: 0, name: '', description: '', slug: '' }
    const [category, setCategory] = useState(initialFormState)

    const handleInputChange = event => {
        const { name, value } = event.target

        setCategory({ ...category, [name]: value })
    }

    return (
        <form className="col-sm-12"
            onSubmit={event => {
                event.preventDefault()

                props.endAddRegister(category)
                setCategory(initialFormState)
            }}
        >
            <FormCategory category={category} handleInputChange={handleInputChange} typeChange="Adicionar Categoria" />
        </form>
    )
}