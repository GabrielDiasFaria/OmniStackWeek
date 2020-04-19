import React, { useState, useEffect } from 'react'
import FormCategory from '../../../components/FormCategory'

export default function ListCategory(props) {

    const [category, setCategory] = useState(props.currentRegister)

    useEffect(
        () => {
            setCategory(props.currentRegister)
        },
        [props]
    )

    const handleInputChange = event => {
        const { name, value } = event.target

        setCategory({ ...category, [name]: value })
    }

    return (
        <form className="col-sm-12"
            onSubmit={event => {
                event.preventDefault()

                props.endEditRow(category._id, category)
            }}
        >
            <FormCategory category={category} handleInputChange={handleInputChange} typeChange="Editar Categoria" />
        </form>
    )
}