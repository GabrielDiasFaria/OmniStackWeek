import React, { useState } from 'react';
import FormUser from '../../../components/FormUser'

export default function NewUser(props) {

    const initialFormState = {
        id: 0,
        avatar: '',
        name: '',
        function: '',
        profile: '',
        email: '',
        permission: {
            posts: { create: false, update: false, view: false },
            tags: { create: false, update: false, view: false },
            categories: { create: false, update: false, view: false },
            users: { create: false, update: false, view: false }
        }
    }
    const [user, setUser] = useState(initialFormState)

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
            case 'posts.view':
                modifiedUser.permission.posts.view = value
                break
            case 'posts.create':
                modifiedUser.permission.posts.create = value
                break
            case 'posts.update':
                modifiedUser.permission.posts.update = value
                break

            case 'tags.view':
                modifiedUser.permission.tags.view = value
                break
            case 'tags.create':
                modifiedUser.permission.tags.create = value
                break
            case 'tags.update':
                modifiedUser.permission.tags.update = value
                break

            case 'categories.view':
                modifiedUser.permission.categories.view = value
                break
            case 'categories.create':
                modifiedUser.permission.categories.create = value
                break
            case 'categories.update':
                modifiedUser.permission.categories.update = value
                break

            case 'users.view':
                modifiedUser.permission.users.view = value
                break
            case 'users.create':
                modifiedUser.permission.users.create = value
                break
            case 'users.update':
                modifiedUser.permission.users.update = value
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

                props.endAddUser(user)
                setUser(initialFormState)
            }}
        >
            <FormUser user={user} handleInputChangeCk={handleInputChangeCk} handleInputChange={handleInputChange} typeChange="Editar Usuário" />
        </form>
    )
}