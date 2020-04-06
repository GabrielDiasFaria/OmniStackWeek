import React, { useState, Fragment } from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

import Menu from '../../../components/menu/Menu'
import ListUser from '../containers/ListUser'
import EditUser from '../containers/EditUser'
import NewUser from '../containers/NewUser'
import '../styles/style_user.css'

export default function PageListUser() {

    const listUsers = [
        {
            id: 1,
            avatar: '',
            name: 'Gabriel',
            function: 'ABAP Developer',
            profile: 'Desenvolvedor',
            email: 'gabriel@descomplicandolinguagens.com.br',
            permission: {
                post: { create: false, update: false, view: true },
                tag: { create: false, update: false, view: true },
                user: { create: false, update: false, view: true }
            }
        },
    ]
    const initialFormState = { id: 0, avatar: '', name: '', funcao: '', profile: '', email: '' }
    const [users, setUsers] = useState(listUsers)
    const [currentUser, setCurrentUser] = useState(initialFormState)

    const [boolAlert, setBoolAlert] = useState(false)
    const [msgAlert, setMsgAlert] = useState('')
    const [txtButton, setTxtButton] = useState('Adicionar')
    const [editing, setEditing] = useState(false)
    const [adding, setAdding] = useState(false)

    const hideAlert = () => {
        setBoolAlert(false)
    }

    const showAlert = () => {
        setBoolAlert(true)
    }

    /** Start New */
    const startAddUser = () => {
        if (editing || adding) {
            setAdding(false)
            setEditing(false)
            setTxtButton('Adicionar')
        } else {
            setAdding(true)
            setTxtButton('Voltar')
        }
    }

    /** End New */
    const endAddUser = user => {
        setAdding(false)
        user.id = 0
        setUsers([...users, user])

        setMsgAlert(`Usuário (${user.id}) criado com sucesso!`)
        showAlert(true)
        setTxtButton('Adicionar')
    }

    /** Start Edit */
    const startEditRow = user => {
        setEditing(true)
        setCurrentUser(user)
        setTxtButton('Voltar')
    }

    /** End Edit */
    const endEditRow = (id, updatedUser) => {
        setEditing(false)
        setUsers(users.map(user => (user.id === id ? updatedUser : user)))

        setMsgAlert(`Usuário (${id}) modificado com sucesso!`)
        showAlert(true)
        setTxtButton('Adicionar')
    }

    /** Delete */
    const deleteRegister = id => {
        setEditing(false)
        setUsers(users.filter(user => user.id !== id))

        setMsgAlert(`Usuário (${id}) deletado com sucesso!`)
        showAlert(true)
    }

    return (
        <section id="main-content">
            <header>
                {<Menu activeOption="User" />}
            </header>

            <SweetAlert success show={boolAlert} title={msgAlert} onConfirm={hideAlert}>
            </SweetAlert>

            <section className="wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <section className="panel">
                            <header className="panel-heading">
                                Lista de Usuários
                                <span className="tools pull-right">
                                    <button type="button" className="btn btn-round btn-primary tagAddBtn" onClick={startAddUser}>
                                        {txtButton}
                                    </button>
                                </span>
                            </header>
                            <div className="panel-body">
                                {
                                    editing ? (
                                        <Fragment>
                                            <EditUser currentUser={currentUser} endEditRow={endEditRow} />
                                        </Fragment>
                                    ) : (false)
                                }

                                {
                                    adding ? (
                                        <Fragment>
                                            <NewUser endAddUser={endAddUser} />
                                        </Fragment>
                                    ) : (false)
                                }

                                {
                                    !editing && !adding ? (
                                        <Fragment>
                                            <ListUser list={users} startEditRow={startEditRow} deleteRegister={deleteRegister} />
                                        </Fragment>
                                    ) : (false)
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </section>

        </section>
    )
}