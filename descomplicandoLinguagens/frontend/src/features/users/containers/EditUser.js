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

                props.endEditRow(user._id, user)
            }}
        >
            <FormUser
                user={user}
                handleInputChangeCk={handleInputChangeCk}
                handleInputChange={handleInputChange}
                resetPassword={props.resetPassword}
            />
        </form>
    )
}