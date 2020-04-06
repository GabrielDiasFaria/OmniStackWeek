import React, { useState, useEffect } from 'react'
import FormUser from '../../../components/FormUser'

export default function EditUser(props) {

    const [user, setUser] = useState(props.currentUser)

    useEffect(
        () => {
            setUser(props.currentUser)
        },
        [props]
    )

    const handleInputChange = event => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    const handleInputChangeCk = event => {
        let { name, value } = event.target
        let modifiedUser = { ...user }

        if (value === "true") {
            value = false
        }
        else {
            value = true
        }

        switch (name) {
            case 'post.view':
                modifiedUser.permission.post.view = value
                break
            case 'post.create':
                modifiedUser.permission.post.create = value
                break
            case 'post.update':
                modifiedUser.permission.post.update = value
                break

            case 'tag.view':
                modifiedUser.permission.tag.view = value
                break
            case 'tag.create':
                modifiedUser.permission.tag.create = value
                break
            case 'tag.update':
                modifiedUser.permission.tag.update = value
                break

            case 'user.view':
                modifiedUser.permission.user.view = value
                break
            case 'user.create':
                modifiedUser.permission.user.create = value
                break
            case 'user.update':
                modifiedUser.permission.user.update = value
                break
            default:
                break
        }

        setUser(modifiedUser)

    }

    return (
        <form className="col-sm-12"
            onSubmit={event => {
                event.preventDefault()

                props.endEditRow(user.id, user)
            }}
        >
            <FormUser user={user} handleInputChangeCk={handleInputChangeCk} handleInputChange={handleInputChange} typeChange="Editar Usuário" />
        </form>
    )
}